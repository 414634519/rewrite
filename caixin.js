let body = $response.body;
let obj = JSON.parse(body);

// 检查是否有全文内容字段
if (obj && obj.data && obj.data.content) {
    // 解锁全文
    obj.data.content = obj.data.content.replace(/<p class="paywall">.+?<\/p>/g, '');
    obj.data.paywall = false;
}

body = JSON.stringify(obj);
$done({ body });
