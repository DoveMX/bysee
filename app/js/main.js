$(document).ready(function() {
    $("#grid").kendoGrid({
        dataSource: {
            data: window.SellerData,
            schema: {
                model: {
                    fields: {
                        "TName": { type: "string" },
                        "SName": { type: "string" },
                        "OS": { type: "string" },
                        "Category": { type: "string" },
                        "SiteUrl": { type: "string" },
                        "VendorPrice": { type: "number" },
                        "Commission": { type: "number" },
                        "DownloadUrl": { type: "string" },
                        "BuyUrl": { type: "string" },
                        "TaobaoUrl": { type: "string" },
                        "TaobaoPrice": { type: "string" }
                    }
                }
            },
            sort: { field: "TName", dir: "asc" },
            group: [
                {field: "VendorName", aggregates: [
                    { field: "TName", aggregate: "count" }
                ]}
            ],
            aggregate: [
                { field: "TName", aggregate: "count" }
            ],
            pageSize: 500
        },
        width: 1920,
        sortable: true,
        reorderable: true,
        groupable: true,
        resizable: true,
        filterable: true,
        columnMenu: true,
        selectable: "row",
        allowCopy: true,
        columns: [
            {
                command:[{
                    text: "购买",
                    iconClass: "k-icon k-i-cart",
                    visible: function(dataItem) {
                        return _.trim(dataItem.BuyUrl || "").length > 0
                    },
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        if (data.BuyUrl !== '' && data.BuyUrl !== '自家产品,向孙志峰询问注册码' ) {
                            window.open(data.BuyUrl);
                        } else {
                            window.alert("注意内容：" + data.BuyUrl)
                        }

                    }
                }],
                attributes: {
                    "class": "btn-buy"
                },
                title: "购买",
                width: 80,
                locked: true,
                lockable: false,
            },
            {
                field: "TName",
                title: "淘宝商品名称",
                // template: "<strong>#: TName # </strong>",
                locked: true,
                lockable: false,
                format: "{0}",
                sortable: true,
                width: 460,
                aggregates: ["count"], 
                footerTemplate: "总计: #=count#", 
                groupFooterTemplate: "数量: #=count#"
            }, {
                field: "VendorPrice",
                title: "官网价",
                locked: false,
                format: "${0}",
                width: 80
            },  {
                field: "Commission",
                title: "佣金",
                lockable: false,
                format: "{0}%",
                width: 72
            },{
                command:[{ 
                    text: "利润",
                    iconClass: "k-icon k-i-paint",
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        var exchange= 7.0 + 0.1; // 当前汇

                        var taobao_price = Math.floor((data.VendorPrice * exchange)/10) * 10 - 1;
                        var Profit = data.VendorPrice * (data.Commission - 7) * exchange / 100.0;
                        var msg = '淘宝最低售价: ' + kendo.toString(taobao_price, 'n0') + '元 ' +
                                  '利润：' + kendo.toString(Profit, 'n0') + '元 '
                        window.alert(msg);
                    }
                }],
                title: "利润",
                width: 80,
                locked: true
            },{
                command:[{ 
                    name: "TaobaoUrl",
                    text: "淘宝",
                    iconClass: "k-icon k-i-hyperlink-open-sm",
                    visible: function(dataItem) {
                        return _.trim(dataItem.TaobaoUrl || "").length > 0
                    },
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        if (_.trim(data.TaobaoUrl || "").length > 0) {
                            var url = data.TaobaoUrl;
                            window.copyToClipboard(url);
                            window.alert("商品链接已经拷贝成功! 默认打开: " + url);
                            window.open(url);
                        } else {
                            window.alert("没有对应的淘宝商品进行绑定！！");
                        }
                    } 
                }],
                title: "淘宝链接", 
                width: 80,
                locked: true,
                lockable: false
            },{
                command:[{ 
                    text: "试用",
                    iconClass: "k-icon k-i-unlink-vertical",
                    visible: function(dataItem) {
                        return _.trim(dataItem.dlID || "").length > 0
                    },
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        //window.open(data.DownloadUrl);
                        var url = "https://seesrc.com/" + data.dlID;
                        window.copyToClipboard(url);

                        //
                        window.alert("试用下载地址已经拷贝成功! " + url);
                    } 
                }],
                title: "试用下载",
                width: 80,
                locked: true,
                lockable: false
            },{
                field: "OS",
                title: "安装要求",
                width: 84,
                locked: true,
                lockable: false
            },{
                field: "Category",
                title: "类别",
                width: 84,
                locked: true,
                lockable: false
            },  {
                command:[{ 
                    text: "官网",
                    iconClass: "k-icon k-i-hyperlink-open-sm",
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
   
                        var url = data.SiteUrl;
                        window.copyToClipboard(url);
                        //
                        window.alert("官方网站地址已经拷贝成功! 默认打开: " + url);
                        window.open(url);

                    } 
                }],
                title: "官网",
                width: 80
            },{
                field: "ID",
                title: "产品ID",
                width: 84
            },{
                field: "SName",
                title: "系列名称",
                template: '<span style="font-style: oblique; color: gray;">#: SName # </span>',
                width: 200                
            }
        ]
    });
});
