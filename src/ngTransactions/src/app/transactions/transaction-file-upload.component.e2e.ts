import { TransactionFileUploadPageModel } from "../pages";

describe('File Upload Page', () => {

    it('should load without errors with the correct heading', () => {

        var transactionFileUploadPage = new TransactionFileUploadPageModel();

        transactionFileUploadPage.go();

        expect('UPLOAD').toEqual(transactionFileUploadPage.getHeading());

    });

    it('should be able to navigate to home', () => {

        var pageModel = new TransactionFileUploadPageModel();

        pageModel.go();

        pageModel.spendLink.click();

        expect('SPEND').toEqual(pageModel.getHeading());
    });

});