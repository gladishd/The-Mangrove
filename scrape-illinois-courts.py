import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook
import os
import json

url = 'https://www.illinoiscourts.gov/courts/additional-courts/chief-judges-and-administrative-staff/'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the div tags with class 'col-3 cta-card'
cta_cards = soup.find_all('div', {'class': 'col-3 cta-card'})

# Create a new workbook and worksheet
wb = Workbook()
ws = wb.active

# Add column headers
ws.append(['Link', 'H2', 'Details'])

data = []

for card in cta_cards:
    link_element = card.find('a')
    if link_element:
        link = link_element['href']
        print("Link:", link)

        # Request the content of the link
        link_response = requests.get(link)
        link_soup = BeautifulSoup(link_response.content, 'html.parser')

        # Scrape the h2 element
        h2_element = link_soup.find('h2')
        if h2_element:
            h2_text = h2_element.text.strip()
            print("H2:", h2_text)
        else:
            print("H2 not found")

        # Scrape the details element
        details_element = link_soup.find('div', {'class': 'details'})
        if details_element:
            details_text = details_element.text.strip()
            print("Details:", details_text)
        else:
            print("Details not found")

        # Write data to worksheet
        ws.append([link, h2_text, details_text])

        # Add the scraped data to the list
        data.append({'Link': link, 'H2': h2_text, 'Details': details_text})

    else:
        print("Link not found")

    print("-----------------------------------------------------------")

# Save the workbook
wb.save('chief_judges_and_administrative_staff.xlsx')

# Loop through the data and split the Details value into separate key-value pairs
for item in data:
    details = item['Details']
    details_split = details.split('\n')
    print('details split is equal to ', details_split)
    # title = details_split[0].replace('Title: ', '')
    title = details_split[0].rstrip('\r')
    # district = details_split[1].replace('District: ', '')
    district = details_split[2].rstrip('\r')
    # circuit = details_split[2].replace('Circuit: ', '')
    circuit = details_split[4].rstrip('\r')
    item['Title'] = title
    item['District'] = district
    item['Circuit'] = circuit
    del item['Details']
print(data)

# Save the data to a JSON file
json_file_path = 'chief_judges_and_administrative_staff.json'
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file)

# Print a confirmation message to the console
if os.path.exists(json_file_path):
    print(f"JSON data saved to {json_file_path}")
else:
    print("Error: JSON data not saved")

# Save the data to an Excel file
wb = Workbook()
ws = wb.active
ws.append(['Link', 'H2', 'Details'])
for row in data:
    ws.append([row['Link'], row['H2'], row['Title'],
              row['District'], row['Circuit']])
wb.save('chief_judges_and_administrative_staff.xlsx')
