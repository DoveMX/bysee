(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"原子正版 Stellar Phoenix Windows Data Recovery 数据恢复工具",
                "Pid":"mc5388-stellarinfo-StellarPhoenixWindowsDataRecovery–Professiona_-win",
                "Name":"Stellar Phoenix Windows Data Recovery – Professional",
                "OS": "win",
                "site":"https://www.stellarinfo.com/windows-data-recovery-professional.php",
                "orgPrice":99,
                "sitePrice":99,
                "productID":"5388-52",
                "Commission": 40,
                "dlID":"dl-stellarphoenixwindowsdatarecovery-professional-win",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/windows-data-recovery-professional/StellarPhoenixWindowsDataRecovery-Professional.exe",
                "OrgDownloadUrl":"http://download.stellarinfo.com/StellarPhoenixWindowsDataRecovery-Professional.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-52?affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=568740883832"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc5388';
        ele.vendorName = 'Stellar Data Recovery Inc';
        window["SellerData"].push(ele);
    });
})();