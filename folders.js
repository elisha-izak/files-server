const fs = require('fs');


async function create(foldername) {
    try{
    fs.mkdirSync(foldername)
    }
    catch(e){
        console.log('error:',e );
    }

}

// , cotent,()=>{console.log('done')}

// create('root1/root')



async function read(foldername) {
    try{
        const folders = fs.readdirSync(foldername)
        console.log(folders)
        const arrFolders = folders.map(fileName => ({name: fileName, isfolder: fs.statSync(`${foldername}/${fileName}`).isDirectory()}))
        console.log(arrFolders);
        return arrFolders
    }
    catch(e){
        console.log('error:',e );
    }
}


// read('./root2/root1')







async function del(foldername) {
    try{
    fs.rmdirSync(foldername)
    }
    catch(e){
    console.log('error:',e );
    }
}


// del('root')




    async function exists(foldername) {
        try{
        console.log(fs.existsSync(foldername))
        }
        catch(e){
            console.log('error:',e );
        }   
    }


    // exists('root')




    async function rename(foldername, newName) {       //יכול גם להעביר
        try{
        console.log(fs.renameSync(foldername,newName))
        }
        catch(e){
            console.log('error:',e );
        }   
    }

    // rename('root1', '/root2')

    module.exports = {create, read, del, exists, rename}

