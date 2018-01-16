(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"Jihosoft Phone Transfer 手机数据恢复迁移备份助手",
                "Pid":"mc3-0945-jihosoft-phone-transfer",
                "Name":"Jihosoft Phone Transfer",
                "OS": "win",
                "site":"http://www.jihosoft.com/",
                "orgPrice":39.95,
                "sitePrice":39.95,
                "productID":"30945-54",
                "Commission": 75,
                "dlID":"dl-jiho-pt-win",
                "DownloadUrl":"https://seesrc.com/dm/jihosoft/jihosoft-phone-transfer/JIHO_PT_Trial3.exe",
                "OrgDownloadUrl":"http://www.jihosoft.com/dl/?id=phonetransfer",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/30945-54?affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=5559836481840"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc30945';
        ele.vendorName = 'jihosoft';
        window["SellerData"].push(ele);
    });
})();