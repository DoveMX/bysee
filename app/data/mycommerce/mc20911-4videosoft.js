(function(){
    window["SellerData"] = window["SellerData"] || [];

    var dataList = {
        "products":[
            /// 屏幕截屏软件
            /// 4Videosoft Screen Capture
            {
                "SName": "Screen Capture",
                "TName":"原子正版 4Videosoft Screen Capture 截屏工具 Windows版本",
                "OS":"Windows",
                "Category": "截屏工具",
                "SiteUrl":"http://www.4videosoft.com/screen-capture/",
                "VendorPrice":35.95,
                "PromotPrice":27.3,
                "ID":"20911-429",
                "Commission": 75,
                "dlID":"",
                "DownloadUrl":"http://www.4videosoft.com/download/screen-capture.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/20911-429?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":""
            },
            {
                "SName": "Screen Capture",
                "TName":"原子正版 4Videosoft Screen Capture 截屏工具 Mac版本",
                "OS":"Mac",
                "Category": "截屏工具",
                "SiteUrl":"http://www.4videosoft.com/screen-capture/",
                "VendorPrice":35.95,
                "PromotPrice":27.3,
                "ID":"20911-435",
                "Commission": 75,
                "dlID":"",
                "DownloadUrl":"http://www.4videosoft.com/download/mac/screen-capture-for-mac.dmg",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/20911-435?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209",
                "TaobaoUrl":""
            },
            {}

        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": 'mc20911',
                "VendorName":  '05 4Videosoft',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }
    });
})();