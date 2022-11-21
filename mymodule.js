const fs = require('fs');
module.exports = function (dirPath,extFilter,myFunction) {
    fs.readdir(dirPath, function callback(err, data) {
        if (err != null) {
            if (err) { myFunction(err) }
        }
        else {
            let result = [];
            data.forEach(element => {
                if (element.indexOf(extFilter) > 0) {
                    result.push(element);
                }
            });
            myFunction(null, result)
        }
    });
}