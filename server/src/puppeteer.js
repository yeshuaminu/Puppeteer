const puppeteer = require('puppeteer');

const testCreateUserButton = async () => {
  // Step 1 - Launch Puppeteer and assign response to the browser variable
  const browser = await puppeteer.launch();

  // Step 2 - Using the browser variable, create a new page and assign the response to the page variable
  const page = await browser.newPage();

  // Step 3 - Using the page variable goto the correct URL that the React app is running on
  await page.goto('http://probable-space-sniffle-69rg4p4457qpf4654-3000.app.github.dev/');
  //await page.goto('http://localhost:3000');
  // Step 4 - Using the page variable, use the click method by passing the ".create-user" class name
  const searchResultSelector = '.create-user';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Step 5 - Using the page variable, use the screenshot method to generate a screenshot of the React app with the newly created user
  await page.screenshot({
    path: 'sc.png',
  });
  await browser.close();
};

module.exports = testCreateUserButton;
