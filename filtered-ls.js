const fs = require('fs');
fs.readdir(process.argv[2], function callback(err, data) {
    if (err != null) {
        console.log(err);
    }
    else {
        data.forEach(element => {
            if (element.indexOf(process.argv[3]) > 0) {
                console.log(element);
            }
        });
    }
});