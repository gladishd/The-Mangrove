import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook

# The basis URL for identifying HTML tags and class elements is
# https://ilga.gov/house/Rep.asp?GA=103&MemberID=3086
url = 'https://ilga.gov/house/'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the <a> tags within the "member-block" class divs
member_divs = soup.find_all('a', {"class": "notranslate"})

# Create a new workbook and worksheet
wb = Workbook()
ws = wb.active

# Add column headers
ws.append(['Name', 'Politician Type', 'District',
          'Springfield Office', 'District Office', 'Email'])


for div in member_divs:
    # print("What is the div in member_divs? ", div)
    member_url = "https://ilga.gov" + div['href']
    # This is where we get the response from the member_url. Here it is possible to access
    # Different HTMl elements on the visible page. This is what we do.
    response = requests.get(member_url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Get the representative's URL
    links_div = soup.find('a', {'class': 'notranslate'})
    if links_div:
        print("The current URL is: ", "https://ilga.gov" + links_div['href'])
    else:
        print("Couldn't find the URL element.")

    # Get the representative's name
    name_div = soup.find('span', {'class': 'heading notranslate'})
    name = name_div.text.strip()
    print("The current name is: ", name)

    # Get the representative's politician type
    politicianType_div = soup.find('span', {'class': 'heading'})
    politicianType = politicianType_div.text.strip()
    print("The current politician type is: ", politicianType)

    # Get the representative's district number
    district_span1 = soup.find(
        'span', {'class': 'notranslate heading2'}).text.strip()
    # district_span2 = soup.find(
    #     'span', {'class': 'heading2'}).text.strip()
    # district = district_span1 + district_span2
    district = district_span1 + " District"
    print("The current district is: ", district)

    # Get the representative's Springfield Office:
    springfieldOffice_elements = soup.find_all(
        'td', {'class': 'member'}
    )

    # print("----------------SPRINGFIELD OFFICE")
    # # Iterate over the first few 'td' elements (e.g., the first 3)
    # for index, td in enumerate(springfieldOffice_elements[:3]):
    #     # Extract the text from the 'td' element and remove any extra whitespace
    #     text = td.text.strip()
    #     print(f"{text}")

    # Initialize variables to store the data
    springfield_office = ''
    district_office = ''
    email = ''

    print("----------------SPRINGFIELD OFFICE")
    for index, td in enumerate(springfieldOffice_elements[:3]):
        text = td.text.strip()
        springfield_office += text + '\n'
    print(springfield_office)

    print("----------------DISTRICT OFFICE")
    for index, td in enumerate(springfieldOffice_elements[4:9]):
        text = td.text.strip()
        district_office += text + '\n'
    print(district_office)

    print("----------------EMAIL")
    if len(springfieldOffice_elements) >= 11:
        text = springfieldOffice_elements[10]
        for idx, item in enumerate(text.contents):
            if idx == 1:
                email = item.strip()
    else:
        print("Couldn't find the email element.")
    print("-----------------------------------------------------------")

    # Write data to worksheet. This is where the data gets translated into the .XLSX file.
    ws.append([name, politicianType, district,
               springfield_office, district_office, email])


# Save the workbook
# Rename ilga-house-members.xlsx to scrape-il-state-house.xlsx
wb.save('scrape-il-state-house.xlsx')

url = "https://ilga.gov/senate/Senator.asp?MemberID=3177"
response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")
print(soup)

# senator_name = soup.select_one(".row h1").text.strip()
# Scrape the desired information from the page
senator_name_element = soup.select_one(".row h1")
if senator_name_element:
    senator_name = senator_name_element.text.strip()
else:
    senator_name = "Not found"

print("Senator Name:", senator_name)

# Scrape the district information from the page
district_info_element = soup.select_one(".district")
if district_info_element:
    district_info = district_info_element.text.strip()
else:
    district_info = "Not found"

print("District Info:", district_info)


# Scrape other desired information from the page
# Todo: Separate out Parentheses and (D) (R) from the name of the Representative.
# Make sure to get the Biography. The title should be "Bio" with the contents starting after the :.
# Create another column that has their Position, separate them out.
