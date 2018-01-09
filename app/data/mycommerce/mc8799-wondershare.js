(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"Wondershare Data Recovery 数据恢复工具 Win版本",
                "Pid":"mc8-799-wdr-win",
                "Name":"Wondershare Data Recovery for Windows",
                "OS": "win",
                "site":"https://datarecovery.wondershare.com/",
                "orgPrice":49.95,
                "sitePrice":49.95,
                "productID":"8799-211",
                "Commission": 50,
                "DownloadUrl":"https://pan.baidu.com/s/1nw9Cjf7",
                "OrgDownloadUrl":"http://download.wondershare.com/data-recovery_full542.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-211?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559992808327"
            },
            {
                "Pname":"Wondershare Data Recovery 数据恢复工具 Mac版本",
                "Pid":"mc8-799-wdr-mac",
                "Name":"Wondershare Data Recovery for Mac",
                "OS": "mac",
                "site":"https://datarecovery.wondershare.com/",
                "orgPrice":95.95,
                "sitePrice":95.95,
                "productID":"8799-263",
                "Commission": 50,
                "DownloadUrl":"https://pan.baidu.com/s/1c31MYHU",
                "OrgDownloadUrl":"http://download.wondershare.com/mac-data-recovery_full737.dmg",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-263?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560086833336"
            },

            // dr.fone-full - for ios
            {
                "Pname":"Wondershare dr.fone toolkit iOS Suite Lifetime授权 Win",
                "Pid":"mc8-799-dr.fone-toolkit-ios-suite-win",
                "Name":"Wondershare dr.fone toolkit - iOS Suite for Win",
                "OS": "win",
                "site":"https://drfone.wondershare.com/mac-iphone-data-recovery.html",
                "orgPrice":99.95, // 996
                "sitePrice":99.95,
                "productID":"8799-405",
                "Commission": 50,
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-toolkit-ios-suite-win",
                "OrgDownloadUrl":"http://download.wondershare.com/drfone_full3360.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-405?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560419993067"
            },
            // TODO: 需要提供Mac版本
            /**
            {
                "Pname":"Wondershare dr.fone toolkit iOS Suite Lifetime授权 Mac",
                "Pid":"mc8-799-dr.fone-toolkit-ios-suite-mac",
                "Name":"Wondershare dr.fone toolkit - iOS Suite for Mac",
                "OS": "mac",
                "site":"https://drfone.wondershare.com/mac-iphone-data-recovery.html",
                "orgPrice":139.95,  // 1016
                "sitePrice":139.95,
                "productID":"8799-402",
                "Commission": 50,
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-toolkit-ios-suite-win",
                "OrgDownloadUrl":"http://download.wondershare.com/drfone_full3361.dmg",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-402?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560419993067"
            },
             */




            //dr.fone-full - for android
            {
                "Pname":"Dr.Fone-Android Full Suite安卓全套工具 终生授权 Win版本",
                "Pid":"mc8-799-dr.fone-toolkit-android-data-recovery-win",
                "Name":"Wondershare dr.fone toolkit - Android Full Suite for Win",
                "OS": "win",
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


            //dr.fone-data-recovery
            {
                "Pname":"Wondershare dr.fone iOS Data Recovery Lifetime授权 Win",
                "Pid":"mc8-799-dr.fone-toolkit-ios-data-recovery-win",
                "Name":"Wondershare dr.fone-iOS Data Recovery for Win",
                "OS": "win",
                "site":"https://drfone.wondershare.com/mac-iphone-data-recovery.html",
                "orgPrice":69.95,
                "sitePrice":69.95,
                "productID":"8799-421",
                "Commission": 50,
                "OrgDownloadUrl":"",
                "DownloadUrl":"https://pan.baidu.com/s/1smasihn",
                "OrgDownloadUrl":"http://download.wondershare.com/drfone_recover_full3366.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-421?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560481734544"
            },
            /***
            TODO: 这里缺少Mac版本，后面需要在淘宝上添加
            {
                "Pname":"Wondershare dr.fone iOS Data Recovery Lifetime授权 Mac",
                "Pid":"mc8-799-dr.fone-toolkit-ios-data-recovery-mac",
                "Name":"Wondershare dr.fone-iOS Data Recovery for Mac",
                "OS": "mac",
                "site":"https://drfone.wondershare.com/mac-iphone-data-recovery.html",
                "orgPrice":79.95,
                "sitePrice":79.95,
                "productID":"8799-426",
                "Commission": 50,
                "OrgDownloadUrl":"",
                "DownloadUrl":"https://pan.baidu.com/s/1bqeOz1t",
                "OrgDownloadUrl":"http://download.wondershare.com/drfone_recover_full3353.dmg",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-426?affiliate_id=617007",
                "TaobaoUrl":""
            },

             */
            {
                "Pname":"Dr.Fone-安卓数据恢复工具 终生授权",
                "Pid":"mc8-799-dr.fone-toolkit-android-data-recovery-win",
                "Name":"Wondershare dr.fone toolkit - Android Data Recovery for Win",
                "OS": "win",
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
            /// dr.fone - Repair (iOS System Recovery)
            /// 中文网站：https://drfone.wondershare.com/zh/ios-system-recovery.html
            /// 英文网站：https://drfone.wondershare.com/ios-system-recovery.html
            {
                "Pname":"Dr.Fone iOS系统恢复工具 终生授权Win版本",
                "Pid":"mc8-799-dr.fone-ios-repair-win",
                "Name":"Wondershare dr.fone - Repair (iOS System Recovery) for Win",
                "OS": "win",
                "site":"https://drfone.wondershare.com/zh/ios-system-recovery.html",
                "orgPrice":69.95,
                "sitePrice":69.99,
                "productID":"8799-410",
                "Commission": 50,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_win-drfone_setup_full3360.exe?item=8799-410&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-ios-repair-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-410?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=562619045620"
            },
            {
                "Pname":"Dr.Fone iOS系统恢复工具 终生授权Mac版本",
                "Pid":"mc8-799-dr.fone-ios-repair-mac",
                "Name":"Wondershare dr.fone - Repair (iOS System Recovery) for Mac",
                "OS": "mac",
                "site":"https://drfone.wondershare.com/zh/ios-system-recovery.html",
                "orgPrice":79.95,
                "sitePrice":99.99,
                "productID":"8799-417",
                "Commission": 50,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_mac-drfone_full3361.dmg?item=8799-417&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-ws-dr.fone-ios-repair-mac",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/8799-417?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id="
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc8799';
        ele.vendorName = 'wondershare';
        window["SellerData"].push(ele);
    });
})();