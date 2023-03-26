import requests
from bs4 import BeautifulSoup
import time


def scrape_county_links(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    table = soup.find("table", class_="wikitable sortable")
    links = []

    for row in table.find_all("tr")[1:]:
        cells = row.find_all("td")
        census_link = cells[5].find("a")
        if census_link:
            link = census_link["href"]
            links.append(link)
    print("response is", response, url)

    return links


def summarize_county_table(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    table = soup.find("table", class_="infobox")

    summary = {}
    for row in table.find_all("tr"):
        header = row.find("th")
        if header:
            key = header.text.strip()
            value = row.find("td")
            if value:
                summary[key] = value.text.strip()

    return summary


url = "https://en.wikipedia.org/wiki/List_of_counties_in_Illinois"
county_links = scrape_county_links(url)
print("County_links are ", county_links)

for link in county_links:
    try:
        summary = summarize_county_table(link)
        print(summary)
    except Exception as e:
        print(f"Failed to fetch {link}: {e}")
    time.sleep(3)  # Wait for 3 seconds before making the next request
