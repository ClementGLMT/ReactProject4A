var MongoClient = require("mongodb").MongoClient;
var express = require('express'); 
var cors = require('cors');
var bodyParser = require("body-parser"); 
var isUserLog="false"


var data = [{"_id":"5dc895f3189a2d02bb38c780","age":33,"balance":1172.77,"eyeColor":"blue","name":"Church Hooper","gender":"male","continent":"South America","gradePointAverage":0,"educationCoefficient":5,"favColor":"green"},{"_id":"5dc895f38072adc3a9bb5919","age":30,"balance":14581.33,"eyeColor":"blue","name":"Frances Bauer","gender":"female","continent":"Asia","gradePointAverage":9,"educationCoefficient":29,"favColor":"blue"},{"_id":"5dc895f39baa7cbdaa38626e","age":35,"balance":7477.69,"eyeColor":"brown","name":"Tamara Cooley","gender":"female","continent":"North America","gradePointAverage":13,"educationCoefficient":23,"favColor":"purple"},{"_id":"5dc895f3ab265a6a8f272d99","age":31,"balance":2756.99,"eyeColor":"brown","name":"Sparks Reyes","gender":"male","continent":"Europe","gradePointAverage":3,"educationCoefficient":17,"favColor":"brown"},{"_id":"5dc895f30a8e08f235c2a124","age":40,"balance":2924.34,"eyeColor":"green","name":"Ernestine Carney","gender":"female","continent":"Oceania","gradePointAverage":15,"educationCoefficient":14,"favColor":"green"},{"_id":"5dc895f3508edefaf2f070a1","age":25,"balance":7177.72,"eyeColor":"blue","name":"Osborn Horton","gender":"male","continent":"Europe","gradePointAverage":4,"educationCoefficient":14,"favColor":"purple"},{"_id":"5dc895f38231b8a97faf11c0","age":35,"balance":6240.35,"eyeColor":"blue","name":"Alyson Nicholson","gender":"female","continent":"North America","gradePointAverage":8,"educationCoefficient":2,"favColor":"yellow"},{"_id":"5dc895f321d145e16d2cc506","age":23,"balance":9057.16,"eyeColor":"blue","name":"Decker Coffey","gender":"male","continent":"Oceania","gradePointAverage":5,"educationCoefficient":13,"favColor":"brown"},{"_id":"5dc895f31fe38711f8e69807","age":34,"balance":19357.33,"eyeColor":"blue","name":"Aurelia Lowery","gender":"female","continent":"Asia","gradePointAverage":11,"educationCoefficient":0,"favColor":"blue"},{"_id":"5dc895f3e8d7e1746f1ef37b","age":40,"balance":8067.15,"eyeColor":"brown","name":"Savage Camacho","gender":"male","continent":"Europe","gradePointAverage":9,"educationCoefficient":24,"favColor":"purple"},{"_id":"5dc895f3b7a6bb30d2eab82f","age":31,"balance":495.06,"eyeColor":"blue","name":"Clark Riggs","gender":"male","continent":"Europe","gradePointAverage":12,"educationCoefficient":14,"favColor":"green"},{"_id":"5dc895f32a6d0e556c12a3e7","age":38,"balance":15451.98,"eyeColor":"green","name":"Witt Sullivan","gender":"male","continent":"Oceania","gradePointAverage":8,"educationCoefficient":24,"favColor":"black"},{"_id":"5dc895f3c24c7341257bcdfb","age":30,"balance":5337.2,"eyeColor":"brown","name":"Eunice Morales","gender":"female","continent":"Africa","gradePointAverage":15,"educationCoefficient":28,"favColor":"purple"},{"_id":"5dc895f311ff11c596ccaee3","age":23,"balance":15787.56,"eyeColor":"blue","name":"Serena Mendez","gender":"female","continent":"North America","gradePointAverage":14,"educationCoefficient":8,"favColor":"yellow"},{"_id":"5dc895f36df040951c67a2f3","age":35,"balance":15044.64,"eyeColor":"green","name":"Cooke Villarreal","gender":"male","continent":"North America","gradePointAverage":11,"educationCoefficient":19,"favColor":"green"},{"_id":"5dc895f3a70cd76ebdbdde82","age":31,"balance":7544.05,"eyeColor":"brown","name":"Lindsey Baker","gender":"male","continent":"Oceania","gradePointAverage":19,"educationCoefficient":20,"favColor":"yellow"},{"_id":"5dc895f39682df2a808dbbab","age":40,"balance":19850.98,"eyeColor":"brown","name":"Carmella Fry","gender":"female","continent":"Africa","gradePointAverage":14,"educationCoefficient":27,"favColor":"red"},{"_id":"5dc895f34d877de39928fd45","age":36,"balance":10622.57,"eyeColor":"green","name":"Mary Prince","gender":"female","continent":"Oceania","gradePointAverage":8,"educationCoefficient":11,"favColor":"yellow"},{"_id":"5dc895f3f2a624a9949ab54c","age":36,"balance":6998.29,"eyeColor":"brown","name":"Erika Berger","gender":"female","continent":"Asia","gradePointAverage":3,"educationCoefficient":21,"favColor":"black"},{"_id":"5dc895f344b4c5531c092928","age":36,"balance":10862.17,"eyeColor":"green","name":"Blanchard Greer","gender":"male","continent":"North America","gradePointAverage":8,"educationCoefficient":16,"favColor":"blue"},{"_id":"5dc895f3e770a99035073106","age":33,"balance":16231.94,"eyeColor":"blue","name":"Richardson Roth","gender":"male","continent":"Asia","gradePointAverage":10,"educationCoefficient":28,"favColor":"red"},{"_id":"5dc895f32863829321a9986c","age":37,"balance":7784.38,"eyeColor":"green","name":"Mullins Rose","gender":"male","continent":"Africa","gradePointAverage":14,"educationCoefficient":15,"favColor":"black"},{"_id":"5dc895f3be4263f93f7e9101","age":35,"balance":2048.6,"eyeColor":"blue","name":"Nunez Curtis","gender":"male","continent":"Europe","gradePointAverage":1,"educationCoefficient":2,"favColor":"red"},{"_id":"5dc895f3b8820dc7fea79a2f","age":38,"balance":14940.63,"eyeColor":"blue","name":"Tonya Kim","gender":"female","continent":"North America","gradePointAverage":7,"educationCoefficient":10,"favColor":"purple"},{"_id":"5dc895f37276e0f3d2b0cb8a","age":37,"balance":1055.67,"eyeColor":"brown","name":"Holcomb Moran","gender":"male","continent":"South America","gradePointAverage":13,"educationCoefficient":9,"favColor":"green"},{"_id":"5dc895f3e4dac86271069b58","age":21,"balance":1289.87,"eyeColor":"green","name":"Janette Salazar","gender":"female","continent":"Oceania","gradePointAverage":2,"educationCoefficient":19,"favColor":"yellow"},{"_id":"5dc895f30e55d5258d5f2f00","age":21,"balance":4028.44,"eyeColor":"blue","name":"Arline Oliver","gender":"female","continent":"North America","gradePointAverage":2,"educationCoefficient":13,"favColor":"black"},{"_id":"5dc895f3c7c1d2f1eb75ce23","age":35,"balance":4083.49,"eyeColor":"green","name":"Matilda Robbins","gender":"female","continent":"North America","gradePointAverage":18,"educationCoefficient":8,"favColor":"green"},{"_id":"5dc895f3087cbdf4159112c6","age":34,"balance":1563.75,"eyeColor":"brown","name":"Iris Blanchard","gender":"female","continent":"Africa","gradePointAverage":17,"educationCoefficient":19,"favColor":"green"},{"_id":"5dc895f30f28bd41500ecd8d","age":30,"balance":6855.63,"eyeColor":"blue","name":"Cervantes Tucker","gender":"male","continent":"Oceania","gradePointAverage":11,"educationCoefficient":22,"favColor":"red"},{"_id":"5dc895f349db452d9a8075ea","age":28,"balance":8575.6,"eyeColor":"green","name":"Franks Peck","gender":"male","continent":"Asia","gradePointAverage":5,"educationCoefficient":30,"favColor":"brown"},{"_id":"5dc895f375f650a417829df8","age":24,"balance":7435.1,"eyeColor":"green","name":"Johnnie Mclaughlin","gender":"female","continent":"Asia","gradePointAverage":3,"educationCoefficient":3,"favColor":"brown"},{"_id":"5dc895f30c33f8aded40305d","age":26,"balance":13685.08,"eyeColor":"blue","name":"Ayers Briggs","gender":"male","continent":"Oceania","gradePointAverage":10,"educationCoefficient":13,"favColor":"green"},{"_id":"5dc895f3e1b038509dcbb2a7","age":21,"balance":15125.72,"eyeColor":"brown","name":"Desiree Garrison","gender":"female","continent":"North America","gradePointAverage":4,"educationCoefficient":7,"favColor":"red"},{"_id":"5dc895f33c1cae4e735ef4a4","age":23,"balance":3183.47,"eyeColor":"brown","name":"Elinor Stevens","gender":"female","continent":"Oceania","gradePointAverage":15,"educationCoefficient":30,"favColor":"yellow"},{"_id":"5dc895f37b48373fb99aad2f","age":39,"balance":17242.76,"eyeColor":"blue","name":"Kasey Whitfield","gender":"female","continent":"South America","gradePointAverage":8,"educationCoefficient":4,"favColor":"black"},{"_id":"5dc895f35e72011a9c1e182b","age":21,"balance":100.43,"eyeColor":"blue","name":"Winters Velasquez","gender":"male","continent":"Oceania","gradePointAverage":7,"educationCoefficient":21,"favColor":"black"},{"_id":"5dc895f3a95c1174f3d8ca9c","age":32,"balance":115.2,"eyeColor":"brown","name":"Rosalyn Galloway","gender":"female","continent":"Europe","gradePointAverage":1,"educationCoefficient":1,"favColor":"brown"},{"_id":"5dc895f3e0e2187ae0e11b17","age":35,"balance":6527.22,"eyeColor":"green","name":"Orr Murphy","gender":"male","continent":"Asia","gradePointAverage":20,"educationCoefficient":22,"favColor":"brown"},{"_id":"5dc895f30f439768f289f3cf","age":24,"balance":18178.93,"eyeColor":"blue","name":"Janet Stone","gender":"female","continent":"South America","gradePointAverage":6,"educationCoefficient":6,"favColor":"green"},{"_id":"5dc895f36801e4a5b5146e3f","age":22,"balance":11304.57,"eyeColor":"blue","name":"Rios Robles","gender":"male","continent":"North America","gradePointAverage":9,"educationCoefficient":28,"favColor":"blue"},{"_id":"5dc895f3d4ce99a839ddc4e4","age":34,"balance":13212.96,"eyeColor":"green","name":"Mathis Alford","gender":"male","continent":"Europe","gradePointAverage":17,"educationCoefficient":21,"favColor":"green"},{"_id":"5dc895f3f69f54d7dee67e7e","age":29,"balance":18861.49,"eyeColor":"green","name":"Reva Day","gender":"female","continent":"South America","gradePointAverage":9,"educationCoefficient":19,"favColor":"red"},{"_id":"5dc895f363b93d4069d5b091","age":32,"balance":17985.13,"eyeColor":"blue","name":"Lawrence Goodwin","gender":"male","continent":"Europe","gradePointAverage":6,"educationCoefficient":7,"favColor":"blue"},{"_id":"5dc895f39f88bc3d01f429c0","age":26,"balance":2854.75,"eyeColor":"blue","name":"Helena Keith","gender":"female","continent":"South America","gradePointAverage":7,"educationCoefficient":29,"favColor":"red"},{"_id":"5dc895f39fb964ca103292fb","age":21,"balance":1886.59,"eyeColor":"blue","name":"Imelda Velazquez","gender":"female","continent":"North America","gradePointAverage":12,"educationCoefficient":6,"favColor":"brown"},{"_id":"5dc895f31469d6806723292a","age":34,"balance":16236.45,"eyeColor":"green","name":"Beth Ross","gender":"female","continent":"Asia","gradePointAverage":0,"educationCoefficient":0,"favColor":"yellow"},{"_id":"5dc895f3353caae2f3de163d","age":36,"balance":1300.75,"eyeColor":"green","name":"Lorraine Gutierrez","gender":"female","continent":"North America","gradePointAverage":3,"educationCoefficient":4,"favColor":"blue"},{"_id":"5dc895f3481ac8e2dfcbb6a6","age":22,"balance":7256.13,"eyeColor":"blue","name":"Parsons Miller","gender":"male","continent":"South America","gradePointAverage":5,"educationCoefficient":12,"favColor":"blue"},{"_id":"5dc895f31ece775ea2c4db4b","age":25,"balance":7701.05,"eyeColor":"blue","name":"Patrice Ball","gender":"female","continent":"Oceania","gradePointAverage":16,"educationCoefficient":10,"favColor":"yellow"},{"_id":"5dc895f33218aea90d7d3940","age":37,"balance":15382.69,"eyeColor":"brown","name":"Bridgette Peters","gender":"female","continent":"Oceania","gradePointAverage":19,"educationCoefficient":22,"favColor":"purple"},{"_id":"5dc895f377086ceb1da4492a","age":31,"balance":19607.69,"eyeColor":"brown","name":"Torres Shannon","gender":"male","continent":"North America","gradePointAverage":9,"educationCoefficient":19,"favColor":"brown"},{"_id":"5dc895f383c0418eccdf053e","age":37,"balance":10949.68,"eyeColor":"brown","name":"Tabatha Lambert","gender":"female","continent":"South America","gradePointAverage":8,"educationCoefficient":10,"favColor":"black"},{"_id":"5dc895f3fe439c90089150ab","age":32,"balance":5257.46,"eyeColor":"green","name":"Flowers Burns","gender":"male","continent":"Africa","gradePointAverage":12,"educationCoefficient":12,"favColor":"purple"},{"_id":"5dc895f359a7521c3434e1f7","age":28,"balance":7711.73,"eyeColor":"brown","name":"Cotton Knox","gender":"male","continent":"Africa","gradePointAverage":6,"educationCoefficient":11,"favColor":"red"},{"_id":"5dc895f398efef0c03ca221a","age":34,"balance":7160.31,"eyeColor":"blue","name":"Duke Blackwell","gender":"male","continent":"North America","gradePointAverage":5,"educationCoefficient":21,"favColor":"brown"},{"_id":"5dc895f32b5724bb05db27b2","age":25,"balance":-571.43,"eyeColor":"green","name":"Pena Dawson","gender":"male","continent":"South America","gradePointAverage":2,"educationCoefficient":2,"favColor":"purple"},{"_id":"5dc895f38c8de6bea6ef2e70","age":37,"balance":1074.17,"eyeColor":"green","name":"Helga Watkins","gender":"female","continent":"Oceania","gradePointAverage":2,"educationCoefficient":27,"favColor":"blue"},{"_id":"5dc895f380f1a3bc3d350e92","age":24,"balance":14780.56,"eyeColor":"brown","name":"Selena Moses","gender":"female","continent":"Oceania","gradePointAverage":8,"educationCoefficient":22,"favColor":"red"},{"_id":"5dc895f383cbbeaa5f19b015","age":29,"balance":19096.8,"eyeColor":"brown","name":"Preston Sloan","gender":"male","continent":"North America","gradePointAverage":14,"educationCoefficient":17,"favColor":"purple"},{"_id":"5dc895f3483f5f67228b58aa","age":33,"balance":-36.91,"eyeColor":"blue","name":"Hillary Morin","gender":"female","continent":"Africa","gradePointAverage":15,"educationCoefficient":7,"favColor":"black"},{"_id":"5dc895f387013e5b3e6908b7","age":31,"balance":11166.37,"eyeColor":"blue","name":"Eve Carter","gender":"female","continent":"South America","gradePointAverage":0,"educationCoefficient":29,"favColor":"black"},{"_id":"5dc895f3a6bfe3888d99a6e9","age":30,"balance":3653.29,"eyeColor":"blue","name":"Simmons Glover","gender":"male","continent":"Oceania","gradePointAverage":14,"educationCoefficient":4,"favColor":"green"},{"_id":"5dc895f3367e917af544c3e9","age":40,"balance":11177.7,"eyeColor":"green","name":"Jo Mccarty","gender":"female","continent":"South America","gradePointAverage":15,"educationCoefficient":13,"favColor":"black"},{"_id":"5dc895f31004c3f7cdcf0d06","age":34,"balance":441.14,"eyeColor":"blue","name":"Donovan Gonzales","gender":"male","continent":"Asia","gradePointAverage":0,"educationCoefficient":7,"favColor":"brown"},{"_id":"5dc895f3adb7280e79b62b59","age":36,"balance":12742.4,"eyeColor":"brown","name":"Hoover Young","gender":"male","continent":"South America","gradePointAverage":12,"educationCoefficient":14,"favColor":"blue"},{"_id":"5dc895f37707a91ffff4d507","age":24,"balance":19318.13,"eyeColor":"green","name":"Mallory Park","gender":"female","continent":"North America","gradePointAverage":11,"educationCoefficient":27,"favColor":"brown"},{"_id":"5dc895f34abe10d8901e77cb","age":40,"balance":4775.46,"eyeColor":"blue","name":"Kitty Black","gender":"female","continent":"Asia","gradePointAverage":19,"educationCoefficient":17,"favColor":"red"},{"_id":"5dc895f3f2c796adc14df826","age":38,"balance":6181.62,"eyeColor":"blue","name":"Jillian Small","gender":"female","continent":"Europe","gradePointAverage":0,"educationCoefficient":6,"favColor":"red"},{"_id":"5dc895f3a04a9314118d8959","age":30,"balance":1003.6,"eyeColor":"blue","name":"Workman Nolan","gender":"male","continent":"Asia","gradePointAverage":3,"educationCoefficient":5,"favColor":"purple"},{"_id":"5dc895f311a253a51590d834","age":40,"balance":4884.89,"eyeColor":"green","name":"Harrington Cunningham","gender":"male","continent":"North America","gradePointAverage":9,"educationCoefficient":12,"favColor":"red"},{"_id":"5dc895f39cf0685a6c4b214a","age":20,"balance":-400.16,"eyeColor":"blue","name":"Tanisha Barber","gender":"female","continent":"Oceania","gradePointAverage":5,"educationCoefficient":20,"favColor":"black"},{"_id":"5dc895f39d8b25e32b6119a5","age":26,"balance":3378.66,"eyeColor":"blue","name":"Connie Cummings","gender":"female","continent":"Oceania","gradePointAverage":10,"educationCoefficient":29,"favColor":"green"},{"_id":"5dc895f3e53f6430be533e63","age":38,"balance":141.32,"eyeColor":"blue","name":"Aisha Francis","gender":"female","continent":"Europe","gradePointAverage":10,"educationCoefficient":17,"favColor":"red"},{"_id":"5dc895f39b6f4e439db89b8c","age":32,"balance":17609.08,"eyeColor":"brown","name":"Jenkins Delacruz","gender":"male","continent":"Europe","gradePointAverage":10,"educationCoefficient":11,"favColor":"yellow"},{"_id":"5dc895f3a85c9b12edee0d82","age":28,"balance":10510.51,"eyeColor":"blue","name":"Barnett Keller","gender":"male","continent":"Asia","gradePointAverage":7,"educationCoefficient":15,"favColor":"blue"},{"_id":"5dc895f357d37819a07157f9","age":22,"balance":12233.13,"eyeColor":"blue","name":"Clements Burgess","gender":"male","continent":"Africa","gradePointAverage":17,"educationCoefficient":4,"favColor":"brown"},{"_id":"5dc895f3c53a988f8f90c7c9","age":33,"balance":3268.13,"eyeColor":"blue","name":"Cortez Mann","gender":"male","continent":"Asia","gradePointAverage":6,"educationCoefficient":20,"favColor":"black"},{"_id":"5dc895f36d19a5336b548f76","age":25,"balance":15499.71,"eyeColor":"green","name":"Annie Buck","gender":"female","continent":"Oceania","gradePointAverage":15,"educationCoefficient":18,"favColor":"black"},{"_id":"5dc895f3f614c8d9d1139c42","age":35,"balance":924.85,"eyeColor":"brown","name":"Vazquez Pugh","gender":"male","continent":"South America","gradePointAverage":3,"educationCoefficient":25,"favColor":"purple"},{"_id":"5dc895f3ba36c0e55cd4c970","age":35,"balance":16718.32,"eyeColor":"brown","name":"Schwartz Frazier","gender":"male","continent":"South America","gradePointAverage":11,"educationCoefficient":12,"favColor":"red"},{"_id":"5dc895f31e0baa99edac67e2","age":32,"balance":11343.84,"eyeColor":"green","name":"Kinney Fleming","gender":"male","continent":"Oceania","gradePointAverage":16,"educationCoefficient":1,"favColor":"blue"},{"_id":"5dc895f34699fc25a70b0ab3","age":37,"balance":6005.01,"eyeColor":"blue","name":"Bass Myers","gender":"male","continent":"Africa","gradePointAverage":17,"educationCoefficient":21,"favColor":"purple"},{"_id":"5dc895f30005e07f13a68a32","age":40,"balance":14614.41,"eyeColor":"brown","name":"Mariana Hicks","gender":"female","continent":"Oceania","gradePointAverage":5,"educationCoefficient":18,"favColor":"yellow"},{"_id":"5dc895f35800332397a70f40","age":37,"balance":14233.78,"eyeColor":"green","name":"Flossie Harrington","gender":"female","continent":"Africa","gradePointAverage":18,"educationCoefficient":14,"favColor":"purple"},{"_id":"5dc895f30fe4e19b16272c5e","age":20,"balance":13182.73,"eyeColor":"blue","name":"Silvia Brennan","gender":"female","continent":"Europe","gradePointAverage":2,"educationCoefficient":24,"favColor":"green"},{"_id":"5dc895f3e1ab4fa4f1c5537b","age":21,"balance":7341.35,"eyeColor":"blue","name":"Sondra Petersen","gender":"female","continent":"South America","gradePointAverage":5,"educationCoefficient":6,"favColor":"purple"},{"_id":"5dc895f31212fc6d684f6a30","age":28,"balance":10762.81,"eyeColor":"blue","name":"Burt Bailey","gender":"male","continent":"Africa","gradePointAverage":13,"educationCoefficient":9,"favColor":"black"},{"_id":"5dc895f3a588faa337c306c4","age":38,"balance":1028.47,"eyeColor":"brown","name":"Rivas Griffin","gender":"male","continent":"Asia","gradePointAverage":2,"educationCoefficient":19,"favColor":"black"},{"_id":"5dc895f3789adfea1c924ef5","age":40,"balance":7637.86,"eyeColor":"brown","name":"Rodgers Lester","gender":"male","continent":"South America","gradePointAverage":17,"educationCoefficient":16,"favColor":"green"}]

/*
My entity is : 
[
  {
    _id: '{{objectId()}}',
    age: '{{integer(20, 40)}}',
    balance: '{{floating(-1000, 20000, 2)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    continent:'{{random("Europe", "North America", "South America", "Asia", "Africa", "Oceania")}}',
    gradePointAverage:'{{integer(0,20)}}',
    educationCoefficient:'{{integer(0,30)}}',
    favColor:'{{random("blue", "brown", "green", "yellow", "black", "red", "purple")}}'
     }
]

Generated from https://www.json-generator.com/

*/

var hostname = 'localhost'; 
var port = 2999; 
var access;

function getAllDatabase(db){

    var collection = db.collection('students');

    collection.find().toArray(function(err, docs){
        if(err){
            throw err;
        }
        return docs;
    })

}

 MongoClient.connect("mongodb://localhost:27017/MONGOMONGO", function(err, client) {
    if(err){
        console.log(err);
    }
    connectMongo(client).then( () => {
                            var datb = client.db('MONGOMONGO');
                            const collection2 = datb.collection('students');
                            collection2.insertMany(data, (err, result) => {
                                if(err){
                                    throw err;
                                }
                                    connectAPI(data);
                            });

                                
                            }).catch((err) => {
                                    console.log(err);
                               })
    });

 function connectMongo(client) {
return new Promise(function(resolve, reject){
        if (client == undefined){
            reject(error);
            throw(error);
        } 
        resolve(client);
    })
    .catch((err) => {
        console.log(err);
    });
} 

function connectAPI(docs) {
    var access="false";
    //TODO 
    var goodHash = "04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb"
    var app = express(); 
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    var myRouter = express.Router(); 
    myRouter.route('/connexion')
        .get(function(req, res){
            res.end('{ "access": "'+access+'"}')
            access = "false"
        })
        .post(function(req,res){
            access = "false"
            if(req.body.username == "user" && req.body.password == goodHash){
                access="true";
                isUserLog = "true";

            }
        })

    myRouter.route('/bonhoms')
        .get(function(req,res){ 
            if(isUserLog === "true")
                res.end(JSON.stringify(docs)); //LA
        })

    myRouter.route('/')
    .all(function(req,res){ 
          res.json({message : "Bienvenue sur notre API ", methode : req.method});
    });    
    app.use(myRouter);  
    app.listen(port, hostname, function(){
    });
}

