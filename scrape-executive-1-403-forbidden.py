# *********************************************Status Code: 403 Forbidden******************************************************
# *********************************************403 Forbidden******************************************************
# *********************************************403 Forbidden******************************************************
# *********************************************403 Forbidden******************************************************
# *********************************************403 Forbidden******************************************************
import requests
from bs4 import BeautifulSoup

url = 'https://www.nga.org/governors/'  # Status Code: 403 Forbidden
# url = "https://www.ilsheriff.org/sheriffs-directory/"

# Make a GET request to the page
response = requests.get(url)

print(response)
# Check if the status code is 200 OK
if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find the container with the list of governors
governors_container = soup.find('ul', {'class': 'card-list'})

# Find all governor cards in the container
governor_cards = governors_container.find_all('div', {'class': 'card__body'})

# Loop through each governor card and extract the desired information
for card in governor_cards:
    # Extract the governor's title and name
    title_name = card.find('h3', {'class': 'card__title'}).text.strip()
    # Extract the governor's state abbreviation
    state = card.find('div', {'class': 'card__state'}).text.strip()
    # Extract the link to the governor's page
    link = card.find('a')['href']
    # Print the extracted information for each governor
    print(f"{title_name}, {state}: {link}")
