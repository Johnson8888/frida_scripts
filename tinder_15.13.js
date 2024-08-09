

function hookFaceTecSDKMethod(addr) {
    var moduleBase = Module.findBaseAddress('FaceTecSDK');
    if (moduleBase) {
        var targetAddress = moduleBase.add(addr); // 0x1241dc 是相对地址
        try {
            // 创建一个新的回调函数来替代目标函数
            var replacementFunction = new NativeCallback(function() {
                console.log('FaceTecSDK method at address: ' + targetAddress + ' has been replaced and will not execute.');
                return 0; // 根据需要返回一个值
            }, 'int', []); // 这里假设返回类型是 int，没有参数

            // 替换目标函数
            Interceptor.replace(targetAddress, replacementFunction);
        } catch (e) {
            console.error('Error replacing method at address: ' + targetAddress + '\n' + e);
        }
    } else {
        console.error('Failed to find FaceTecSDK module base address');
    }
}

// 主函数
function main() {

        let addressList = [
        0x1241dc,
        0x113f90,
        0x12a0a0,
        0x11f380,
        0x11b814,
        0x117190,
        0x12f3e4,
        0x12c988,
        0x111a04,
        0x133f24,
        0x15c7b8,
        0x1336b0,
        0x15ba8c,
        0x15f864,
        0x15becc,
        0x127b38,
        0x1276e0,
        0x129c10,
        0x121424,
        0x125a58,
        0x125ecc,
        0x123da8,
        0x15be9c,
        0x126a08,
        0x1269f0,
        0x15cbe0,
        0x1255a8,
        0x1283c4,
        0x12f1e8,
        0x10f6b8,
        0x15fc78,
        0x133abc,
        0x15cbf8,
        0x11f338,
        0x126510,
        0x125a28,
        0x10f6a0,
        0x15beb4,
        0x127af0,
        0x121830,
        0x116d68,
        0x126e6c,
        0x11f350,
        0x12a070,
        0x11b388,
        0x1264f8,
        0x12a040,
        0x123d90,
        0x12f200,
        0x1283dc,
        0x1241c4,
        0x125eb4,
        0x15c2e0,
        0x11d7e4,
        0x15c788,
        0x11b370,
        0x1264e0,
        0x12a058,
        0x11b328,
        0x121848,
        0x15cbc8,
        0x11f320,
        0x11691c,
        0x2fbd10,
        0x2fc3a8,
        0x3206b0,
        0x34b990,
        0x36b330,
        0x3ff13c,
        0x118ef8,
        0x10f6d0,
        0x121c84,
        0x13d3bc,
        0x15d038,
        0x1340f4,
        0x10cc54,
        0x11dc34,
        0x1283f4,
        0x127fac,
        0x116d80,
        0x126a20,
        0x13cfa8,
        0x15b680,
        0x10c834,
        0x121878,
        0x15f43c,
        0x15cc28,
        0x11aa5c,
        0x1272d4,
        0x1362b0,
        0x1264b0,
        0x15c7a0,
        0x125a40,
        0x10c804,
        0x11ae6c,
        0x125e9c,
        0x15b668,
        0x12140c,
        0x15cc10,
        0x126e84,
        0x11b340,
        0x13cf78,
        0x12a028,
        0x127b08,
        0x15c2f8,
        0x133f0c,
        0x11b2f8,
        0x125e84,
        0x12f218,
        0x10c81c,
        0x1269d8,
        0x15c758,
        0x11f308,
        0x11f368,
        0x12a088,
        0x126498,
        0x127b20,
        0x12ed94,
        0x15c770,
        0x11b358,
        0x13cf90,
        0x113f78,
        0x15f424,
        0x1264c8,
        0x121860,
        0x136298,
        0x126528,
        0x11f2f0,
        0x15f84c,
        0x125e6c,
        0x11b310,
        0x12f230,
        0x2f66dc,
        0x30bc70,
        0x32592c,
        0x369144,
        0x3c3d70,
        0x460294,
    ];

    for (var i = 0; i < addressList.length; i++) {
        let addr = addressList[i];
        hookFaceTecSDKMethod(addr);
    }
}

// 确保脚本立即执行
setImmediate(main);
