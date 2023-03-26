import requests
from bs4 import BeautifulSoup

url = 'https://ilga.gov/house/Rep.asp?GA=103&MemberID=3149'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Get the representative's name
name_div = soup.find('span', {'class': 'heading notranslate'})
print(name_div.text.strip())

# Get the representative's district number
district_span1 = soup.find(
    'span', {'class': 'notranslate heading2'}).text.strip()
print(district_span1, "District")
