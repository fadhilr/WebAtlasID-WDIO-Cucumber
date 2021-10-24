import {
    Given,
    When,
    Then
} from '@wdio/cucumber-framework';
import dotenv from 'dotenv'
dotenv.config()
import quotePage from '../../pageobjects/atlasid/add-quote-page'


//step for add and delete all card
When(/^user add all quote with colour to card$/, async () => {
    await quotePage.inputTextQuote("White quote");
    await quotePage.chooseColour("White")
    await quotePage.clickBtnSubmit()
    await quotePage.inputTextQuote("Yellow quote");
    await quotePage.chooseColour("Yellow")
    await quotePage.clickBtnSubmit()
    await quotePage.inputTextQuote("Cyan quote");
    await quotePage.chooseColour("Cyan")
    await quotePage.clickBtnSubmit()
    await quotePage.inputTextQuote("Magenta quote");
    await quotePage.chooseColour("Magenta")
    await quotePage.clickBtnSubmit()
    await quotePage.inputTextQuote("Blue quote");
    await quotePage.chooseColour("Blue")
    await quotePage.clickBtnSubmit()
});

When(/^user delete all card$/, async () => {
    await quotePage.deleteCard("White quote");
    await quotePage.deleteCard("Yellow quote");
    await quotePage.deleteCard("Cyan quote");
    await quotePage.deleteCard("Magenta quote");
    await quotePage.deleteCard("Blue quote");
});

Then(/^ensure all card has been deleted$/, async () => {
    await quotePage.assertCardDeleted();
});


Then(/^ensure no card added$/, async () => {
    await quotePage.assertCardDeleted();
});


//step for negetive case

When(/^user add card more than 10$/, async () => {
    for (let index = 0; index < 11; index++) {
        await quotePage.inputTextQuote("Blue quote");
        await quotePage.chooseColour("Blue")
        await quotePage.clickBtnSubmit()
    }
});


Then(/^user should see pop up message cannot make more card$/, async () => {
    await quotePage.assertValidationCard()
});