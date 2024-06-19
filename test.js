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
      "QrCodeId": "240000034",
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
    },
    {
      "QrCodeId": "240000032",
      "ItemName": "PANTS",
      "Rate": "200",
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
      "DateTime": "2024-06-19T08:18:15.398Z"
    }
  ];
  
  function mergeAndCountByDate(data1, data2) {
    const groupedData = {};
  
    data1.forEach(item => {
      const date = item.DateTime.split('T')[0];
      if (!groupedData[date]) {
        groupedData[date] = {
          Date: date,
          data1Count: 0,
          data2Count: 0
        };
      }
      groupedData[date].data1Count += 1;
    });
  
    data2.forEach(item => {
      const date = item.DateTime.split('T')[0];
      if (!groupedData[date]) {
        groupedData[date] = {
          Date: date,
          data1Count: 0,
          data2Count: 0
        };
      }
      groupedData[date].data2Count += 1;
    });
  
    return Object.values(groupedData);
  }
  
  console.log(mergeAndCountByDate(data1, data2));
  