let body = $response.body;
let obj = JSON.parse(body);

// 遍历 data 中可能隐藏付费墙内容的字段
if (obj && obj.data) {
    obj.data.paywall = false;  // 确保直接解除 paywall 限制
    obj.data.isSubscribed = true;  // 假设有 isSubscribed 字段控制会员状态
    obj.data.content = obj.data.content.replace(/<p class="paywall">.*?<\/p>/g, '');  // 移除标注的付费段落
}

// 对象转换回字符串并返回
body = JSON.stringify(obj);
$done({ body });
