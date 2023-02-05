const fs = require('fs');


async function create(filename, cotent) {
    try{
    fs.writeFile(filename, cotent,()=>{console.log('done')})
    }
    catch(e){
        console.log('error:',e );
    }

}

// create('./root2/root1/temp3.txt','hello gever!!!')



async function read(filename) {
    try{
        const file = fs.readFileSync(filename,{encoding:'utf8'})
        console.log(file);
        return file;
    }
    catch(e){
        console.log('error:',e );
    }

}


// read('./root2/root1/root/temp3.txt')


async function del(filename) {
    fs.unlink(filename,function (err){
        if(err) throw err;
        console.log('file deleted!');
    })
    }

    // del('./root2/root1/root/temp3.txt')



    async function exists(filename) {
        try{
        console.log(fs.existsSync(filename))
        }
        catch(e){
            console.log('error:',e );
        }   
    }


    // exists('root2')



    async function rename(filename, newName) {       //יכול גם להעביר
        try{
        console.log(fs.renameSync(filename, newName))
        }
        catch(e){
            console.log('error:',e );
        }   
    }

    // rename('temp3.txt', './root2/root1/root/temp1.txt')


    async function update(filename, txt) {       
        try{
        console.log(fs.appendFileSync(filename, txt))
        }
        catch(e){
            console.log('error:',e );
        }   
    }

    // update('./root2/root1/root/temp1.txt', '\ngood morning')


    module.exports = {create, read, del, exists, rename, update,}
