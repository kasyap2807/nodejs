
let fs = require('fs');
let path = require('path');
let dir = process.argv[2];
let ext = '.'+process.argv[3];
fs.readdir(dir,function(err,files){
    if(err){console.log('error');}
    files.forEach(function(file){
        if(path.extname(file)==ext){
            console.log(file);
        }
    });
});
