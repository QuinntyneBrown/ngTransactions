# ngTransactions

Simple Angular 1.6 App using Webpack and TypeScript 2.x.

## Table Of Contents
- [Features](#Features)
- [QuickStart](#QuickStart)

## Features

This project framework provides the following features:
- 2 routes. Transactions and upload.
- The Transactions UI can be filtered by typing in the input box. A partial match will filter the transaction list.
- Simply drag and drop transaction files into the drop zone on the upload UI and the files will be uploaded to the server and processed
- The app is a responsive single page application implementing a component based architecture by leveraging the latest api's of Anugular 1.6 and TypeScript (ES6)
- The client is configurable. You can point the project to a different api by updating the configurationService.
- TransactionService is a seperate project.
- The service is documented using Swagger / Swashbuckle and can be found here http://transaction-service.azurewebsites.net/swagger
- The service implements the CQRS (Command Query Responsiblity Segegration) Design Pattern
- The logic for parsing the transaction line is in the Transaction model
- Records that are not valid entries and ignored
- The code remembers the transaction file name and overwrites transactions based on file name. You can upload the same file over and over. You can timestamp the file and add additional transactions

## QuickStart
1. [ Client ] clone the repo
2. [ Client ] run 'npm install' in the command line at the 'src\ngTransactions' folder level of the repo
3. [ Client ] run 'npm run watch' in the command line at the 'src\ngTransactions' folder level of the repo
4. [ Client ] run 'live-server' in the command line at the 'src\ngTransactions' folder level of the repo

1. [ Server ] The Service requires Visual Studio or IIS. The service is publicly running at http://transaction-service.azurewebsites.net and the client is pointing there. 

