import requests
from bs4 import BeautifulSoup

url = "https://www.naag.org/find-my-ag/"
response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")
state_blocks = soup.find_all("div", class_="state-block")

for block in state_blocks:
    state = block.find("h3").text.strip()
    attorneys_general = block.find_all("li")
    for attorney_general in attorneys_general:
        name = attorney_general.text.strip()
        print(f"{name} ({state})")
