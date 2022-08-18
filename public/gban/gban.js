const { readFileSync, writeFileSync } = require("fs-extra");
const { join } = require("path")
const pathData = join(__dirname, "cache", "gban.json");
exports.name = '/gban';
exports.index = async(req, res, next) => {
var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var uid_author = "100040984926932";
  var uid = req.query.uid;
  var name = req.query.reson
  var author = req.query.author;
  if (author !== `${uid_author}`) {
    return res.json({
      status: "false",
      msg: "đòi gban ai vậy em ?"
    })
  }
  if (!name) {
    var namee = "không có lý do được đưa ra"
  }
  var ly_do = name || namee;
  var userData = dataJson.find(item => item.uid == uid) || { senderID: uid, reson: ly_do };
  if (!dataJson.some(i => i.senderID == uid)) {
    dataJson.push(userData);
    writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
    return res.json({

        status: "banned done",
        senderID: uid,
        reson: ly_do,
msg: `[ DATA ] - GBAN THÀNH CÔNG VỚI LÝ DO\n ${ly_do} `
      
    })
  }
  else {
    return res.jsonp({
      status: "banned",
      msg: "đã bị gban"
    })
  }
}