import {Given} from '@cucumber/cucumber';
import homePage from '../../pageObjects/HomePage';

Given('I tap on the {string} Home section',async (section) =>{
homePage.tapHomeSection(section);
})