let body = $response.body;
let obj = JSON.parse(body);

// 如果对象中包含 "paywall" 字段，将其设置为 false，确保显示全文
if (obj && obj.data) {
    obj.data.paywall = false;
    obj.data.content = obj.data.content.replace(/<p class="paywall">.*?<\/p>/g, '');
}

body = JSON.stringify(obj);
$done({ body });
