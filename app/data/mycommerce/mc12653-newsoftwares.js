(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "TName":"原子正版 FolderLock 目录加密工具 Windows版",
                "OS":"Windows",
                "SiteUrl":"http://www.newsoftwares.net/folderlock",
                "VendorPrice":39.95,
                "ID":"12653-1",
                "Commission": 50,
                "dlID":"dl-green-hard-drive-data-recovery-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/newsoftwares/folder-lock-en.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/12653-1?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559826218000"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        var one_product = _.extend({
            "VendorID": 'mc12653',
            "VendorName":  'newsoftwares',
            "SName":""
        }, ele)
        window["SellerData"].push(one_product);
    });
})();