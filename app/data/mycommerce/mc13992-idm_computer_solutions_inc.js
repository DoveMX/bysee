(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"原子正版 文件比较工具 IDM UltraCompare 中文版 Windows",
                "Pid":"mc1-IDM_Computer_Solutions_Inc-3992-UltraCompareProfessional_-win",
                "Name":"IDM UltraCompare",
                "OS": "win",
                "site":"https://www.ultraedit.com/products/ultracompare/",
                "orgPrice":49.95,
                "sitePrice":49.95,
                "productID":"13992-3",
                "Commission": 30,
                "dlID":"dl-ultraedit-uc-chinese-win",
                "DownloadUrl":"https://seesrc.com/dm/www.ultraedit.com/ultracompare/uc_chinese.exe",
                "OrgDownloadUrl":"https://www.ultraedit.com/downloads/ultracompare-download/",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/13992-3?affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=568313796852"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc13992';
        ele.vendorName = 'IDM_Computer_Solutions_Inc';
        window["SellerData"].push(ele);
    });
})();