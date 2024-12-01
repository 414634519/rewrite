let body = $response.body;
let obj = JSON.parse(body);

// 确保数据结构存在
if (obj.data && obj.data.data) {
    // 更新校友卡相关信息
    obj.data.data.legalIdentity.legalName = "刘俊杰"; // 修改姓名
    obj.data.data.alumnus = true; // 修改校友状态为 true
    
    // 修改未认证校园身份信息
    obj.data.data.uncertifiedCampusIdentity.enrollmentYear = "2020-01-01T08:00:00Z"; // 入校年份
    obj.data.data.uncertifiedCampusIdentity.enrollmentTypeLabel = "硕士"; // 入校类型
    obj.data.data.uncertifiedCampusIdentity.department = {
        id: "eco", // 自定义院系ID
        name: "经济管理学院", // 院系名称
        code: "202" // 院系代码
    };

    // 移除审核评论及其他限制信息
    obj.data.data.uncertifiedCampusIdentity.reviewComments = "信息已认证";
    obj.data.data.uncertifiedCampusIdentity.supplementaryComments = "";
    obj.data.data.uncertifiedCampusIdentity.allowEndorse = true; // 启用校友推荐
}

// 返回修改后的 JSON
body = JSON.stringify(obj);
$done({ body });
