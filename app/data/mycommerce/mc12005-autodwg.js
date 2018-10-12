(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "TName":"原子正版 AutoDWG DWG DXF Converter 2018 转换软件工具 标准版",
                "OS":"Windows",
                "Category": "AutoCAD工具",
                "SiteUrl":"http://www.autodwg.com/dwg_dxf_converter/",
                "VendorPrice":78,
                "PromotPrice":78,
                "ID":"12005-6",
                "Commission": 35,
                "dlID":"dl-autodwg-dwgdxfconverter-sta-win",
                "DownloadUrl":"https://seesrc.com/dm/autodwg/dwg_dxf_converter/dwg2dxf2018.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/12005-6?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560360030210"
            },
            {
                "TName":"原子正版 AutoDWG DWG DXF Converter 2018 转换软件工具 Pro版",
                "OS":"Windows",
                "Category": "AutoCAD工具",
                "SiteUrl":"http://www.autodwg.com/dwg_dxf_converter/",
                "VendorPrice":149,
                "PromotPrice":149,
                "ID":"12005-29",
                "Commission": 35,
                "dlID":"dl-autodwg-dwgdxfconverter-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/autodwg/dwg_dxf_converter/dwg2dxf2018.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/12005-29?quantity=1&locale=zh_CN&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560429291996"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": 'mc12005',
                "VendorName":  '04 Autodwg',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }

    });
})();