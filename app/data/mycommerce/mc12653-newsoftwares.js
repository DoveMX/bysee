(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"FolderLock 目录加密工具 Windows版",
                "Pid":"mc1-2653-folder-lock",
                "Name":"Folder Lock",
                "OS": "Windows电脑",
                "site":"http://www.newsoftwares.net/folderlock",
                "orgPrice":39.95,
                "sitePrice":39.95,
                "productID":"12653-1",
                "Commission": 50,
                "DownloadUrl":"",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/12653-1?affiliate_id=617007",
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