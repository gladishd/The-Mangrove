import requests
from bs4 import BeautifulSoup


def scrape_county_links(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    county_items = soup.find_all(
        "li", class_="menu-item", id=lambda x: x and x.startswith("menu-item-"))
    links = []
    print("county items is ", county_items)
    for li in soup.find_all('li'):
        link = li.find('a')['href']
        # links.append(link)
        print('link is ', link)

    for a in county_items.find_all('li'):
        link = li.find('a')['href']
        # links.append(link)
        print('link is ', link)

    for item in county_items:
        link = item.find("a")["href"]
        if "/county/" in link:
            links.append(link)

    return links


def scrape_county_information(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")
    county_name = soup.find("h1", class_="entry-title").text.strip()
    phone_number = soup.find("div", class_="wpb_text_column").find(
        "strong").text.strip()
    location = soup.find("span", class_="wpgmza-address").text.strip()

    return {"County Name": county_name, "Phone Number": phone_number, "Location": location}


url = "https://www.ilsheriff.org/sheriffs-directory/"
county_links = scrape_county_links(url)

for link in county_links:
    county_info = scrape_county_information(link)
    print(county_info)
