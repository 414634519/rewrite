let obj = JSON.parse($response.body);

// 模拟解锁高级账户
obj.data.account_type_v1 = true; // 标记为高级账户
obj.data.sku = "PREMIUM"; // 修改账户类型
obj.data.premium_date = "2099-12-31T23:59:59Z"; // 设置高级账户到期时间
obj.data.connections_limit = 5; // 提升连接限制
obj.data.traffic_total_mb = 99999999; // 无限流量
obj.data.traffic_left_mb = 99999999; // 剩余流量无限
obj.data.best_location_algorithm = "SMART"; // 修改为智能推荐
obj.data.best_city = "New York"; // 推荐最佳服务器城市
obj.data.best_country = "US"; // 推荐最佳国家
obj.data.server_group = "Premium"; // 设置服务器组为高级组
obj.data.speed_limit_mbps = 1000; // 提升速度上限

// 解锁全部功能
obj.data.upgrade_features = {
  "Unlimited Data": true,
  "Zero-Log": true,
  "Unlimited Speed": true,
  "Streaming Support": true,
  "Unlimited Devices": true,
  "Ad Blocking": true
};

$done({ body: JSON.stringify(obj) });
