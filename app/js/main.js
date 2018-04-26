$(document).ready(function() {
    $("#grid").kendoGrid({
        dataSource: {
            data: window.SellerData,
            schema: {
                model: {
                    fields: {
                        "Pname": { type: "string" },
                        "Pid": { type: "string" },
                        "Name": { type: "string" },
                        "OS": { type: "string" },
                        "site": { type: "string" },
                        "orgPrice": { type: "number" },
                        "sitePrice": { type: "number" },
                        "productID": { type: "string" },
                        "OfficalProductID": { type: "string" },
                        "Commission": { type: "number" },
                        "DownloadUrl": { type: "string" },
                        "BuyUrl": { type: "string" },
                        "TaobaoUrl": { type: "string" },
                        "TaobaoPrice": { type: "string" }
                    }
                }
            },
            group: [{field: "vendorName"}],
            pageSize: 100
        },
        height: $(window).height() - 20,
        sortable: true,
        reorderable: true,
        groupable: true,
        resizable: true,
        filterable: true,
        columnMenu: true,
        // selectable: "multiple cell",
        allowCopy: true,
        pageable: true,
        columns: [
            {
                command:{
                    text: "购买",
                    iconClass: "k-icon k-i-cart",
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
                },
                attributes: {
                    "class": "btn-buy"
                },
                title: "购买",
                width: 80,
                locked: true,
                lockable: false,
            },
            {
                field: "Pname",
                title: "名称",
                locked: true,
                lockable: false,
                format: "{0}",
                width: 400
            },  {
                field: "Commission",
                title: "佣金",
                lockable: false,
                format: "{0}%",
                width: 80
            }, {
                field: "orgPrice",
                title: "预售价",
                locked: false,
                format: "${0}",
                width: 80
            },{
                command:{ 
                    text: "利润",
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        var exchange= 6.95;

                        var taobao_price = data.orgPrice * exchange;
                        var price = data.orgPrice * (100.0 - data.Commission) * exchange /100.0;
                        var Profit = data.orgPrice * data.Commission * exchange / 100.0;
                        var msg = '最低售价：' + kendo.toString(price, 'n0') + '元 ' +
                                  '淘宝: ' + kendo.toString(taobao_price, 'n0') + '元 ' +
                                  '利润：' + kendo.toString(Profit, 'n0') + '元 '
                        window.alert(msg);
                    }
                },
                title: "利润",
                width: 80,
                locked: true
            },{
                command:{ 
                    text: "淘宝",
                    click: function(e){
                        e.preventDefault();
                        var tr = $(e.target).closest("tr");
                        var data = this.dataItem(tr);
                        window.open(data.TaobaoUrl);
                    } 
                },
                title: "淘宝", 
                width: 80,
                locked: true,
                lockable: false
            },{
                command:{ 
                    text: "复制试用",
                    iconClass: "k-icon k-i-copy",
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
                },
                title: "试用链接",
                width: 120,
                locked: true,
                lockable: false
            },{
                field: "sitePrice",
                title: "官方价",
                locked: false,
                format: "${0}",
                width: 80
            }, {
                field: "OS",
                title: "💻",
                width: 80,
                locked: true,
                lockable: false
            },  {
                field: "productID",
                title: "产品ID",
                lockable: false,
                width: 120
            },  {
                field: "site",
                title: "官方网站",
                width: 600
            },{
                field: "DownloadUrl",
                title: "试用下载",
                lockable: false,
                width: 600
            },  {
                field: "BuyUrl",
                title: "购买授权",
                lockable: false,
                width: 600
            },  {
                field: "vendorID",
                title: "供应商ID",
                width: 120 
            },  {
                field: "vendorName",
                title: "供应商",
                width: 160 
            }
        ]
    });
});
