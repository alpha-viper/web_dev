const fs=require("fs");
let inputArr=process.argv.slice(2);

let filesArr=[];

for(let i=0;i<inputArr.length;i++)
{
    filesArr.push(inputArr[i]);
}

for(let i=0;i<filesArr.length;i++)
{
    let doesExist=fs.existsSync(filesArr[i]);

    if(!doesExist)
    {
        console.log("File does not exist");
        return;
    }
}

let content="";
for(let i=0;i<filesArr.length;i++)
{
    let fileContent=fs.readSync(filesArr[i]);
    content += fileContent+"\n"
}
console.log(content);
