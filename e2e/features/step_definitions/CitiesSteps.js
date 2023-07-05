import {Then, setDefaultTimeout } from @cucumber/cucumber;
import citiesPage from "../../pageObjects/CitiesPage";
setDefaultTimeout(120*1000);

Then('The cities page is correctly displayed',async async => {
    await citiesPage.verifyCitiesPage();
})
