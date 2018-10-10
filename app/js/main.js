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
                        var exchange= (6.92).toFixed(3); // 当前汇率取整

                        /// 计算实际订单价格与官方促销价格的利润分配 VendorPrice 与 PromotPrice 

                        ///[0]
                        var final_taobao_price = 0; /// 最终淘宝最低售价
                        var final_profit = 0;       /// 最终利润
                        var is_use_promo_price = false;   /// 是否使用官方促销价


                        ///[1]
                        var taobao_price_for_seller = Math.floor((data.VendorPrice * exchange)/10) * 10 - 1; /// 实际订货价格
                        var Profit_for_seller = data.VendorPrice * (data.Commission - 7) * exchange / 100.0; /// 按照实际订货价格的利润

                        ///[2]
                        var taobao_price_by_offical_promotion = Math.floor((data.PromotPrice * exchange)/10) * 10 - 1; /// 官方促销订货价格

                        ///[3]
                        /// 计算求：淘宝上使用哪个价格作为销售价格
                        var arbitrage = taobao_price_for_seller - taobao_price_by_offical_promotion;  /// 差价部分 （实际订货价格 - 官方促销订货价格）
                        var min_profit_allowed = 50;  /// 最少允许的利润空间 RMB
                        is_use_promo_price = ((Profit_for_seller - arbitrage) >= min_profit_allowed) && (taobao_price_for_seller != taobao_price_by_offical_promotion);

                        if (!is_use_promo_price) {
                            final_taobao_price = taobao_price_for_seller;
                            final_profit = Profit_for_seller;
                        } else {
                            final_taobao_price = taobao_price_by_offical_promotion;
                            final_profit = (Profit_for_seller - arbitrage);
                        }

                        var msg = '淘宝最低售价: ' + kendo.toString(final_taobao_price, 'n0') + '元 ' +
                                  '利润：' + kendo.toString(final_profit, 'n0') + '元 '
                        if (is_use_promo_price) {
                            msg = '[官方正在促销]($' + data.PromotPrice + ') ' + msg;
                        }

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
                        if (data.dlID === "") {
                            url = data.DownloadUrl;
                        }

                        window.copyToClipboard(url);

                        var url_list = [url]
                        if (data.DownloadUrl) {
                            url_list.push(data.DownloadUrl)
                        }

                        //
                        window.alert("试用下载地址已经拷贝成功! \n" + url_list.join('\n\n'));
                    } 
                }],
                title: "试用下载",
                width: 80,
                locked: true,
                lockable: false
            },{
                field: "OS",
                title: "安装要求",
                width: 100,
                locked: true,
                lockable: false
            },{
                field: "Category",
                title: "类别",
                width: 120,
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
