import matplotlib.ticker as ticker
import pandas as pd
import seaborn as sns
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib.pyplot as plt

from nltk.sentiment import SentimentIntensityAnalyzer
from bs4 import BeautifulSoup
import requests
import spacy
import urllib.request
import re
import nltk
nltk.download('vader_lexicon')

# Initialize the VADER sentiment intensity analyzer
sia = SentimentIntensityAnalyzer()


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

    # Initialize dictionaries to store financial entities, key indicators, and financial information
    financial_entities = {}
    key_indicators_info = {}

    for article_url in article_links:
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

        # Store the financial entities found in the article
        for entity in doc.ents:
            if entity.label_ in ["ORG", "MONEY", "PERCENT"]:
                sentence = entity.sent.text  # Get the sentence containing the entity
                sentiment = sia.polarity_scores(sentence)['compound']
                connotation = "positive" if sentiment > 0 else "negative" if sentiment < 0 else "neutral"
                entity_with_connotation = f"{entity.text} ({connotation})"
                if entity_with_connotation not in financial_entities:
                    financial_entities[entity_with_connotation] = [article_url]
                else:
                    financial_entities[entity_with_connotation].append(
                        article_url)

        # Find key indicators and financial information about companies
        key_indicators = ["revenue", "earnings", "EBITDA", "gross margin", "net income",
                          "operating margin", "P/E ratio", "EPS", "dividend yield"]

        for indicator in key_indicators:
            pattern = re.compile(f"{indicator}[^.]*", re.IGNORECASE)
            matches = pattern.findall(article_text)
            if matches:
                for match in matches:
                    sentiment = sia.polarity_scores(match)['compound']
                    connotation = "positive" if sentiment > 0 else "negative" if sentiment < 0 else "neutral"
                    match_with_connotation = f"{match} ({connotation})"
                    if match_with_connotation not in key_indicators_info:
                        key_indicators_info[match_with_connotation] = [
                            article_url]
                    else:
                        key_indicators_info[match_with_connotation].append(
                            article_url)

    # Print the financial entities and their corresponding articles
    print("\nFinancial Entities:")
    for entity, articles in financial_entities.items():
        print(f"{entity}:")
        for article in articles:
            print(f"  - {article}")

    # Print the key indicators and financial information and their corresponding articles
    print("\nKey Indicators and Financial Information:")
    for info, articles in key_indicators_info.items():
        print(f"{info}:")
        for article in articles:
            print(f"  - {article}")

else:
    print("Failed to fetch AP News homepage.")

# Initialize a DataFrame to store the financial entities and their connotations
financial_entities_df = pd.DataFrame(
    columns=["Entity", "Connotation", "Article"])

# Add the financial entities and their corresponding articles to the DataFrame
for entity, articles in financial_entities.items():
    for article in articles:
        entity_text, connotation = entity.split(" (")
        connotation = connotation[:-1]  # Remove the closing parenthesis
        financial_entities_df = financial_entities_df.append(
            {"Entity": entity_text, "Connotation": connotation, "Article": article}, ignore_index=True)

# Initialize a DataFrame to store the key indicators and their connotations
key_indicators_df = pd.DataFrame(
    columns=["Indicator", "Connotation", "Article"])

# Add the key indicators and their corresponding articles to the DataFrame
for info, articles in key_indicators_info.items():
    for article in articles:
        indicator_text, connotation = info.split(" (")
        connotation = connotation[:-1]  # Remove the closing parenthesis
        key_indicators_df = key_indicators_df.append(
            {"Indicator": indicator_text, "Connotation": connotation, "Article": article}, ignore_index=True)

# Print the financial entities table
print("\nFinancial Entities:")
print(financial_entities_df.to_string(index=False))

# Print the key indicators table
print("\nKey Indicators and Financial Information:")
print(key_indicators_df.to_string(index=False))


# Count the connotations for financial entities
connotation_counts_entities = financial_entities_df["Connotation"].value_counts(
)

# Create a bar plot for financial entities
plt.figure(figsize=(8, 4))
sns.barplot(x=connotation_counts_entities.index,
            y=connotation_counts_entities.values)
plt.title("Financial Entities Connotation Distribution")
plt.xlabel("Connotation")
plt.ylabel("Count")
plt.show()

# Count the connotations for key indicators
connotation_counts_indicators = key_indicators_df["Connotation"].value_counts()

# Create a bar plot for key indicators
plt.figure(figsize=(8, 4))
sns.barplot(x=connotation_counts_indicators.index,
            y=connotation_counts_indicators.values)
plt.title("Key Indicators Connotation Distribution")
plt.xlabel("Connotation")
plt.ylabel("Count")
plt.show()


# Group key indicators by connotation
grouped_key_indicators = key_indicators_df.groupby(
    ["Indicator", "Connotation"]).size().reset_index(name="Count")

# Create a bar plot for key indicators with connotations
plt.figure(figsize=(12, 6))
sns.barplot(x="Indicator", y="Count", hue="Connotation",
            data=grouped_key_indicators)
plt.title("Key Indicators Connotation Distribution")
plt.xlabel("Key Indicator")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.legend(title="Connotation")
plt.show()

# Group financial entities by connotation
grouped_financial_entities = financial_entities_df.groupby(
    ["Entity", "Connotation"]).size().reset_index(name="Count")

# Create a bar plot for financial entities with connotations
plt.figure(figsize=(12, 6))
sns.barplot(x="Entity", y="Count", hue="Connotation",
            data=grouped_financial_entities)
plt.title("Financial Entities Connotation Distribution")
plt.xlabel("Financial Entity")
plt.ylabel("Count")
plt.xticks(rotation=90)
plt.legend(title="Connotation")
plt.show()


def create_count_table(df, column, title):
    grouped_df = df.groupby([column, "Connotation"]
                            ).size().reset_index(name="Count")
    pivot_table = pd.pivot_table(
        grouped_df, index=column, columns="Connotation", values="Count", fill_value=0)

    # Set display options to show full table
    pd.set_option('display.max_rows', None)
    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', None)
    pd.set_option('display.max_colwidth', None)

    print(title)
    print(pivot_table)

    # Display a heatmap of the count table
    fig, ax = plt.subplots(figsize=(12, len(pivot_table.index) * 0.5))
    sns.heatmap(pivot_table, annot=True, fmt='d', cmap="YlGnBu",
                cbar=False, annot_kws={"fontsize": 12}, ax=ax)

    # Customize the appearance
    plt.title(title)
    ax.xaxis.set_minor_locator(ticker.FixedLocator(
        [x - 0.5 for x in range(1, len(pivot_table.columns))]))
    ax.yaxis.set_minor_locator(ticker.FixedLocator(
        [y - 0.5 for y in range(1, len(pivot_table.index))]))
    ax.grid(which='minor', color='black', linewidth=2)
    ax.set_xticklabels(ax.get_xticklabels(), fontsize=12, fontweight='bold')
    ax.set_yticklabels(ax.get_yticklabels(), fontsize=12, fontweight='bold')
    plt.xticks(rotation=45)

    for label in ax.get_xticklabels():
        label.set_horizontalalignment('right')

    plt.show()


# Create count table for key indicators
create_count_table(key_indicators_df, "Indicator",
                   "Key Indicators Connotation Distribution")

# Create count table for financial entities
create_count_table(financial_entities_df, "Entity",
                   "Financial Entities Connotation Distribution")


# Create count table for key indicators
create_count_table(key_indicators_df, "Indicator",
                   "Key Indicators Connotation Distribution")

# Create count table for financial entities
create_count_table(financial_entities_df, "Entity",
                   "Financial Entities Connotation Distribution")
