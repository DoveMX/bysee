(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"FolderLock 目录加密工具 Windows版",
                "Pid":"mc1-2653-folder-lock",
                "Name":"Folder Lock",
                "OS": "win",
                "site":"http://www.newsoftwares.net/folderlock",
                "orgPrice":39.95,
                "sitePrice":39.95,
                "productID":"12653-1",
                "Commission": 50,
                "dlID":"dl-green-hard-drive-data-recovery-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/newsoftwares/folder-lock-en.exe",
                "OrgDownloadUrl":"http://www.newsoftwares.net/download/folderlock7-en/folder-lock-en.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/12653-1?quantity=1&locale=en_US&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559826218000"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc12653';
        ele.vendorName = 'newsoftwares';
        window["SellerData"].push(ele);
    });
})();