(function(){
    window["SellerData"] = window["SellerData"] || [];
// https://www.stellarinfo.com/windows-data-recovery-professional.php
// https://www.stellarinfo.com/data-recovery-mac.php
// https://www.stellarinfo.com/digital-media-recovery.php
// https://www.stellarinfo.com/disk-recovery/video-repair.php
// https://www.stellarinfo.com/convert-ost-to-pst.php
// https://www.stellarinfo.com/edb-exchange-server-recovery.htm
// https://www.stellarinfo.com/outlook-pst-file-recovery.php
// https://www.stellarinfo.com/sql-recovery.php
// https://www.stellarinfo.com/access-database-repair.php
// https://www.stellarinfo.com/email-tools/exchange-toolkit.php
    var dataList = {
        "products":[
            /// Stellar Phoenix Windows Data Recovery
            {
                "TName":"原子正版 Stellar Phoenix Windows Data Recovery 数据恢复工具",
                "OS":"Windows",
                "Category": "修复恢复",
                "SiteUrl":"https://www.stellarinfo.com/windows-data-recovery-professional.php",
                "VendorPrice":99,
                "ID":"5388-52",
                "Commission": 40,
                "dlID":"dl-stellarphoenixwindowsdatarecovery-professional-win",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/windows-data-recovery-professional/StellarPhoenixWindowsDataRecovery-Professional.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-52?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=568740883832"
            },

            /// Stellar Phoenix Mac Data Recovery
            //TODO: Stellar Phoenix Mac Data Recovery
            {
                "TName":"原子正版 Stellar Phoenix Mac Data Recovery 数据恢复工具",
                "OS": "Mac",
                "Category": "修复恢复",
                "SiteUrl":"https://www.stellarinfo.com/data-recovery-mac.php",
                "VendorPrice":99,
                "ID":"5388-29",
                "Commission": 30,
                "dlID":"dl-stellarphoenixmacdatarecovery-professional-mac",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/data-recovery-mac/StellarPhoenixMacDataRecovery-Professional.dmg.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-29?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=568972913135"
            },

            /// Stellar Phoenix Video Repair Tool
            {
                "TName":"原子正版 Stellar Phoenix Video Repair Tool 视频恢复工具 Windows版本",
                "OS":"Windows",
                "Category": "修复恢复",
                "SiteUrl":"https://www.stellarinfo.com/disk-recovery/video-repair.php",
                "VendorPrice":69.99,
                "ID":"5388-139",
                "Commission": 30,
                "dlID":"dl-stellarphoenixvideorepairtool-win",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/video-repair/StellarPhoenixVideoRepair.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-139?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=568502736127"
            },
            {
                "TName":"原子正版 Stellar Phoenix Video Repair Tool 视频恢复工具 Mac版本",
                "OS": "Mac",
                "Category": "修复恢复",
                "SiteUrl":"https://www.stellarinfo.com/disk-recovery/video-repair.php",
                "VendorPrice":69.99,
                "ID":"5388-112",
                "Commission": 30,
                "dlID":"dl-stellarphoenixvideorepairtool-mac",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/video-repair/StellarPhoenixVideoRepair.dmg.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-112?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=568784766154"
            },

            /// Stellar Phoenix Photo Recovery (Digital-Media-Recovery) 
            {
                "TName":"原子正版 Stellar Phoenix Photo Recovery 相片视频音频恢复工具 Windows版本",
                "OS":"Windows",
                "Category": "修复恢复",
                "SiteUrl":"https://www.stellarinfo.com/digital-media-recovery.php",
                "VendorPrice":59.99,
                "ID":"5388-137",
                "Commission": 30,
                "dlID":"dl-stellarphoenixdigitalmediarecovery-win",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/digital-media-recovery/StellarPhoenixPhotoRecovery.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-137?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=569071912260"
            },
            {
                "TName":"原子正版 Stellar Phoenix Photo Recovery 相片视频音频恢复工具 Mac版本",
                "OS": "Mac",
                "Category": "修复恢复",
                "SiteUrl":"https://www.stellarinfo.com/digital-media-recovery.php",
                "VendorPrice":59.99,
                "ID":"5388-138",
                "Commission": 30,
                "dlID":"dl-stellarphoenixdigitalmediarecovery-mac",
                "DownloadUrl":"https://seesrc.com/dm/www.stellarinfo.com/digital-media-recovery/StellarPhoenixPhotoRecovery.dmg.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/5388-138?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=569203661474"
            }



        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": 'mc5388',
                "VendorName":  'Stellar Data Recovery Inc',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }
    });
})();