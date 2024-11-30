// Quantumult X Script to modify iEndTime to 2026-12-31 00:00:00
const url = $request.url;
const pathModule = "/json/crm_module/readModule";

// 时间戳对应2026年12月31日00:00:00
const newEndTime = 1798771200;

if (url.includes(pathModule)) {
    let obj = JSON.parse($response.body);

    if (obj.rsp && obj.rsp.stModules) {
        obj.rsp.stModules.forEach(module => {
            module.iEndTime = newEndTime;
        });
    }

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
