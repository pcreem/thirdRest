# 餐廳清單

此專案提供使用者瀏覽、新增、刪除及修改餐廳的資訊
[Demo Website](http://localhost:3000/)

歡迎使用測試帳號登入使用，帳密如下：

```
帳號: user1@example.com 
密碼: 12345678
```

## 專案畫面

![image](https://github.com/pcreem/thirdRest/blob/master/img/login.png)

![image](https://github.com/pcreem/thirdRest/blob/master/img/list.png)

![image](https://github.com/pcreem/thirdRest/blob/master/img/show.png)

![image](https://github.com/pcreem/thirdRest/blob/master/img/add.png)


## 環境需求

[Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/)
[MySQL](https://dev.mysql.com/downloads/mysql/) //安裝時確認密碼為password

### 安裝

1.至 https://github.com/pcreem/thirdRest 畫面右側clone鍵下載專案

2.初始
cd thirdRest  //切至專案資料夾
npm install  //安裝套件

3.創建database,預設使用者及餐廳資料至 MySQL
a. 打開 MySQL Workbench 並且連接到 local 的資料庫，在 Query 的地方輸入：
CREATE DATABASE thirdrest; 輸入完以後記得按下閃電的 icon 執行

4.移至終端環境執行
b. npx sequelize db:migrate  //更新資料庫欄
c. npx sequelize db:seed:all //執行增加資料至 MySQL

5.facebook登入環境.env檔設定
新增.env檔,輸入 
FACEBOOK_ID=xxx //xxx為您fackbook app的id與密碼
FACEBOOK_SECRET=xxx
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback

6.開啟程式
npm run dev //執行程式
瀏覽器位址輸入 http://localhost:3000  // 使用者測試資料 帳號: user1@example.com 密碼: 12345678

## Authors
乃頌