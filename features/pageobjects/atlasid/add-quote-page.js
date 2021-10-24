import Page from '../page'
import {assert} from 'chai'

class quotePage extends Page {
    
    get inputQuote () { return $('#inputQuote') }
    get selectColour () { return $('#colorSelect') }
    get btnSubmit () { return $('#buttonAddQuote') }
    get cardTxt () { return $$('[name="quoteText"]') }
    get cards() {return $$('[name="quotePanel"]')}
    specificCard(textQuote) {return $(`//p[.="${textQuote}"]`)}

    
    async inputTextQuote(textQuote) {
        await this.inputQuote.waitForDisplayed(2000);
        await this.inputQuote.setValue(textQuote);
    }

    async chooseColour(colour) {
        await this.selectColour.waitForDisplayed(2000);
        await this.selectColour.selectByAttribute('value', colour);
    }

    async clickBtnSubmit(){
        await this.btnSubmit.waitForDisplayed(2000);
        await this.btnSubmit.click();
    }

    async assertQuoteAndColour(quote, colour) {
        await this.cardTxt[1].waitForDisplayed(2000);
        await expect(this.cardTxt[1]).toHaveText(quote);
        await this.cards[1].waitForDisplayed(2000);
        let card = await this.cards[1].getAttribute('style')
        console.log("INI CONSOLEE LOG = "+card)
        await assert.equal(card,'background-color: '+colour.toLowerCase()+';');
        await this.cardTxt[1].click();
        
    }

    async deleteCard(quote){
        await this.specificCard(quote).waitForDisplayed(2000);
        await this.specificCard(quote).click();
    }

    async assertCardDeleted(){
        await this.cards[0].waitForDisplayed(2000);
        let countCard = await this.cards.length
        console.log("INI CONSOLEE LOG = "+countCard)
        await assert.equal(countCard,'1');
    }

    async assertValidationCard(){
        await browser.pause(2000)
        let actualMessage = await browser.getAlertText();
        console.log(actualMessage)
        await assert.equal(actualMessage,'Please delete Quotes first!');
        await browser.pause(2000)
        await browser.acceptAlert();
    }

    open () {
        return super.open('');
    }
}

export default new quotePage();
