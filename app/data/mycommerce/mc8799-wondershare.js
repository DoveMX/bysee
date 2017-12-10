(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"原子正版 Wondershare Data Recovery 数据恢复工具 Win版本",
                "Pid":"mc8-799-wdr-win",
                "Name":"Wondershare Data Recovery for Windows",
                "OS": "Windows电脑",
                "site":"https://datarecovery.wondershare.com/",
                "orgPrice":49.95,
                "sitePrice":49.95,
                "productID":"8799-211",
                "Commission": 50,
                "DownloadUrl":"https://seesrc.com/dl-ws-data-recovery-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-211?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559992808327"
            },
            {
                "Pname":"原子正版 Wondershare Data Recovery 数据恢复工具 Mac版本",
                "Pid":"mc8-799-wdr-mac",
                "Name":"Wondershare Data Recovery for Mac",
                "OS": "苹果电脑",
                "site":"https://datarecovery.wondershare.com/",
                "orgPrice":95.95,
                "sitePrice":95.95,
                "productID":"8799-263",
                "Commission": 50,
                "DownloadUrl":"http://seesrc.com/dl-ws-data-recovery-mac",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-263?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560086833336"
            },
            {
                "Pname":"原子正版 Wondershare dr.fone toolkit iOS Data Recovery Lifetime授权",
                "Pid":"mc8-799-dr.fone-toolkit-ios-data-recovery-win",
                "Name":"Wondershare dr.fone toolkit - iOS Data Recovery for Win",
                "OS": "Windows电脑",
                "site":"https://drfone.wondershare.com/mac-iphone-data-recovery.html",
                "orgPrice":69.95,
                "sitePrice":69.95,
                "productID":"8799-358",
                "Commission": 50,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_drfone-for-ios_setup_full1283.exe?item=8799-358&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-toolkit-ios-data-recovery-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-358?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560481734544"
            },
            {
                "Pname":"原子正版 Wondershare dr.fone toolkit iOS Suite Lifetime授权",
                "Pid":"mc8-799-dr.fone-toolkit-ios-suite-win",
                "Name":"Wondershare dr.fone toolkit - iOS Suite for Win",
                "OS": "Windows电脑",
                "site":"https://drfone.wondershare.com/mac-iphone-data-recovery.html",
                "orgPrice":139.95,
                "sitePrice":139.95,
                "productID":"8799-321",
                "Commission": 50,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_drfone-for-ios_setup_full1283.exe?item=8799-321&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-toolkit-ios-suite-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-321?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560419993067" 
            },
            {
                "Pname":"原子正版 Dr.Fone-安卓数据恢复工具 终生授权",
                "Pid":"mc8-799-dr.fone-toolkit-android-data-recovery-win",
                "Name":"Wondershare dr.fone toolkit - Android Data Recovery for Win",
                "OS": "Windows电脑",
                "site":"https://drfone.wondershare.com/android-data-recovery.html",
                "orgPrice":49.95,
                "sitePrice":49.95,
                "productID":"8799-368",
                "Commission": 50,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_drfone-for-android_setup_full1464.exe?item=8799-368&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-toolkit-android-data-recovery-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-368?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560537566711"  
            },
            {
                "Pname":"原子正版 Dr.Fone-Android Full Suite安卓全套工具 终生授权",
                "Pid":"mc8-799-dr.fone-toolkit-android-data-recovery-win",
                "Name":"Wondershare dr.fone toolkit - Android Full Suite for Win",
                "OS": "Windows电脑",
                "site":"https://drfone.wondershare.com/android-data-recovery.html",
                "orgPrice":119.95,
                "sitePrice":119.95,
                "productID":"8799-371",
                "Commission": 50,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_drfone-for-android_setup_full1464.exe?item=8799-371&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-toolkit-android-full-suite-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-371?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560381232686"   
            },
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc8799';
        ele.vendorName = 'wondershare';
        window["SellerData"].push(ele);
    });
})();