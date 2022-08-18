exports.name = '/tiktok';
exports.index = async(req, res, next) => {
var link = req.query.url;
if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
var axios = require('axios');
axios({
    method: 'post',
    url: 'http://api.leanhtruong.net/api-no-key/tiktok',
    data: {    
	url: link
	}
})
.then(function (response) {
    var data = response.data
    console.log(data)
    return res.json({ 
		id: data.id,
		title: data.title,
		hash:data.hash,
		data_watermark: data.data_watermark,
		data_nowatermark: data.data_nowatermark
     })
})
.catch(function (error) {
    return res.json({ error });
});
}