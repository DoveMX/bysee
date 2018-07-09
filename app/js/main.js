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
            group: [{field: "VendorName"}],
            pageSize: 500
        },
        width:$(window).width(),
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
                template: "<strong>#: TName # </strong>",
                locked: true,
                lockable: false,
                format: "{0}",
                sortable: true,
                width: 560
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
                    text: "计算利润",
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        var exchange= 7; // 以汇率7.0为边界

                        var taobao_price = (data.VendorPrice * exchange)/10 * 10 + 9;
                        var Profit = data.VendorPrice * (data.Commission - 5) * exchange / 100.0;
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
                    text: "打开淘宝",
                    visible: function(dataItem) {
                        return _.trim(dataItem.TaobaoUrl || "").length > 0
                    },
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        if (_.trim(data.TaobaoUrl || "").length > 0) {
                            window.open(data.TaobaoUrl);    
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
                    text: "复制试用下载",
                    iconClass: "k-icon k-i-copy",
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
                        window.open(url);

                    } 
                }],
                title: "试用下载链接",
                width: 128,
                locked: true,
                lockable: false
            },{
                field: "OS",
                title: "安装要求",
                width: 84,
                locked: true,
                lockable: false
            },  {
                command:[{ 
                    text: "打开官网",
                    iconClass: "k-icon k-i-copy",
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        //window.open(data.DownloadUrl);
                        var url = data.SiteUrl;
                        window.copyToClipboard(url);

                        //
                        window.alert("官方网站地址已经拷贝成功! 默认打开 " + url);
                        window.open(url);

                    } 
                }],
                title: "官网",
                width: 120
            },{
                field: "ID",
                title: "产品ID",
                width: 84
            },{
                field: "SName",
                title: "关联名称",
                template: '<sub style="font-style: oblique; color: gray;">#: SName # </sub>',
                width: 200                
            }
        ]
    });
});
