const fs = require('fs');
fs.readFile(process.argv[2],'utf8',function callback (err, data) { 
    if(err != null){
        console.log(err);
    }
    else {
        const linesNumber = data.split("\n").length-1;
        console.log(linesNumber);
    }
});