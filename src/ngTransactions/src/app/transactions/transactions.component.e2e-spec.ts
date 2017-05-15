declare var browser, element, by;

describe('Transactions', () => {    
    it('should have correct feature heading',() => {
        browser.get('');                
        var headingElement = element(by.css('h1'));
        expect(headingElement).toBeDefined();
        expect('SPEND').toEqual(headingElement.getText());       
    });
});