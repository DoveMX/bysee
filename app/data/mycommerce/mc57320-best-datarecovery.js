(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "TName":"Green SD Card Data Recovery Pro SD存储卡恢复 Win",
                "OS":"Windows",
                "Category": "修复恢复",
                "SiteUrl":"http://best-datarecovery.com/sd-card-data-recovery-pro/",
                "VendorPrice":39.99,
                "PromotPrice":39.99,
                "ID":"57320-10",
                "Commission": 70,
                "dlID":"dl-green-sd-card-data-recovery-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/best-datarecovery/green_sd_card_data_recovery.exe",
                "OrgDownloadUrl":"http://www.best-datarecovery.com/donwload/green_sd_card_data_recovery.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/57320-10?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=561583365779"   
            },
            {
                "TName":"Green Digital Photo Recovery Pro 音视频照片恢复 Win",
                "OS":"Windows",
                "Category": "修复恢复",
                "SiteUrl":"http://best-datarecovery.com/digital-photo-recovery-pro/",
                "VendorPrice":39.99,
                "PromotPrice":39.99,
                "ID":"57320-2",
                "Commission": 70,
                "dlID":"dl-green-digital-photo-recovery-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/best-datarecovery/green_digital_photo_recovery.exe",
                "OrgDownloadUrl":"http://www.best-datarecovery.com/donwload/green_digital_photo_recovery.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/57320-2?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=561681614537"
            },
            {
                "TName":"Green Hard Drive Data Recovery Pro 硬盘数据恢复 Win",
                "OS":"Windows",
                "Category": "修复恢复",
                "SiteUrl":"http://best-datarecovery.com/hard-drive-data-recovery-pro/",
                "VendorPrice":39.99,
                "PromotPrice":39.99,
                "ID":"57320-3",
                "Commission": 70,
                "dlID":"dl-green-hard-drive-data-recovery-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/best-datarecovery/green_hard_drive_data_recovery.exe",
                "OrgDownloadUrl":"http://www.best-datarecovery.com/donwload/green_hard_drive_data_recovery.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/57320-3?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=561704202436"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": 'mc57320',
                "VendorName":  '06 Best-datarecovery',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }

    });
})();