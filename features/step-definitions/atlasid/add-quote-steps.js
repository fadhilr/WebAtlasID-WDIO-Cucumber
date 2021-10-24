import {
    Given,
    When,
    Then
} from '@wdio/cucumber-framework';
import dotenv from 'dotenv'
dotenv.config()
import quotePage from '../../pageobjects/atlasid/add-quote-page'

//step for add and ensure all card added
Given(/^user is on atlas id tech web playground$/, async () => {
    await quotePage.open();
});

When(/^user add (.+) and (.+)$/, async (quote, colour) => {
    await quotePage.inputTextQuote(quote);
    await quotePage.chooseColour(colour)
});

When(/^click button submit$/,async () => {
    await quotePage.clickBtnSubmit()
});

Then(/^user can see card with label (.+) and (.+)$/, async (quote, colour) => {
    await quotePage.assertQuoteAndColour(quote, colour)
});


