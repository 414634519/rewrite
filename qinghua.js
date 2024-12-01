let body = $response.body;
let obj = JSON.parse(body);

// 确保数据结构存在
if (obj.data && obj.data.data) {
    // 修改目标字段
    obj.data.data.alumnus = true; // 将校友状态设为true

    // 更新校友卡相关信息
    obj.data.data.identityDocument.legalName = "刘俊杰"; // 修改姓名
    obj.data.data.uncertifiedCampusIdentity.enrollmentYear = "2020-01-01T08:00:00Z"; // 入校年份
    obj.data.data.uncertifiedCampusIdentity.enrollmentTypeLabel = "硕士"; // 入校类型
    obj.data.data.uncertifiedCampusIdentity.department = {
        id: "eco", // 自定义院系ID
        name: "经济管理学院", // 院系名称
        code: "202" // 院系代码
    };
}

// 返回修改后的 JSON
body = JSON.stringify(obj);
$done({ body });
