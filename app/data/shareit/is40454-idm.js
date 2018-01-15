(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"Internet Download Manager 国外优秀的下载工具",
                "Pid":"is4-0454-idm",
                "Name":"Internet Download Manager",
                "OS": "win",
                "site":"http://www.internetdownloadmanager.com/",
                "orgPrice":24.95,
                "sitePrice":24.95,
                "productID":"212127",
                "Commission": 20,
                "dlID":"dl-idman-win",
                "DownloadUrl":"https://pan.baidu.com/s/1o9LLHr0",
                "OrgDownloadUrl": "http://mirror2.internetdownloadmanager.com/idman630build3.exe?v=lt&filename=idman630build3.exe",
                "BuyUrl":"https://order.shareit.com/cart/add?vendorid=40454&PRODUCT[212127]=1&affiliateid=200274083",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559925904477"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'is40454';
        ele.vendorName = 'idm';
        window["SellerData"].push(ele);
    });
})();