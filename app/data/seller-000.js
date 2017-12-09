(function(){
    window["SellerData"] = window["SellerData"] || [];
    var dataList = {
        "products":[

        ]
    };

    $.each(dataList.products, function(index, ele){
        ele.vendorID = '';
        ele.vendorName = '';
        window["SellerData"].push(ele);
    });
})();