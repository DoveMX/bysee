(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"Flip PDF翻页电子杂志书籍创建编辑工具 Windows版",
                "Pid":"mc9-891-flip-pdf-for-win",
                "Name":"Flip PDF for Windows",
                "OS": "win",
                "site":"http://www.flipbuilder.com/flip-pdf/",
                "orgPrice":99,
                "sitePrice":99,
                "productID":"9891-56",
                "Commission": 50,
                "dlID":"dl-idman-win",
                "DownloadUrl":"https://seesrc.com/dm/flipbuilder/flip-pdf.zip",
                "OrgDownloadUrl":"http://www.flipbuilder.com/download/flip-pdf.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-56?quantity=1&locale=en_US&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=5559792217265"
            },
            {
                "Pname":"Flip PDF翻页电子杂志书籍创建编辑工具 Mac版",
                "Pid":"mc9-891-flip-pdf-mac",
                "Name":"Flip PDF for Mac",
                "OS": "mac",
                "site":"http://www.flipbuilder.com/flip-pdf/",
                "orgPrice":99,
                "sitePrice":99,
                "productID":"9891-174",
                "Commission": 51,
                "dlID":"dl-idman-mac",
                "DownloadUrl":"https://seesrc.com/dm/flipbuilder/Flip-PDF-for-Mac.zip",
                "OrgDownloadUrl":"http://www.flipbuilder.com/download/Flip-PDF-for-Mac.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-174?quantity=1&locale=en_US&currency=USD&affiliate_id=624209&affiliate=624209",
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