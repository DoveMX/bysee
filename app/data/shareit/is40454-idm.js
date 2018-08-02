(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "TName":"Internet Download Manager 国外优秀的下载工具",
                "OS":"Windows",
                "Category": "网络工具",
                "SiteUrl":"http://www.internetdownloadmanager.com/",
                "VendorPrice":24.95,
                "sitePrice":24.95,
                "ID":"212127",
                "Commission": 20,
                "dlID":"dl-idman-win",
                "DownloadUrl":"https://seesrc.com/dm/internetdownloadmanager/idman630build6.exe",
                "OrgDownloadUrl": "http://mirror2.internetdownloadmanager.com/idman630build3.exe?v=lt&filename=idman630build3.exe",
                "BuyUrl":"https://order.shareit.com/cart/add?vendorid=40454&PRODUCT[212127]=1&affiliateid=200274083",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559925904477"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": 'is40454',
                "VendorName":  'IDM',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }
    });
})();