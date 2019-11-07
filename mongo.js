var MongoClient = require("mongodb").MongoClient;
var express = require('express'); 
var bodyParser = require("body-parser"); 

 
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 


 MongoClient.connect("mongodb://localhost:27017/MONGOMONGO", function(err, client) {
    if(err){
        console.log(err);
    }
    connectMongo(client).then( () => {
                                var collection = client.db('MONGOMONGO').collection('bonhom');
                                collection.find().toArray(function(err,docs){
                                    console.log("[findDocuments] collection.find() : "+client);
                                    if (err){
                                        throw err;
                                    } 
                                    connectAPI(docs);
                                    console.log("[findDocuments] docs : "+docs);
                                })
                            }).catch((err) => {
                                    console.log(err);
                               })
    });

 function connectMongo(client) {
return new Promise(function(resolve, reject){
    console.log("[connect] Trying to reach database...");
        if (client == undefined){
            console.log("[connectMongo] client undefined");
            reject(error);
            throw(error);
        } 
        console.log("[connectPromise] Connected to database, client : "+client);
        resolve(client);
    })
    .catch((err) => {
        console.log(err);
    });
} 

function connectAPI(docs) {
    console.log("[connectAPI] docs = "+JSON.stringify(docs));
    //TODO 
    var app = express(); 
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    var myRouter = express.Router(); 
    myRouter.route('/bonhoms')
        .get(function(req,res){ 
            console.log("[connectAPI] Sending docs to API, docs = "+JSON.stringify(docs));
            res.end(JSON.stringify(docs));
        })
    //POST CEST PAS CA il faut utiliser res.send()
    /*.post(function(req,res){
        res.json({message : "Ajoute une nouvelle piscine à la liste", 
        _id : req.body._id, 
        name : req.body.name, 
        age : req.body.age, 
        eyeColor : req.body.eyeColor,
        gender : req.body.gender, 
        company : req.body.company, 
        email : req.body.email, 
        phone : req.body.phone, 
        address : req.body.address, 
        methode : req.method});
        res.send(res.req.body);
        persons.push(res.req.body);
        console.log(res.req.body);
    })*/
    myRouter.route('/')
    .all(function(req,res){ 
          res.json({message : "Bienvenue sur notre API ", methode : req.method});
    });    
    app.use(myRouter);  
    /*var server = */app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
    });
}

