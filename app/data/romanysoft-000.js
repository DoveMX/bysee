(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            {
                "Pname":"MarkdownD markdown文档编辑工具 好用 可视化Win版本",
                "Pid":"romanysoft-markdownd-win",
                "Name":"MarkdownD for Windows",
                "OS": "win",
                "site":"http://www.romanysoft.net",
                "orgPrice":19,
                "sitePrice":19,
                "productID":"",
                "Commission": 50,
                "DownloadUrl":"https://seesrc.com/dl-markdownd-win",
                "BuyUrl":"",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559830758426"
            },

            //Romanysoft SpeedTest
            {
                "Pname":"SpeedTest 网络速度测试工具 Mac版本",
                "Pid":"romanysoft-speedtest-macc",
                "Name":"SpeedTest 网络速度测试工具 Mac版本",
                "OS": "mac",
                "site":"http://seesrc.com/2018/01/09/speedtest-romanysoft-mac/",
                "orgPrice":5.99,
                "sitePrice":5.99,
                "productID":"8799-417",
                "Commission": 100,
                "dlID":"dl-romanysoft-speedtest-mac",
                "DownloadUrl":"https://pan.baidu.com/s/1raoNAn6",
                "OrgDownloadUrl":"https://aws.romanysoft.com/download/speed-test/speedtest-v7.0.3-mac.dmg",
                "BuyUrl":"",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=563790712119"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = '1';
        ele.vendorName = 'romanysoft';
        window["SellerData"].push(ele);
    });
})();