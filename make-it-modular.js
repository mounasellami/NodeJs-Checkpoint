const mymodule = require('./mymodule.js')
mymodule(process.argv[2],process.argv[3],function callback(err, data) {
    if (err != null) {
        console.log(err);
    }
    else {
        data.forEach(element => {
                console.log(element);
        });
    }
})