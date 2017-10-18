(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"MarkdownD markdown文档编辑工具 好用 可视化Win版本",
                "Pid":"romanysoft-markdownd-win",
                "Name":"MarkdownD for Windows",
                "OS": "win",
                "OfficalSite":"http://www.romanysoft.net",
                "OfficalPrices":"$19",
                "OfficalProductID":"",
                "Commission": 50,
                "DownloadUrl":"https://seesrc.com/dl-markdownd-win",
                "BuyUrl":"",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559830758426",
                "TaobaoPrice": "60"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        window["SellerData"].push(ele);
    });
})();