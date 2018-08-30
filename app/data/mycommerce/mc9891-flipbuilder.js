(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "SName":"PDF Tools",
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 Windows版",
                "OS":"Windows",
                "Category": "PDF专业工具",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf/",
                "VendorPrice":99,
                "ID":"9891-56",
                "Commission": 50,
                "dlID":"dl-flip-pdf-win",
                "DownloadUrl":"https://seesrc.com/dm/flipbuilder/flip-pdf.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-56?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559792217265"
            },
            {
                "SName":"PDF Tools",
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 Mac版",
                "OS": "Mac",
                "Category": "PDF专业工具",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf/",
                "VendorPrice":99,
                "ID":"9891-174",
                "Commission": 51,
                "dlID":"dl-flip-pdf-mac",
                "DownloadUrl":"https://seesrc.com/dm/flipbuilder/Flip-PDF-for-Mac.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-174?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559946595903"
            },
            {   
                "SName":"PDF Tools",
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 专业版 Windows版",
                "OS":"Windows",
                "Category": "PDF专业工具",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf-pro/",
                "VendorPrice":299,
                "ID":"9891-138",
                "Commission": 30,
                "dlID":"dl-flip-pdf-pro-win",
                "DownloadUrl":"http://www.flipbuilder.com/download/flip-pdf-pro.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-138?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=576624243082"
            },
            {   
                "SName":"PDF Tools",
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 专业版 Mac版",
                "OS":"Mac",
                "Category": "PDF专业工具",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf-pro/",
                "VendorPrice":299,
                "ID":"9891-194",
                "Commission": 30,
                "dlID":"dl-flip-pdf-pro-mac",
                "DownloadUrl":"http://www.flipbuilder.com/download/Flip-PDF-Pro-for-Mac.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-194?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":""
            },
            {   
                "SName":"PDF Tools",
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 企业版 Windows版",
                "OS":"Windows",
                "Category": "PDF专业工具",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf-corp/",
                "VendorPrice":999,
                "ID":"9891-296",
                "Commission": 30,
                "dlID":"dl-flip-pdf-corp-win",
                "DownloadUrl":"http://www.flipbuilder.com/download/flip-pdf-corporate.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-296?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":""
            },
            {   
                "SName":"PDF Tools",
                "TName":"原子正版 Flip PDF翻页电子杂志书籍创建编辑工具 企业版 Mac版",
                "OS":"Mac",
                "Category": "PDF专业工具",
                "SiteUrl":"http://www.flipbuilder.com/flip-pdf-corp/",
                "VendorPrice":999,
                "ID":"9891-333",
                "Commission": 30,
                "dlID":"dl-flip-pdf-corp-mac",
                "DownloadUrl":"http://www.flipbuilder.com/download/flip-pdf-corporate-mac.zip",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/9891-333?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":""
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": 'mc9891',
                "VendorName":  'flipbuilder',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }

    });
})();