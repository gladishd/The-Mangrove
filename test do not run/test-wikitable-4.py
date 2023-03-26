import requests
from bs4 import BeautifulSoup


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
        county_link = cells[0].find("a")
        if county_link:
            link = county_link["href"]
            links.append(link)

    return links


def summarize_county_demographics(url):
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
print("What is county links? ", county_links)

for link in county_links:
    if link.startswith("https://"):
        summary = summarize_county_demographics(link)
        print(summary)
    else:
        print(f"Invalid link: {link}")
