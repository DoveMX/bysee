(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[

        ]
    };

    $.each(dataList.products, function(index, ele){
        var one_product = _.extend({
            "VendorID": '',
            "VendorName":  ''
        }, ele)
        window["SellerData"].push(one_product);
    });
})();