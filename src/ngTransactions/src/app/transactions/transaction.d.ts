declare interface Transaction {
    spend: string;
    date: Date;
    category: string;
}

declare interface GetSummaryResponseData {
    "transactionSummaryItems": [
        {
            "category": "string",
            "spend": "string"
        }
    ]
}