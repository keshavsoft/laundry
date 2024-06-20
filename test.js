const data1 = [
  {
    "QrCodeId": "240000033",
    "ItemName": "JACKET",
    "Rate": "250",
    "FactorySelected": "Vizag",
    "VoucherRef": "1",
    "BranchName": "ANR",
    "DCFactory": "Vizag",
    "DCDate": "2024-06-18",
    "DCDescription": "by some",
    "OrderNumber": "6",
    "OrderDate": "2024-06-19 10:34:48",
    "DeliveryDate": "2024-06-26",
    "UuId": 5,
    "pk": 5,
    "DateTime": "2024-06-19T07:18:15.398Z"
  },
  {
    "QrCodeId": "240000031",
    "ItemName": "JACKET",
    "Rate": "250",
    "FactorySelected": "Vizag",
    "VoucherRef": "1",
    "BranchName": "ANR",
    "DCFactory": "Vizag",
    "DCDate": "2024-06-18",
    "DCDescription": "by some",
    "OrderNumber": "6",
    "OrderDate": "2024-06-19 10:34:48",
    "DeliveryDate": "2024-06-26",
    "UuId": 5,
    "pk": 5,
    "DateTime": "2024-06-18T07:18:15.398Z"
  }
];

const data2 = [
  {
    "QrCodeId": "240000033",
    "ItemName": "SHIRT",
    "Rate": "150",
    "FactorySelected": "Hyderabad",
    "VoucherRef": "2",
    "BranchName": "BZA",
    "DCFactory": "Hyderabad",
    "DCDate": "2024-06-19",
    "DCDescription": "by another",
    "OrderNumber": "7",
    "OrderDate": "2024-06-20 12:34:48",
    "DeliveryDate": "2024-06-27",
    "UuId": 6,
    "pk": 6,
    "DateTime": "2024-06-19T09:18:15.398Z"
  }
];

// Function to find unmatched QrCodeId records
function findUnmatchedRecords(data1, data2) {
  const qrCodes1 = new Set(data1.map(record => record.QrCodeId));
  const qrCodes2 = new Set(data2.map(record => record.QrCodeId));

  const unmatchedInData1 = data1.filter(record => !qrCodes2.has(record.QrCodeId));
  const unmatchedInData2 = data2.filter(record => !qrCodes1.has(record.QrCodeId));

  return [...unmatchedInData1, ...unmatchedInData2];
}

const unmatchedRecords = findUnmatchedRecords(data1, data2);

console.log(unmatchedRecords);
