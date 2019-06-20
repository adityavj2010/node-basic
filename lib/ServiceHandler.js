var genericFileHandler=require('./services/GenericFileHandler');

class ServiceHandler {
    async get(fname) {
        var fileHandler=new genericFileHandler(fname);
        return fileHandler.get();
    }
    async add(fname,data) {
        var fileHandler=new genericFileHandler(fname);
        return fileHandler.add(data);
    }
    async delete(fname) {
        var fileHandler=new genericFileHandler(fname);
        return fileHandler.delete();
    }

};
module.exports = ServiceHandler;