import requests
from bs4 import BeautifulSoup


def scrape_county_names(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    table = soup.find("table", class_="wikitable sortable")
    county_names = []

    for row in table.find_all("tr")[1:]:
        cells = row.find_all("td")
        county_name = cells[0].find("a")
        if county_name:
            name = county_name.text
            county_names.append(name)

    return county_names


url = "https://en.wikipedia.org/wiki/List_of_counties_in_Illinois"
county_names = scrape_county_names(url)

for name in county_names:
    print(name)
