const { readFileSync, writeFileSync, readSync,writeFile } = require("fs-extra");
const { join } = require("path")
const moment = require("moment-timezone");
exports.name = '/fcaerr';
exports.index = async(req, res, next) => {
try {
  var dayNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");    
  var oklae = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (req.query.error == '' || !req.query.error) return res.json({result: "Nhập lỗi để báo cáo tới sever" });
    const pathData = join(__dirname, "cache", "fca.json");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    if (dataJson.some(i => i.error == req.query.error)) return res.json({result: "Đã tồn tại" })
    var random = parseInt(dataJson.length) + parseInt(1);
    res.jsonp({ id: random, error: req.query.error,senderID: req.query.senderID,DirName: req.query.DirName, Time: oklae, Date: dayNow, isFix: false });
    var item = { id: random, error: req.query.error, senderID: req.query.senderID,DirName: req.query.DirName, Time: oklae, Date: dayNow, isFix: false }
    dataJson.push(item);
    writeFileSync(pathData, JSON.stringify(dataJson,null,4),'utf-8');
    
} catch(err){
            console.log(err);
    return res.json({result: "Thất Bại" })
}}