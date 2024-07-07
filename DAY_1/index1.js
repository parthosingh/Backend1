const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read' :
    fs.readFile(file, "utf-8", (err, data)=> {
        if(err){
            console.log("err", err);
        } else{
            console.log(data)
        }
    });
    break;

    case 'delete':
        fs.unlink(file,(err)=> {
            if(err){
                console.log("err", err);
            } else{
                console.log("successful")
            }
        });
        break;  

    case 'create' :
        fs.writeFile(file,content, (err)=>{
            if (err) {
                console.error(`Error creating file: ${err.message}`);
            } else {
                console.log(`File '${file}' created`);
            }
        })
}
