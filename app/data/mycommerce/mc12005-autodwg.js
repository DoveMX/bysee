(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"原子正版 AutoDWG DWG DXF Converter 2018 转换软件工具 标准版",
                "Pid":"mc1-2005-autodwg-dwg-dxf-converter-standard-win",
                "Name":"AutoDWG DWG DXF Converte for Windows",
                "OS": "Windows电脑",
                "site":"http://www.autodwg.com/dwg_dxf_converter/",
                "orgPrice":78,
                "sitePrice":78,
                "productID":"12005-6",
                "Commission": 35,
                "DownloadUrl":"https://seesrc.com/dl-autodwg-dwgdxfconverter-sta-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/12005-6?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560360030210"
            },
            {
                "Pname":"原子正版 AutoDWG DWG DXF Converter 2018 转换软件工具 Pro版",
                "Pid":"mc1-2005-autodwg-dwg-dxf-converter-pro-win",
                "Name":"AutoDWG DWG DXF Converte Pro for Windows",
                "OS": "Windows电脑",
                "site":"http://www.autodwg.com/dwg_dxf_converter/",
                "orgPrice":149,
                "sitePrice":149,
                "productID":"12005-29",
                "Commission": 35,
                "DownloadUrl":"https://seesrc.com/dl-autodwg-dwgdxfconverter-pro-win",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/add/12005-29?affiliate_id=617007",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560429291996"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = 'mc12005';
        ele.vendorName = 'autodwg';
        window["SellerData"].push(ele);
    });
})();