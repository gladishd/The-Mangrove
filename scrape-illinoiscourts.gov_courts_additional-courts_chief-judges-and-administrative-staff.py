import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook

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

    else:
        print("Link not found")

    print("-----------------------------------------------------------")

# Save the workbook
wb.save('chief_judges_and_administrative_staff.xlsx')
