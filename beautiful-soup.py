import urllib.request
html_doc = urllib.request.urlopen("https://apnews.com/article/ohio-train-derailment-updates-bf5a60de2243cd6f7f730096aa33294c")
from bs4 import BeautifulSoup
soup=BeautifulSoup(html_doc,'html.parser')
for link in soup.find_all('a'):
    # It helps to find all anchor tags
    print(link.get('href'))
