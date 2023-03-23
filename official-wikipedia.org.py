# If it doesn't have a field,

import requests
from bs4 import BeautifulSoup


def get_redirected_url(beautifulSoupObject):
    response = requests.get(beautifulSoupObject["href"], allow_redirects=True)
    return response.url


def scrape_county_links(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    table = soup.find("table", class_="wikitable sortable")
    links = []
    count = 0

    for row in table.find_all("tr")[1:]:
        if count >= 1:
            break
        cells = row.find_all("td")
        beautifulSoupObject = cells[0].find("a")

        redirected_county_link = get_redirected_url(beautifulSoupObject)
        print("What is beautifulSoupObject? ", beautifulSoupObject,
              "What is redirected county link? ", redirected_county_link)
        if beautifulSoupObject:
            link = redirected_county_link
            links.append(link)
            count += 1
    print("What are the links that are being returned from the scrape_county_links function? ", links)
    return links


def summarize_county_demographics(url):
    print("on the summarize_county_demographics function, the url is ", url)
    response = requests.get(url)
    print("What is the response on summarize_county_demographics? ", response)
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

for link in county_links:
    print("the refined link in county link is: ", link)

# I've got the links. That is about 90% of the scraping.
