require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // goto the login page
    await driver.get("https://mdrptrainer-dev.smart.astri.ml/");
    // enter username and password
    await driver.findElement(By.id("name")).sendKeys("admin01@mdrp.dev");
    await driver.findElement(By.id("password")).sendKeys("admin01@mdrp.dev", Key.RETURN);

    // wait for button appear then click it
    let roleButton = await driver.findElement(By.id("role-button"));
    await driver.wait(until.elementIsVisible(roleButton), 100);
    await roleButton.click();
  } catch (error) {
    console.log(error);
  }
})();
