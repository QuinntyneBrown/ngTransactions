import { TransactionsPageModel } from "../pages";

describe('Spend Page', () => {

    it('should load without errors and have correct heading', () => {

        const transactionsPageModel = new TransactionsPageModel();

        transactionsPageModel.go();

        expect('SPEND').toEqual(transactionsPageModel.getHeading());
    });

});