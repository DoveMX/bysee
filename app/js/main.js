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
            group: [{field: "vendorName"},{field: "OS"}],
            pageSize: 30
        },
        height: $(window).height() - 20,
        sortable: true,
        reorderable: true,
        groupable: true,
        resizable: true,
        filterable: true,
        columnMenu: true,
        pageable: true,
        columns: [
            {
                field: "Pname",
                title: "名称",
                locked: true,
                lockable: false,
                format: "{0}",
                width: 400
            },{
                    command:{ 
                        text: "点击购买", 
                        click: function(e){
                            e.preventDefault();
                            var tr = $(e.target).closest("tr");
                            var data = this.dataItem(tr);
                            window.open(data.BuyUrl);
                        } 
                    },
                    title: "", 
                    width: 90,
                    locked: true,
                    lockable: false,
            }, {
                field: "OS",
                title: "系统使用要求",
                width: 120
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
                field: "sitePrice",
                title: "官方价",
                locked: false,
                format: "${0}",
                width: 80
            },  {
                field: "site",
                title: "官方网站",
                width: 300
            },{
                field: "DownloadUrl",
                title: "试用下载",
                lockable: false,
                width: 400
            },  {
                field: "BuyUrl",
                title: "购买授权",
                lockable: false,
                width: 400
            },  {
                field: "TaobaoUrl",
                title: "淘宝链接",
                lockable: false,
                width: 400
            },  {
                field: "productID",
                title: "产品ID",
                lockable: false,
                width: 120
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
