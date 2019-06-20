const fileHandler = require('fs');
const q = require('q');
class GenericFileHandler {
    constructor(filename){
        var sugaredName=filename;
        this.filename=__dirname+'/../files/'+filename+'.txt'
    }
    get()
    {
        var defered=q.defer();
        fileHandler.readFile(this.filename,'utf8',function(err,data)
        {
            if(err)
            {   
                defered.reject(err);
            }
            defered.resolve(data)
        });
        return defered.promise;
    }
    add(data){
        var defered=q.defer();
        console.log('Adding to file ',this.filename);
        console.log(data)
        fileHandler.appendFile(this.filename,data,function(err,data)
        {
            if(err)
            {   
                defered.reject(err);
            }
            defered.resolve("Success")
        });
        return defered.promise;

    }
    delete(){
        var defered=q.defer();
        console.log('Adding to file ',this.filename);
        fileHandler.unlink(this.filename,function(err,data)
        {
            if(err)
            {   
                console.log()
                defered.reject(err);
            }
            defered.resolve("Success")
        });
        return defered.promise;
    }
}

module.exports=GenericFileHandler;
