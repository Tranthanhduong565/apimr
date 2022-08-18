exports.name = '/buy/nguoiban';
exports.index = async(req, res, next) => {
    const request = require('request');
    var nguoiban = "» .Pokemon \n» .Busy \n» .Luotdung \n» .Xidach \n» .Boxinfo\n» .Cauca \n» .3cay \n\n» Người bán : Trần Văn Nhất\n» FB: facebook.com/vnhat03/"
    res.json({
        nguoiban: nguoiban
    })
}