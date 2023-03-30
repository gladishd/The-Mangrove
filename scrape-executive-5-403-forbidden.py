# 403 Forbidden
#     - [ ] https://www.nasact.org/AF_MemberDirectory.asp state comptrollers
import requests
from bs4 import BeautifulSoup

url = 'https://www.naag.org/find-my-ag/'
response = requests.get(url)

if response.status_code != 200:
    print(response)  # 403 - The Beautiful Soup Spider is a Scraper!
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")

# Find all the 'a' tags with an href attribute
links = soup.find_all('a', href=True)

# Iterate through the links and print the href attribute
for link in links:
    print(link['href'])
