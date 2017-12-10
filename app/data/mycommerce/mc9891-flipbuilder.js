(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"Flip PDF翻页电子杂志书籍创建编辑工具 Windows版",
                "Pid":"mc9-891-flip-pdf-for-win",
                "Name":"Flip PDF for Windows",
                "OS": "Windows电脑",
                "site":"http://www.flipbuilder.com/flip-pdf/",
                "orgPrice":99,
                "sitePrice":99,
                "productID":"9891-56",
                "Commission": 50,
                "DownloadUrl":"https://seesrc.com/dl-flip-pdf-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/9891-56?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=5559792217265"
            },
            {
                "Pname":"Flip PDF翻页电子杂志书籍创建编辑工具 Mac版",
                "Pid":"mc9-891-flip-pdf-mac",
                "Name":"Flip PDF for Mac",
                "OS": "苹果电脑",
                "site":"http://www.flipbuilder.com/flip-pdf/",
                "orgPrice":99,
                "sitePrice":99,
                "productID":"9891-174",
                "Commission": 51,
                "DownloadUrl":"https://seesrc.com/dl-flip-pdf-mac",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/9891-174?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559946595903"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc9891';
        ele.vendorName = 'flipbuilder';
        window["SellerData"].push(ele);
    });
})();