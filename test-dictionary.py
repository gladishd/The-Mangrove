import requests
from bs4 import BeautifulSoup

# Define a function to scrape the data from a single URL


def scrape_data(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch {url}")
        return

    soup = BeautifulSoup(response.content, "html.parser")

    # Extract the required fields from the 'soup' object
    # NOTE: Replace the lines below with the appropriate code to extract the correct fields from each website
    name = soup.find("div", class_="name").text
    position = soup.find("div", class_="position").text
    party = soup.find("div", class_="party").text
    level = soup.find("div", class_="level").text
    country = "United States"
    state = soup.find("div", class_="state").text
    county = soup.find("div", class_="county").text
    county_district = soup.find("div", class_="county-district").text
    state_house_district = soup.find("div", class_="state-house-district").text
    state_senate_district = soup.find(
        "div", class_="state-senate-district").text
    appellate_court_district = soup.find(
        "div", class_="appellate-court-district").text
    circuit_court_district = soup.find(
        "div", class_="circuit-court-district").text
    ward = soup.find("div", class_="ward").text
    elected_or_appointed = soup.find("div", class_="elected-or-appointed").text
    assumed_office = soup.find("div", class_="assumed-office").text
    term_ends = soup.find("div", class_="term-ends").text
    phone = soup.find("div", class_="phone").text
    email = soup.find("div", class_="email").text
    fax = soup.find("div", class_="fax").text
    website = soup.find("div", class_="website").text
    profile_picture = soup.find("div", class_="profile-picture").text

    # Return the extracted data as a dictionary
    return {
        "Name": name,
        "Position": position,
        "Party": party,
        "Level": level,
        "Country": country,
        "State": state,
        "County": county,
        "CountyDistrict": county_district,
        "StateHouseDistrict": state_house_district,
        "StateSenateDistrict": state_senate_district,
        "AppellateCourtDistrict": appellate_court_district,
        "CircuitCourtDistrict": circuit_court_district,
        "Ward": ward,
        "ElectedOrAppointed": elected_or_appointed,
        "AssumedOffice": assumed_office,
        "TermEnds": term_ends,
        "Phone": phone,
        "Email": email,
        "Fax": fax,
        "Website": website,
        "ProfilePicture": profile_picture
    }


url = "https://en.wikipedia.org/wiki/List_of_counties_in_Illinois"
politician_data = scrape_data(url)
print(politician_data)
