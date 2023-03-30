#    - [ ] https://www.nasact.org/AF_MemberDirectory.asp state treasurers

import requests
from bs4 import BeautifulSoup

url = 'https://nasact.membershipsoftware.org/directory_search.asp?id=2'
post_url = 'https://nasact.membershipsoftware.org/AF_MemberDirectory.asp'


response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

# Extract the form data from the response content
form_data = {
    'Dlist': 2,
    'Page': 1,
    'Page2': 1,
    'keyword': ''
}

print(response.content)

# Send a POST request to the post_url with the form data
post_response = requests.post(post_url, data=form_data)
print(post_response)

# Check if the POST request was successful
if post_response.status_code != 200:
    print(f"Failed to fetch {post_url}")
    exit()

# The post_response.content now should have the actual data
soup = BeautifulSoup(post_response.content, "html.parser")

# Find all tables
tables = soup.find_all('table')

# Iterate through tables
for table in tables:
    # Find all rows in the table
    rows = table.find_all('tr')
    # Iterate through rows
    for row in rows:
        # Find all columns in the row
        columns = row.find_all('td')
        # Iterate through columns
        for column in columns:
            # Print the text content of the column
            print(column)
