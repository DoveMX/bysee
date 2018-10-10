(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[
            //romanysoft markdownd
            {
                "TName":"原子正版 Markdown 文档编辑工具 Win版本",
                "OS":"Windows",
                "Category": "代码编辑",
                "SiteUrl":"http://aws.romanysoft.com/markdownd/",
                "VendorPrice":35.99,
                "sitePrice":35.99,
                "PromotPrice":35.99,
                "ID":"",
                "Commission": 100,
                "dlID":"dl-markdownd-win",
                "DownloadUrl":"https://seesrc.com/dm/romanysoft/markdownd/MarkdownD-v3.7.4-win32-ia32-setup.exe",
                "OrgDownloadUrl":"https://aws.romanysoft.com/download/markdownd/MarkdownD-v3.7.4-win32-ia32-setup.exe",
                "BuyUrl":"自家产品,向孙志峰询问注册码",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=559830758426"
            },
            {
                "TName":"原子正版 Markdown 文档编辑工具 Mac版本",
                "OS":"Windows",
                "Category": "代码编辑",
                "SiteUrl":"http://aws.romanysoft.com/markdownd/",
                "VendorPrice":35.99,
                "PromotPrice":35.99,
                "sitePrice":35.99,
                "ID":"",
                "Commission": 100,
                "dlID":"dl-markdownd-mac",
                "DownloadUrl":"https://seesrc.com/dm/romanysoft/markdownd/markdownd-v4.0.2-mac.dmg",
                "OrgDownloadUrl":"https://aws.romanysoft.com/download/markdownd/markdownd-v4.0.2-mac.dmg",
                "BuyUrl":"自家产品,向孙志峰询问注册码",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=564003806388"
            },

            //Romanysoft SpeedTest
            {
                "TName":"原子正版 SpeedTest 网络速度测试工具 Mac版本",
                "OS": "Mac",
                "Category": "代码编辑",
                "SiteUrl":"http://seesrc.com/2018/01/09/speedtest-romanysoft-mac/",
                "VendorPrice":5.99,
                "PromotPrice":5.99,
                "sitePrice":5.99,
                "ID":"8799-417",
                "Commission": 100,
                "dlID":"dl-romanysoft-speedtest-mac",
                "DownloadUrl":"https://seesrc.com/dm/romanysoft/speedtest/speedtest-v7.0.3-mac.dmg",
                "OrgDownloadUrl":"https://aws.romanysoft.com/download/speed-test/speedtest-v7.0.3-mac.dmg",
                "BuyUrl":"自家产品,向孙志峰询问注册码",
                "TaobaoUrl":"https://item.taobao.com/item.htm?id=563790712119"
            }
        ]
    };

    $.each(dataList.products, function(index, ele){
        if (_.isPlainObject(ele) && _.keys(ele).length > 0) {
            var one_product = _.extend({
                "VendorID": '1',
                "VendorName":  'Romanysoft(漫软)',
                "SName":""
            }, ele)
            window["SellerData"].push(one_product);
        }
    });
})();