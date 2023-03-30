import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook

url = "https://www.nass.org/membership"
response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")

# Create a new XLSX workbook and add a worksheet
workbook = Workbook()
worksheet = workbook.active

# Write header row
header = ["State", "Official", "Role", "Address", "Phone", "Email"]
worksheet.append(header)

for row in soup.select("article"):
    data = []

    # Select the h2 tag with the a tag inside
    h2_a_tag = row.select_one('h2 > a')
    data.append(h2_a_tag.text if h2_a_tag else "")

    # Select the p tag with the strong and a tags inside
    strong_a_tag = row.select_one('p > strong > a')
    data.append(strong_a_tag.text if strong_a_tag else "")

    # Select the p tag with the specific text "Secretary of State - Elected"
    p_elected_tag = row.find('p', string="Secretary of State - Elected")
    if p_elected_tag:
        data.append(p_elected_tag.text)
    else:
        p_appointed_tag = row.find(
            'p', string="Secretary of State - Appointed")
        data.append(p_appointed_tag.text if p_appointed_tag else "")

    # Select the p tag with the address
    p_address_tag = row.select_one('p:nth-child(4)')
    data.append(p_address_tag.text if p_address_tag else "")

    # Select the p tag with the phone number
    p_phone_tag = row.select_one('p:nth-child(5)')
    data.append(p_phone_tag.text if p_phone_tag else "")

    # Select the p tag with the a tag containing the email
    p_email_tag = row.select_one('p > a[href^="mailto:"]')
    data.append(p_email_tag.text if p_email_tag else "")

    # Append the data row to the worksheet
    worksheet.append(data)

# Save the workbook to a file
workbook.save("nass_members.xlsx")
