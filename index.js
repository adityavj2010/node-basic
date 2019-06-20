const express = require("express");
var serviceHandler=require('./lib/ServiceHandler');
const app = express();

app.use(express.json())
app.use(express.urlencoded());

app.get('/:name', (req, res) => { 
    var serviceObj=new serviceHandler();
    serviceObj.get(req.params.name).then(function(data){
        res.send({'data':data})
    },
    function(err){
        res.status(404).send({'error':err})
    });
});

app.post('/:name', (req, res) => { 
    var serviceObj=new serviceHandler();
    console.log('FILE NAME',req.params.name);
    console.log('Data to append',req.body)
    serviceObj.add(req.params.name,req.body.data).then(function(data){
        res.send({'data':data})
    },
    function(err){
        res.status(404).send({'error':err})
    });
});

app.delete('/:name', (req, res) => { 
    var serviceObj=new serviceHandler();
    console.log('FILE NAME',req.params.name)
    serviceObj.delete(req.params.name).then(function(data){
        res.send({'status':'Success'})
    },
    function(err){
        res.status(404).send({'error':err})
    });
});

app.listen(3000, () => {
    console.log('Server Started at 3000');
})