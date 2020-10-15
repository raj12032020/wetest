const { Given, When, Then } = require('cucumber');

const FirstPage = require('../pageobjects/first.page');
const HomePage = require('../pageobjects/home.page')
const AgendaPage = require('../pageobjects/agenda.page')
const SchedulePage = require('../pageobjects/schedule.page')

Given(/^I open the app to see welcome screen$/, () => {
    FirstPage.waitToBeDisplayed(true)
    FirstPage.getStarted.click()
    FirstPage.waitToBeDisplayed(false)
});

When(/^I goto view the schedule of event$/, () => {
    HomePage.menuBar.click()
    HomePage.schedule.click()
    HomePage.alertNo.click()
    HomePage.alertGotIt.click()
});

Then(/^Schedule page is displayed$/, () => {
    expect(SchedulePage.listOfEvents).toBeExisting();
});

When(/^I goto view the agenda of event$/, () => {
    HomePage.menuBar.click()
    HomePage.agenda.click()
});

Then(/^Agenda page is displayed$/, () => {
    expect(AgendaPage.listOfEvents).toBeExisting();
});
