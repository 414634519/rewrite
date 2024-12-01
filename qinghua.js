let body = $response.body;
let obj = JSON.parse(body);

// 确保数据结构存在
if (obj.data && obj.data.data) {
    // 修改姓名
    obj.data.data.legalName = "刘俊杰";
    
    // 将校友状态设置为 true
    obj.data.data.alumnus = true;

    // 模拟补充校园身份信息
    obj.data.data.campusIdentity = {
        enrollmentYear: "2020",            // 入校年份
        enrollmentTypeLabel: "硕士",       // 入校类型
        department: {
            id: "eco",                    // 自定义院系ID
            name: "经济管理学院",          // 院系名称
            code: "202"                   // 院系代码
        }
    };
}

// 返回修改后的 JSON 数据
body = JSON.stringify(obj);
$done({ body });
