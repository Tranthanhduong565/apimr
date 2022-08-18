exports.name = '/buy/key';
exports.index = async(req, res, next) => {
    const request = require('request');
    var key = "» 1.Pokemon \n» Giá: 50k \n\n» 2. Busy \n» Giá :40k\n\n» 3. Boxinfo \n» Giá: 40k\n\n» 4. Cauca \n» Giá :70k\n\n» 5. Xidach \n» Giá : 80k\n\n» 6. 3cay \n» Giá : 50k\n\n» 7.Luotdung \n» Giá: 70k"
    res.json({
        key: key
    })
}