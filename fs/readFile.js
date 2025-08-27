import fs from 'fs';

fs.readFile("./fs.files/writefile", (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
