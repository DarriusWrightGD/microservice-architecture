var hydraExpress = require('hydra-express');
var config = require('./config.json');
var hydra = hydraExpress.getHydra();

var onRegisterRoutes = () => {
    var express = hydraExpress.getExpress();
    var api = express.Router();

    api.get('/', (req,res)=>{
        res.send({
            msg: `Hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
        });
    });

    hydraExpress.registerRoutes({
        '': api
    });
}

hydraExpress.init(config, onRegisterRoutes);

// var express = require('express');
// var app = express();

// app.get('/', (req, res)=>{
//     res.send('Hello World!');
// });

// app.listen(3000, ()=> {
//     console.log('Example app on port 3000!')
// })