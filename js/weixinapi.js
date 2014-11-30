function onBridgeReady() {
    var mainTitle="2014“无能”的淘宝",
        mainDesc="2014淘宝1212万能盛典 开启用想象力淘宝的时代",
        mainURL="http://106.187.50.149/ali1212h5/113002/index.html",
        mainImgUrl= "http://106.187.50.149/ali1212h5/113002/images/share_sample.png";

    //转发朋友圈
    WeixinJSBridge.on("menu:share:timeline", function(e) {
        var data = {
            img_url:mainImgUrl,
            img_width: "120",
            img_height: "120",
            link: mainURL,
            //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
            desc: mainDesc,
            title: mainTitle
        };
        WeixinJSBridge.invoke("shareTimeline", data, function(res) {
            WeixinJSBridge.log(res.err_msg)
        });
    });
    //同步到微博
    WeixinJSBridge.on("menu:share:weibo", function() {
        WeixinJSBridge.invoke("shareWeibo", {
            "content": mainDesc,
            "url": mainURL
        }, function(res) {
            WeixinJSBridge.log(res.err_msg);
        });
    });
    //分享给朋友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        WeixinJSBridge.invoke("sendAppMessage", {
            img_url: mainImgUrl,
            img_width: "120",
            img_height: "120",
            link: mainURL,
            desc: mainDesc,
            title: mainTitle
        }, function(res) {
            WeixinJSBridge.log(res.err_msg)
        });
    });
};
//执行
document.addEventListener('WeixinJSBridgeReady', function() {
    onBridgeReady();
    WeixinJSBridge.call('hideToolbar');
});