import requests
from bs4 import BeautifulSoup

url = "https://www.nass.org/membership"
response = requests.get(url)

if response.status_code != 200:
    print(f"Failed to fetch {url}")
    exit()

soup = BeautifulSoup(response.content, "html.parser")

for row in soup.select("article"):
    # Select the h2 tag with the a tag inside
    h2_a_tag = row.select_one('h2 > a')
    if (h2_a_tag):
        print(h2_a_tag.text)

    # Select the p tag with the strong and a tags inside
    strong_a_tag = row.select_one('p > strong > a')
    if (strong_a_tag):
        print(strong_a_tag.text)

    # Select the p tag with the specific text "Secretary of State - Elected"
    p_elected_tag = row.find('p', string="Secretary of State - Elected")
    if p_elected_tag:
        print(p_elected_tag.text)
    else:
        p_appointed_tag = row.find(
            'p', string="Secretary of State - Appointed")
        if p_appointed_tag:
            print(p_appointed_tag.text)

    # Select the p tag with the address
    p_address_tag = row.select_one('p:nth-child(4)')
    if p_address_tag:
        print(p_address_tag.text)

    # Select the p tag with the phone number
    p_phone_tag = row.select_one('p:nth-child(5)')
    if p_phone_tag:
        print(p_phone_tag.text)

    # Select the p tag with the a tag containing the email
    p_email_tag = row.select_one('p > a[href^="mailto:"]')
    if p_email_tag:
        print(p_email_tag.text)
