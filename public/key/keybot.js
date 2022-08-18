exports.name = '/checkkeybot';
exports.index = async(req, res, next) => {
var key = req.query.key;
   var apikey = [
     "congquyen2k7",
     "quyenka2k7"
];
   if (apikey.includes(key)) {
        res.jsonp({
          status: true
        })
    } else {
        res.jsonp({
          status: false
        })
    }
}