// Quantumult X Script for Modifying JSON Response
let body = $response.body;
let obj = JSON.parse(body);

// 修改 alumnus 字段为 true
obj.data.data.alumnus = true;

// 增加新的字段
obj.data.data.姓名 = "刘俊杰";
obj.data.data.入校年份 = 2020;
obj.data.data.入校类型 = "硕士";
obj.data.data.院系 = "经济管理学院";

// 重新生成 JSON 并返回
body = JSON.stringify(obj);
$done({ body });
