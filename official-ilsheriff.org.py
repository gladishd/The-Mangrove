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

    # county_name = soup.find("h1", class_="entry-title").text.strip()
    # Extract the text and strip the white-space from it
    county_name = soup.find("h3").text.strip()
    print("the county name is going to be ", county_name)

    phone_number_element = soup.find(
        "div", class_="person-phone").text.strip()
    print("the phone number element is going to be ", phone_number_element)

    name_element = soup.find(
        "div", class_="emp-content").text.strip()
    print("the name element is going to be ", name_element)

    location_element = soup.find(
        "div", class_="person-priaddress").text.strip()
    print('does location element exist ', location_element)

    email = soup.find(
        "a", class_="social-icon email animate fa fa-envelope fa-fw")
    if (email):
        print('email is ', email)

    # return {"County Name": county_name, "Phone Number": phone_number, "Address": location}


for county in counties:
    county["county_link"] = "https://www.ilsheriff.org" + county["county_link"]

for county in counties:
    county_info = scrape_county_information(county["county_link"])
    # county.update(county_info) # Python is linear so comment this out to access the rest of the counties
