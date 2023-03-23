import requests
from bs4 import BeautifulSoup

url = "https://www.nass.org/membership"
response = requests.get(url)
print(response)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")
print(soup)

politicians = []

for row in soup.select("div#table-1 tr"):
    cells = row.find_all("td")
    if len(cells) == 3:
        title_name = cells[0].get_text(strip=True)
        state = cells[1].get_text(strip=True)
        politician = {"title_name": title_name, "state": state}
        politicians.append(politician)

print(politicians)
