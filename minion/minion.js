const puppeteer = require('puppeteer');

const preparePageForTests = async (page) => {
    // Pass the User-Agent Test.
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
    await page.setUserAgent(userAgent);
}

const minionRun = () => {
puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await preparePageForTests(page)
    await page.goto('https://hk.appledaily.com/hit');
    await page.waitForSelector('.itemContainer');
    // Get inner text
    const headlines = await page.$$eval('.itemContainer .item', headline => headline.map(x=>x.innerText));
    console.log(headlines)
    await browser.close();
});
}

minionRun()