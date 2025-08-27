import fs from 'fs'

function fun (data){
    fs.appendFile("./fs.files/writefile.txt","\n appened data willcome soooon",(err)=>{
    if(err){
        console.error(err);
    return;
    }
console.log("<COMPLETED>")
})
}
fun()