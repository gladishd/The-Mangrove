import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook

url = 'https://ilga.gov/house/'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the <a> tags within the "member-block" class divs
member_divs = soup.find_all('a', {"class": "notranslate"})

# Create a new workbook and worksheet
wb = Workbook()
ws = wb.active

# Add column headers
ws.append(['Name', 'District'])

for div in member_divs:
    member_url = "https://ilga.gov" + div['href']
    response = requests.get(member_url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Get the representative's name
    name_div = soup.find('span', {'class': 'heading notranslate'})
    name = name_div.text.strip()

    # Get the representative's district number
    district_span1 = soup.find(
        'span', {'class': 'notranslate heading2'}).text.strip()
    district = district_span1 + " District"

    # Write data to worksheet
    ws.append([name, district])

# Save the workbook
wb.save('ilga_members.xlsx')
