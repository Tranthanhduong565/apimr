const { readFileSync, writeFileSync } = require("fs-extra");
const { join } = require("path")
const pathData = join(__dirname, "cache", "fca.json");
exports.name = '/fcacheck';
exports.index = async(req, res, next) => {
   var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
   return res.json(dataJson)
}