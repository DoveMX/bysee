(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"AutoDWG DWG DXF Converter 2018 转换软件工具 标准版",
                "Pid":"mc1-2005-autodwg-dwg-dxf-converter-standard-win",
                "Name":"AutoDWG DWG DXF Converte for Windows",
                "OS": "win",
                "site":"http://www.autodwg.com/dwg_dxf_converter/",
                "orgPrice":78,
                "sitePrice":78,
                "productID":"12005-6",
                "Commission": 35,
                "dlID":"dl-autodwg-dwgdxfconverter-sta-win",
                "DownloadUrl":"https://seesrc.com/dm/autodwg/dwg_dxf_converter/dwg2dxf2018.exe",
                "OrgDownloadUrl":"http://www.autodwg.com/download/dwg2dxf2018.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/12005-6?quantity=1&locale=en_US&currency=USD&affiliate_id=624209&affiliate=624209",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=560360030210"
            },
            {
                "Pname":"AutoDWG DWG DXF Converter 2018 转换软件工具 Pro版",
                "Pid":"mc1-2005-autodwg-dwg-dxf-converter-pro-win",
                "Name":"AutoDWG DWG DXF Converte Pro for Windows",
                "OS": "win",
                "site":"http://www.autodwg.com/dwg_dxf_converter/",
                "orgPrice":149,
                "sitePrice":149,
                "productID":"12005-29",
                "Commission": 35,
                "dlID":"dl-autodwg-dwgdxfconverter-pro-win",
                "DownloadUrl":"https://seesrc.com/dm/autodwg/dwg_dxf_converter/dwg2dxf2018.exe",
                "OrgDownloadUrl":"http://www.autodwg.com/download/dwg2dxf2018.exe",
                "BuyUrl":"https://shopper.mycommerce.com/checkout/cart/new/12005-29?quantity=1&locale=en_US&currency=USD&affiliate_id=624209&affiliate=624209",
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