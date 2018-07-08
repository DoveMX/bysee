(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 Windows版",
                "OS":"Windows",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf/",
                "VendorPrice":99,
                "ID":"9891-56",
                "Commission": 50,
                "dlID":"dl-idman-win",
                "DownloadUrl":"https://seesrc.com/dm/flipbuilder/flip-pdf.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-56?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=5559792217265"
            },
            {
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 Mac版",
                "OS": "Mac",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf/",
                "VendorPrice":99,
                "ID":"9891-174",
                "Commission": 51,
                "dlID":"dl-idman-mac",
                "DownloadUrl":"https://seesrc.com/dm/flipbuilder/Flip-PDF-for-Mac.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-174?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559946595903"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        var one_product = _.extend({
            "VendorID": 'mc9891',
            "VendorName":  'flipbuilder'
        }, ele)
        window["SellerData"].push(one_product);
    });
})();