 const { readFileSync, writeFileSync } = require("fs-extra");
 const { join } = require("path")
 const pathData = join(__dirname, "cache", "fca.json");
exports.name = '/fcacheck';
exports.index = async(req, res, next) => {
var id = req.query.id;
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    
    if (!dataJson.some(i => i.id == id)) {
        return res.json({ data: "False",
        msg: "Không Tồn Tại Lỗi Này"
        })
    }
    else try {
    var fca = dataJson.find(item => item.id == id);
    if (fca.isFix == false) {
        fca.isFix = true
        writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
        return res.json({ data: `Đã Đổi Trạng Thái Của Báo Cáo Lỗi Thành Công!`,form: fca.isFix, error: fca.error })
    }
    else if (fca.isFix == true) {
        fca.isFix = false
        writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
        return res.json({ data: `Đã Đổi Trạng Thái Của Báo Cáo Lỗi Thành Công!`,form: fca.isFix, error: fca.error })
    }
       
    }
    catch (e) {
        return res.json({ data: "False",
        msg: "Đã Xảy Ra Lỗi !"
        })
    }
}