(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"原子正版 Green SD Card Data Recovery Pro SD存储卡恢复 Win",
                "Pid":"mc5-BestDataRecovery-7320-green-sd-card-data-recovery-pro-win",
                "Name":"Green SD Card Data Recovery Pro for Win",
                "OS": "win",
                "site":"http://best-datarecovery.com/sd-card-data-recovery-pro/",
                "orgPrice":39.99,
                "sitePrice":39.99,
                "productID":"57320-10",
                "Commission": 70,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_green_sd_card_data_recovery.exe?item=57320-10&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-green-sd-card-data-recovery-pro-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/57320-10?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=561583365779"   
            },
            {
                "Pname":"原子正版 Green Digital Photo Recovery Pro 音视频照片恢复 Win",
                "Pid":"mc5-BestDataRecovery-7320-green-digital-photo-recovery-pro-win",
                "Name":"Green Digital Photo Recovery Pro for Win",
                "OS": "win",
                "site":"http://best-datarecovery.com/digital-photo-recovery-pro/",
                "orgPrice":39.99,
                "sitePrice":39.99,
                "productID":"57320-2",
                "Commission": 70,
                "OrgDownloadUrl":"http://hotdownloads.com/trialware/download/Download_green_digital_photo_recovery.exe?item=57320-2&affiliate=617007",
                "DownloadUrl":"https://seesrc.com/dl-green-digital-photo-recovery-pro-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/57320-2?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=561681614537"    
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc57320';
        ele.vendorName = 'best-datarecovery';
        window["SellerData"].push(ele);
    });
})();