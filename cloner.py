from selenium import webdriver
from selenium.webdriver.common.by import By
import os
import subprocess
import time

# Initialize Selenium WebDriver
driver = webdriver.Chrome()

# Navigate to the website
url = 'https://erp.iitkgp.ac.in/IIT_ERP3/home.htm'
driver.get(url)
time.sleep(5)  # Adjust time to wait for page to fully load if needed

# Capture cookies
cookies = driver.get_cookies()

# Capture user-agent
user_agent = driver.execute_script("return navigator.userAgent")

def wget_from_driver(driver):
    # Extract data from the WebDriver instance
    current_url = driver.current_url
    cookies = driver.execute_script('return document.cookie')
    user_agent = driver.execute_script('return navigator.userAgent')

    # Construct wget command
    wget_command = 'wget --user-agent="'+user_agent+'" --cookies=on --header="Cookie: '+cookies+'" "'+current_url+'"'

    # Print wget command (optional)
    #print("Executing wget command:")
    print(wget_command)

    # Execute wget command
    try:
        subprocess.run(wget_command)
        print("wget command executed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error executing wget command: {e}")

        

# Function to download a webpage and its assets using wget
def download_with_wget(url):
    # Construct wget command with cookies and user-agent
    cookies_str = '; '.join([f"{c['name']}={c['value']}" for c in cookies])
    wget_command = f"wget --header='Cookie: {cookies_str}' --user-agent='{user_agent}' --convert-links --adjust-extension --page-requisites {url}"
    
    # Run wget command using subprocess
    subprocess.run(wget_command, shell=True)

# Download the homepage
#download_with_wget(url)

# Function to extract all internal links from a webpage
def extract_links(url):
    driver.get(url)
    time.sleep(60)  # Adjust time to wait for page to fully load if needed
    links = driver.find_elements(By.XPATH, "//a[@href]")
    return [link.get_attribute('href') for link in links]

# Breadth-first search to download all pages
def crawl_and_download(start_url):
    visited_urls = set()
    urls_to_visit = [start_url]

    while urls_to_visit:
        current_url = urls_to_visit.pop(0)
        
        if current_url in visited_urls:
            continue
        
        visited_urls.add(current_url)
        print(f"Downloading {current_url}...")
        
        try:
            download_with_wget(current_url)
        except Exception as e:
            print(f"Failed to download {current_url}: {e}")
        
        # Extract links from the current page
        links = extract_links(current_url)
        
        # Add new links to visit queue
        for link in links:
            if link not in visited_urls and link.startswith(url):
                urls_to_visit.append(link)

    return visited_urls
'''
# Start crawling and downloading
downloaded_urls = crawl_and_download(url)

# Generate sitemap XML
sitemap_filename = 'sitemap.xml'
with open(sitemap_filename, 'w') as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for url in downloaded_urls:
        f.write(f'<url><loc>{url}</loc></url>\n')
    f.write('</urlset>\n')

# Clean up Selenium
driver.quit()

print(f"Website download and sitemap generation completed. Sitemap saved as {sitemap_filename}")
'''
