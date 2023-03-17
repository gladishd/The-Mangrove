import re
import urllib.request
import spacy
import requests
from bs4 import BeautifulSoup

# Send a request to the AP News homepage
url = "https://apnews.com/"
response = requests.get(url)

# If the request is successful, parse the content
if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all the anchor tags with the 'href' attribute
    all_links = soup.find_all('a', href=True)

    # Iterate through the links, filter and print the URLs of just the '/article' pages
    article_links = []
    for link in all_links:
        href = link['href']
        if href.startswith('/article/'):
            article_url = url[:-1] + href
            if article_url not in article_links:
                article_links.append(article_url)

    print("AP News /article page URLs:")

    nlp = spacy.load("en_core_web_sm")

    for article_url in article_links:
        print(article_url)

        # Fetch the HTML doc for the current article
        html_doc = urllib.request.urlopen(article_url)
        soup = BeautifulSoup(html_doc, 'html.parser')

        # Extract the content of the article
        content = soup.find('div')
        paragraphs = content.find_all('p')

        article_text = ""
        for paragraph in paragraphs:
            article_text += paragraph.text + " "

        # Process the article text with spaCy NLP
        doc = nlp(article_text)

        # Print the financial entities found in the article
        print("\nFinancial Entities:")
        for entity in doc.ents:
            if entity.label_ in ["ORG", "MONEY", "PERCENT"]:
                print(f"{entity.text} ({entity.label_})")

        # Find key indicators and financial information about companies
        key_indicators = ["revenue", "earnings", "EBITDA", "gross margin", "net income",
                          "operating margin", "P/E ratio", "EPS", "dividend yield"]

        financial_info = []

        for indicator in key_indicators:
            pattern = re.compile(f"{indicator}[^.]*", re.IGNORECASE)
            matches = pattern.findall(article_text)
            if matches:
                financial_info.extend(matches)

        print("\nKey Indicators and Financial Information:")
        for info in financial_info:
            print(info)

        print("\n---\n")
else:
    print("Failed to fetch AP News homepage.")
