import requests
from bs4 import BeautifulSoup

# Needs Re-direct.
# url = "https://www.nasact.org/AF_MemberDirectory.asp"
url = "https://www.nasact.org/directory_search.asp?id=28"

# Make a GET request to the page
# response = requests.get(requests.get(url).url)
# print(response)
# Go to https://www.nasact.org/AF_MemberDirectory.asp click on
# "All NASACT Members" and that will execute the function:
# https://nasact.membershipsoftware.org/directory_search.asp?id=28 ->
# https://www.nasact.org/AF_MemberDirectory.asp.
# What is the function?

url = 'https://nasact.membershipsoftware.org/directory_search.asp?id=28'
response = requests.get(url)

if response.status_code == 200:
    html = response.content
    # do something with the HTML content
    print("the html code is ", html)
else:
    print(f"Failed to fetch {url}")


# Check if the request was successful
if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")
print("response content is ", response.content)
# Find all the rows in the table
table_rows = soup.find_all("main-content-subpage")
print(table_rows)
politicians = []

# Loop through each row in the table
for row in table_rows:

    # Get the cells in the row
    cells = row.find_all("td")
    print(cells)

    # Check if the row has Politician data (i.e. there are two cells)
    if len(cells) == 2:

        # Extract the Politician title & name and state from the cells
        politician_title_name = cells[0].text.strip()
        state = cells[1].text.strip()

        # Add the data to the politicians list
        politicians.append(
            {"title_and_name": politician_title_name, "state": state})

# Print the list of politicians
print(politicians)
