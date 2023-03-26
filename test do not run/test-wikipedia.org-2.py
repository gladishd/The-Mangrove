import requests
from bs4 import BeautifulSoup

# Define a function to scrape county links from the Wikipedia page


def scrape_county_links(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    table = soup.find("table", class_="wikitable sortable")
    links = []

    # Iterate through all rows of the table, skipping the header row
    for row in table.find_all("tr")[1:]:
        cells = row.find_all("td")

        # The first cell contains the county name and its link
        county_link = cells[0].find("a")
        if county_link:
            link = county_link["href"]
            links.append(link)

    return links


# Scrape the links for each county in Illinois
url = "https://en.wikipedia.org/wiki/List_of_counties_in_Illinois"
county_links = scrape_county_links(url)
print(county_links)
