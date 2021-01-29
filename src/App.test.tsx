import React from "react";
import { render } from "@testing-library/react";
import { chromium } from "playwright";

import App from "./App";

test("all components render correctly", () => {
  render(<App />);

  (async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();

    // Open new page
    const page = await context.newPage();

    // Go to http://localhost:3000/
    await page.goto("http://localhost:3000/");

    // Click //div/div/div[1]/div[1][normalize-space(.)='FE Engineer Test 1HomeEntriesDivisions']
    await page.click(
      "//div/div/div[1]/div[1][normalize-space(.)='FE Engineer Test 1HomeEntriesDivisions']"
    );
    // assert.equal(page.url(), 'http://localhost:3000/');

    // Click text="Home"
    await page.click('text="Home"');
    // assert.equal(page.url(), 'http://localhost:3000/');

    // Click //a[normalize-space(.)='Home']
    await page.click("//a[normalize-space(.)='Home']");
    // assert.equal(page.url(), 'http://localhost:3000/');

    // Click //a[normalize-space(.)='Entries']
    await page.click("//a[normalize-space(.)='Entries']");
    // assert.equal(page.url(), 'http://localhost:3000/');

    // Click text="Entries"
    await page.click('text="Entries"');
    // assert.equal(page.url(), 'http://localhost:3000/');

    // Click input[type="text"]
    await page.click('input[type="text"]');

    // Fill input[type="text"]
    await page.fill('input[type="text"]', "");

    // Click //div[normalize-space(.)='31454Ongoing value']
    await page.click("//div[normalize-space(.)='31454Ongoing value']");

    // Click //div[normalize-space(.)='2344Past metric']
    await page.click("//div[normalize-space(.)='2344Past metric']");

    // Click //div[normalize-space(.)='14224Missed metric']
    await page.click("//div[normalize-space(.)='14224Missed metric']");

    // Click //div[normalize-space(.)='635Failed metric']
    await page.click("//div[normalize-space(.)='635Failed metric']");

    // Click //div[starts-with(normalize-space(.), '31454Ongoing value2344Past metric14224Missed metric635Failed metric11334Pending ')]
    await page.click(
      "//div[starts-with(normalize-space(.), '31454Ongoing value2344Past metric14224Missed metric635Failed metric11334Pending ')]"
    );

    // Click (//div[starts-with(normalize-space(.), 'Division Summary0801 234 5678asbfefr@gmail.comMojidi, Lagos2 Journal entries24 f')])[3]
    await page.click(
      "(//div[starts-with(normalize-space(.), 'Division Summary0801 234 5678asbfefr@gmail.comMojidi, Lagos2 Journal entries24 f')])[3]"
    );

    // Click text="Division Summary"
    await page.click('text="Division Summary"');

    // Click //div[starts-with(normalize-space(.), 'Module HistorySearched “Journal Entries” on Division module22:10 15/09/2020WebSe')]
    await page.click(
      "//div[starts-with(normalize-space(.), 'Module HistorySearched “Journal Entries” on Division module22:10 15/09/2020WebSe')]"
    );

    // Click text="Module History"
    await page.click('text="Module History"');

    // Click //div[starts-with(normalize-space(.), 'Darrell StewardLagos state7529 E. Pecan St.2 Issues found10 Unique EntriesHetero')]
    await page.click(
      "//div[starts-with(normalize-space(.), 'Darrell StewardLagos state7529 E. Pecan St.2 Issues found10 Unique EntriesHetero')]"
    );

    // Click //div[normalize-space(.)='NAMELOCATIONSTATUSENTRIESRISK PROFILE']
    await page.click(
      "//div[normalize-space(.)='NAMELOCATIONSTATUSENTRIESRISK PROFILE']"
    );

    // Click //div[starts-with(normalize-space(.), 'Division Summary0801 234 5678asbfefr@gmail.comMojidi, Lagos2 Journal entries24 f')]
    await page.click(
      "//div[starts-with(normalize-space(.), 'Division Summary0801 234 5678asbfefr@gmail.comMojidi, Lagos2 Journal entries24 f')]"
    );

    // Click //div[normalize-space(.)='DivisionsModule']
    await page.click("//div[normalize-space(.)='DivisionsModule']");

    // ---------------------
    await context.close();
    await browser.close();
  })();
});
