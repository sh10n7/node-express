const express = require("express");
const app = express();

// fsモジュールの読み込み。(fs = FileSystemの略)
const fs = require('fs');

// formから投稿されたデータの中身を解析する記載。
app.use(express.urlencoded( { extended: true }))

const activities = require("./activities.json")

// getリクエストで送る場合。req = リクエストの内容、 res = レスポンスの内容
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/autumn", function(req, res){
  //writeFileモジュールを使用して、data.txtファイルにデータを書き込む。
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function() {
    res.send("投稿完了");
  });
})

app.post("/update", function(req, res) {
  activities[0].activity = req.body.updatedActivity;
  res.send(activities);
})

app.post("/delete", function(req, res) {
  //splice(削除したい配列の番号, 削除する個数) 
  activities.splice(req.body.number, 1);
  res.send(activities);
})

app.listen(5000, function() {
  console.log('listening on localhost port 5000');
});
