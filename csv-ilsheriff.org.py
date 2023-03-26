import csv
import requests
from bs4 import BeautifulSoup

url = "https://www.ilsheriff.org/sheriffs-directory/"
response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")
li_tags = soup.find_all(
    "li", class_="menu-item")

counties = []

for li_tag in li_tags:
    a_tag = li_tag.find("a", href=lambda href: href and "/county/" in href)
    if a_tag:
        county = {"county_name": a_tag.text.strip(),
                  "county_link": a_tag["href"]}
        counties.append(county)


def scrape_county_information(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")

    county_name = soup.find("h3").text.strip()

    phone_number_element = soup.find(
        "div", class_="person-phone")
    phone_number = phone_number_element.text.strip() if phone_number_element else None

    location_element = soup.find(
        "div", class_="person-priaddress")
    location = location_element.text.strip() if location_element else None

    email_element = soup.find(
        "a", class_="social-icon email animate fa fa-envelope fa-fw")
    email = email_element.get("href").replace(
        "mailto:", "") if email_element else None

    return {"County Name": county_name, "Phone Number": phone_number, "Location": location, "Email": email}


for county in counties[:3]:
    county["county_link"] = "https://www.ilsheriff.org" + county["county_link"]

with open('sheriffs.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['County Name', 'Phone Number', 'Location', 'Email'])
    for i, county in enumerate(counties[:3]):
        county_info = scrape_county_information(county["county_link"])
        writer.writerow([county_info.get('County Name', ''),
                         county_info.get('Phone Number', ''),
                         county_info.get('Location', ''),
                         county_info.get('Email', '')])
        print(f"Scraped data for county {i + 1} of 3")
