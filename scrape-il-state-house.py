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
    links_div = soup.find('a', {'class': 'notranslate'})
    print("https://ilga.gov" + links_div['href'])

    name_div = soup.find('span', {'class': 'heading notranslate'})
    name = name_div.text.strip()
    print(name)

    # Get the representative's district number
    district_span1 = soup.find(
        'span', {'class': 'notranslate heading2'}).text.strip()
    district = district_span1 + " District"

    # Write data to worksheet
    ws.append([name, district])

# Save the workbook
wb.save('ilga_members.xlsx')


url = "https://ilga.gov/senate/Senator.asp?MemberID=3177"
response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")
print(soup)

# Scrape the desired information from the page
senator_name = soup.select_one(".row h1").text.strip()
district_info = soup.select_one(".district").text.strip()

print("Senator Name:", senator_name)
print("District Info:", district_info)

# Scrape other desired information from the page
