import React from 'react'
import Chart from 'react-google-charts'
import MediaQuery from 'react-responsive';

class App2 extends React.Component {

pieParser(data){
    var pie = new Array(7);
    var bluesum=0,  brownsum=0, blacksum=0, greensum=0, redsum=0, yellowsum = 0;
    var i;
   for(i=0; i<7; i++){
       pie[i] = new Array(2);
   }
    pie[data.length] = new Array(2);
    for(i=0; i<data.length; i++){
    pie[i] = new Array(2);
        console.log("testing "+data[i].name)

        if(data[i].favColor === "blue"){
            bluesum++;
        }
        if(data[i].favColor === "brown"){
           brownsum++;
       }
       if(data[i].favColor === "black"){
           blacksum++;
       }
       if(data[i].favColor === "green"){
           greensum++;
       }
       if(data[i].favColor === "red"){
           redsum++;
       }
       if(data[i].favColor === "yellow"){
           yellowsum++;
       }
    }
    console.log("blue"+bluesum+"red"+redsum+"brown"+brownsum+"black"+blacksum+"green"+greensum+"yellow"+yellowsum)
     pie[0][0] = "Color"
     pie[0][1] = "Number of people which has this color as favorite";
     
     pie[1][0] = "brown"
     pie[1][1] = brownsum;


     pie[2][0] = "black"
     pie[2][1] = blacksum;

     pie[3][0] = "green"
     pie[3][1] = greensum;

     pie[4][0] = "red"
     pie[4][1] = redsum;

     pie[5][0] = "yellow"
     pie[5][1] = yellowsum;

     pie[6][0] = "blue";
     pie[6][1] = bluesum;

     return pie;


}

scatterParser(data){
    var scat= new Array(data.length +1);
    scat[0] = ["Grade Point Average","Education Coefficient"];
    
    for(var i=1; i<data.length +1; i ++){
        scat[i] = new Array(2);
        scat[i][0]= data[i-1].gradePointAverage;
        scat[i][1] = data[i-1].educationCoefficient;
    }
    console.log(scat.toString());
    return scat;
}

columnParser(data){
    var col = new Array(4);
    var bluesum=0,  brownsum=0, greensum=0;
    var i;
    
    for(i=0; i<4; i++){
        col[i] = new Array(4)
    }

    for(i=0; i<data.length; i++){
        //col[i] = new Array(2);
        console.log("[col ]testing "+data[i].name)

        if(data[i].eyeColor === "blue"){
            bluesum++;
        }
        if(data[i].eyeColor === "brown"){
           brownsum++;
       }
       if(data[i].eyeColor === "green"){
           greensum++;
       }
    }
    console.log("blue"+bluesum+"brown"+brownsum+"green"+greensum)
     col[0]=    [
        'Element',
        'Density',
        { role: 'style' },
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'string',
          calc: 'stringify',
        },
      ];
     
     col[1] = ["brown", brownsum, '#663300', null];
     col[2] = ["green", greensum, 'green', null];
     col[3] = ["blue", bluesum, 'blue', null];


     return col;
}

bubbleParser(data){
var bub = new Array(7);
var i;
var nbmale=0,nbfemale=0;
bub[0] = new Array(3);
bub[0] = ['Continent', 'Male', 'Female']
for(i=1; i<bub.length; i++){
    bub[i] = new Array(3);
}

bub[1]= ["Europe",0,0];
bub[2]= ["North America",0,0];
bub[3]= ["South America",0,0];
bub[4]= ["Asia",0,0];
bub[5]= ["Africa",0,0];
bub[6]= ["Oceania",0,0];

for(i=0; i<data.length; i++){
    console.log("Treating "+data[i].name+"data.length = "+data.length)

    switch (data[i].continent){

        case "Europe":     
            if(data[i].gender === "male"){
                bub[1][1] += data[i].balance
                nbmale++;
            }
            else {
                bub[1][2] += data[i].balance;
                nbfemale++;
            }
            break;

        case "North America":
                if(data[i].gender === "male"){
                    bub[2][1] += data[i].balance
                    nbmale++;
                }
                else {
                    bub[2][2] += data[i].balance;
                    nbfemale++;
                }
            break;

        case "South America":
                if(data[i].gender === "male"){
                    bub[3][1] += data[i].balance
                    nbmale++;
                }
                else {
                    bub[3][2] += data[i].balance;
                    nbfemale++;
                }
             break;

        case "Asia":
                if(data[i].gender === "male"){
                    bub[4][1] += data[i].balance
                    nbmale++;
                }
                else {
                    bub[4][2] += data[i].balance;
                    nbfemale++;
                }
            break;

        case "Africa":
                if(data[i].gender === "male"){
                    bub[5][1] += data[i].balance
                    nbmale++;
                }
                else {
                    bub[5][2] += data[i].balance;
                    nbfemale++;
                }
            break;
        
        case "Oceania":
                if(data[i].gender === "male"){
                    bub[6][1] += data[i].balance
                    nbmale++;
                }
                else {
                    bub[6][2] += data[i].balance;
                    nbfemale++;
                }
            break;
        default:
            break;
    }



}
for(i=1; i<bub.length; i++){
    console.log("Men sum : "+bub[i][1]+" Women sum : "+bub[i][2]+" for "+bub[i][0])
    bub[i][1] = bub[i][1]/nbmale;
    bub[i][2] = bub[i][2]/nbfemale;
}


console.log(bub.toString())
console.log(nbmale+" males and "+nbfemale)


return bub;
}



render(){

var data = [{"_id":"5dc84723f63ab7ba7c24d1a7","age":31,"balance":1557.04,"eyeColor":"brown","name":"Crystal Boyer","gender":"female","continent":"South America","gradePointAverage":17,"educationCoefficient":0,"favColor":"green"},{"_id":"5dc847236953c1be5623b009","age":22,"balance":2451.35,"eyeColor":"green","name":"Marks Zamora","gender":"male","continent":"Europe","gradePointAverage":18,"educationCoefficient":10,"favColor":"red"},{"_id":"5dc8472335e7b7a86f3a0858","age":38,"balance":7768.12,"eyeColor":"green","name":"Roslyn Shaw","gender":"female","continent":"Africa","gradePointAverage":4,"educationCoefficient":23,"favColor":"red"},{"_id":"5dc847233fd09d719187b174","age":26,"balance":8550.82,"eyeColor":"brown","name":"Mccoy Tate","gender":"male","continent":"South America","gradePointAverage":20,"educationCoefficient":11,"favColor":"yellow"},{"_id":"5dc84723b034a2a119af5ed0","age":22,"balance":875.16,"eyeColor":"green","name":"Davidson Chavez","gender":"male","continent":"Africa","gradePointAverage":1,"educationCoefficient":24,"favColor":"yellow"},{"_id":"5dc847234b7053450bf4ca35","age":22,"balance":376.1,"eyeColor":"blue","name":"Elsie Cortez","gender":"female","continent":"South America","gradePointAverage":10,"educationCoefficient":29,"favColor":"red"},{"_id":"5dc847233ef01b0986b0f4e6","age":21,"balance":13731.18,"eyeColor":"green","name":"Hatfield Mooney","gender":"male","continent":"Europe","gradePointAverage":20,"educationCoefficient":23,"favColor":"yellow"},{"_id":"5dc84723232635a8c4c23f6b","age":31,"balance":6249.12,"eyeColor":"brown","name":"Barrett Hall","gender":"male","continent":"Oceania","gradePointAverage":12,"educationCoefficient":21,"favColor":"blue"},{"_id":"5dc847232778f4e9cde35a92","age":33,"balance":16151.25,"eyeColor":"blue","name":"Boyd Hensley","gender":"male","continent":"North America","gradePointAverage":2,"educationCoefficient":5,"favColor":"blue"},{"_id":"5dc84723d94d0b7f08372cb2","age":25,"balance":16852.48,"eyeColor":"blue","name":"Lane Riggs","gender":"male","continent":"Asia","gradePointAverage":4,"educationCoefficient":12,"favColor":"yellow"},{"_id":"5dc847238d9f8d97951a3965","age":40,"balance":4200,"eyeColor":"blue","name":"Noreen Larson","gender":"female","continent":"Africa","gradePointAverage":20,"educationCoefficient":24,"favColor":"yellow"},{"_id":"5dc8472320a9138495cca334","age":26,"balance":5673.77,"eyeColor":"brown","name":"Kelly Lynch","gender":"male","continent":"South America","gradePointAverage":19,"educationCoefficient":29,"favColor":"yellow"},{"_id":"5dc84723ad0ff7d44abbd75b","age":26,"balance":19375.46,"eyeColor":"green","name":"Lawanda Kirk","gender":"female","continent":"North America","gradePointAverage":3,"educationCoefficient":15,"favColor":"yellow"},{"_id":"5dc84723a918c4653fa3b660","age":30,"balance":14919.86,"eyeColor":"blue","name":"Shari Turner","gender":"female","continent":"Europe","gradePointAverage":1,"educationCoefficient":5,"favColor":"yellow"},{"_id":"5dc847235f1cd029b68132a8","age":21,"balance":12153.67,"eyeColor":"blue","name":"Deleon Carpenter","gender":"male","continent":"Europe","gradePointAverage":3,"educationCoefficient":15,"favColor":"purple"},{"_id":"5dc847238e74fabad9421adf","age":27,"balance":12663.73,"eyeColor":"green","name":"Charlotte Swanson","gender":"female","continent":"Asia","gradePointAverage":13,"educationCoefficient":4,"favColor":"yellow"},{"_id":"5dc84723ba65e439f57e45d3","age":32,"balance":19064.11,"eyeColor":"green","name":"Susanne Mckinney","gender":"female","continent":"Asia","gradePointAverage":8,"educationCoefficient":2,"favColor":"blue"},{"_id":"5dc84723bf6c686d2b302192","age":20,"balance":8437.46,"eyeColor":"green","name":"Perry Boyd","gender":"male","continent":"Asia","gradePointAverage":20,"educationCoefficient":14,"favColor":"green"},{"_id":"5dc847236a0c1efec0a3c9c5","age":23,"balance":15389.71,"eyeColor":"green","name":"Burns Porter","gender":"male","continent":"Oceania","gradePointAverage":19,"educationCoefficient":30,"favColor":"yellow"},{"_id":"5dc84723b00e86020b7a2358","age":32,"balance":2965.86,"eyeColor":"brown","name":"Johnson Aguirre","gender":"male","continent":"North America","gradePointAverage":11,"educationCoefficient":12,"favColor":"green"},{"_id":"5dc84723cfc612d90a1e2518","age":22,"balance":6769.96,"eyeColor":"green","name":"Kinney Paul","gender":"male","continent":"Asia","gradePointAverage":7,"educationCoefficient":26,"favColor":"yellow"},{"_id":"5dc847231d6260dca7913bfa","age":26,"balance":7406.23,"eyeColor":"green","name":"Angela Shepherd","gender":"female","continent":"Asia","gradePointAverage":19,"educationCoefficient":8,"favColor":"red"},{"_id":"5dc847235d9f0b07405edb7d","age":40,"balance":12180.21,"eyeColor":"green","name":"Holder Koch","gender":"male","continent":"Asia","gradePointAverage":0,"educationCoefficient":15,"favColor":"brown"},{"_id":"5dc847237bd36df4afd672f4","age":36,"balance":4469.97,"eyeColor":"brown","name":"May Conner","gender":"female","continent":"Asia","gradePointAverage":0,"educationCoefficient":17,"favColor":"red"},{"_id":"5dc84723d5a0933fa708ae7a","age":35,"balance":6126.65,"eyeColor":"brown","name":"Hyde Flowers","gender":"male","continent":"Europe","gradePointAverage":18,"educationCoefficient":6,"favColor":"brown"},{"_id":"5dc84723c581fafbb4892b51","age":35,"balance":2478.59,"eyeColor":"green","name":"Young Berg","gender":"female","continent":"South America","gradePointAverage":3,"educationCoefficient":20,"favColor":"black"},{"_id":"5dc84723ab354a2d81d17181","age":28,"balance":8124.05,"eyeColor":"green","name":"Dotson Sloan","gender":"male","continent":"Oceania","gradePointAverage":17,"educationCoefficient":30,"favColor":"blue"},{"_id":"5dc847235c05cfb7fb16f53b","age":24,"balance":13147.57,"eyeColor":"brown","name":"Janette Dorsey","gender":"female","continent":"Europe","gradePointAverage":3,"educationCoefficient":30,"favColor":"yellow"},{"_id":"5dc847231ecb22483dc3f2c3","age":29,"balance":11246.84,"eyeColor":"green","name":"Nellie Reynolds","gender":"female","continent":"Africa","gradePointAverage":4,"educationCoefficient":23,"favColor":"black"},{"_id":"5dc847237ca20d0a5f5509f8","age":36,"balance":448.5,"eyeColor":"green","name":"Elma Stephenson","gender":"female","continent":"Asia","gradePointAverage":6,"educationCoefficient":25,"favColor":"purple"},{"_id":"5dc84723c845477d36615791","age":27,"balance":6245.33,"eyeColor":"blue","name":"Tamara Duncan","gender":"female","continent":"South America","gradePointAverage":12,"educationCoefficient":15,"favColor":"yellow"},{"_id":"5dc84723d043872aa062389d","age":34,"balance":17131.67,"eyeColor":"brown","name":"Trevino Adams","gender":"male","continent":"Asia","gradePointAverage":12,"educationCoefficient":26,"favColor":"red"},{"_id":"5dc8472358781cdc5b295b0a","age":30,"balance":18898.04,"eyeColor":"blue","name":"Judith Gomez","gender":"female","continent":"North America","gradePointAverage":10,"educationCoefficient":10,"favColor":"brown"},{"_id":"5dc84723642a595f77d42a9e","age":26,"balance":3711.42,"eyeColor":"brown","name":"Cotton Norris","gender":"male","continent":"Oceania","gradePointAverage":19,"educationCoefficient":13,"favColor":"purple"},{"_id":"5dc847231bf41fe23b94f8ad","age":40,"balance":5986.87,"eyeColor":"brown","name":"Todd Franklin","gender":"male","continent":"North America","gradePointAverage":17,"educationCoefficient":19,"favColor":"brown"},{"_id":"5dc84723e090c1ac6c86722b","age":28,"balance":14767.89,"eyeColor":"brown","name":"Smith Frost","gender":"male","continent":"Africa","gradePointAverage":6,"educationCoefficient":18,"favColor":"purple"},{"_id":"5dc84723608d28ca91ed6fb8","age":35,"balance":2567.81,"eyeColor":"blue","name":"Doris Cameron","gender":"female","continent":"Africa","gradePointAverage":11,"educationCoefficient":20,"favColor":"yellow"},{"_id":"5dc84723610d7f670c6d088b","age":21,"balance":11646.91,"eyeColor":"blue","name":"Terri Wolfe","gender":"female","continent":"North America","gradePointAverage":7,"educationCoefficient":28,"favColor":"brown"},{"_id":"5dc84723bf73e727e53a82c9","age":32,"balance":3642.86,"eyeColor":"blue","name":"Frederick Mendez","gender":"male","continent":"South America","gradePointAverage":1,"educationCoefficient":3,"favColor":"brown"},{"_id":"5dc847239fb04044bed82d52","age":36,"balance":16408.38,"eyeColor":"brown","name":"Robbie Osborne","gender":"female","continent":"North America","gradePointAverage":16,"educationCoefficient":1,"favColor":"green"},{"_id":"5dc8472330be45d997e90ec1","age":23,"balance":18904.65,"eyeColor":"green","name":"Nola Simmons","gender":"female","continent":"North America","gradePointAverage":13,"educationCoefficient":24,"favColor":"yellow"},{"_id":"5dc8472376ab6c8a63f869fe","age":30,"balance":14642.18,"eyeColor":"brown","name":"Leon West","gender":"male","continent":"South America","gradePointAverage":8,"educationCoefficient":23,"favColor":"red"},{"_id":"5dc84723720d797ddaf90fc4","age":27,"balance":7286.64,"eyeColor":"blue","name":"Morton Spencer","gender":"male","continent":"Asia","gradePointAverage":16,"educationCoefficient":29,"favColor":"black"},{"_id":"5dc8472397dc41ce59dba004","age":39,"balance":18344.04,"eyeColor":"brown","name":"Carolina Townsend","gender":"female","continent":"South America","gradePointAverage":8,"educationCoefficient":1,"favColor":"yellow"},{"_id":"5dc847237f1cf5baf840094e","age":26,"balance":15170.26,"eyeColor":"blue","name":"Rivers Clay","gender":"male","continent":"North America","gradePointAverage":8,"educationCoefficient":7,"favColor":"green"},{"_id":"5dc84723536c4ab5fb82358b","age":26,"balance":12295.61,"eyeColor":"green","name":"Harriett Francis","gender":"female","continent":"South America","gradePointAverage":13,"educationCoefficient":28,"favColor":"purple"},{"_id":"5dc84723562c000928d87625","age":40,"balance":10985.33,"eyeColor":"brown","name":"Priscilla Mitchell","gender":"female","continent":"South America","gradePointAverage":17,"educationCoefficient":9,"favColor":"blue"},{"_id":"5dc847232b1e4bc92d365755","age":23,"balance":12020.48,"eyeColor":"blue","name":"Huff Walters","gender":"male","continent":"Africa","gradePointAverage":0,"educationCoefficient":24,"favColor":"yellow"},{"_id":"5dc847239490ddd81e002b80","age":33,"balance":8000.54,"eyeColor":"brown","name":"Gregory Lang","gender":"male","continent":"Asia","gradePointAverage":20,"educationCoefficient":9,"favColor":"blue"},{"_id":"5dc84723a278f387bf0d5441","age":23,"balance":6915.85,"eyeColor":"brown","name":"Denise Graves","gender":"female","continent":"Europe","gradePointAverage":11,"educationCoefficient":5,"favColor":"brown"},{"_id":"5dc847238933f2c0fc219e49","age":32,"balance":6084.14,"eyeColor":"blue","name":"Randall Robbins","gender":"male","continent":"Oceania","gradePointAverage":19,"educationCoefficient":25,"favColor":"green"},{"_id":"5dc847237e621e135e3e5b98","age":39,"balance":755.15,"eyeColor":"brown","name":"Sherri Mcleod","gender":"female","continent":"Asia","gradePointAverage":16,"educationCoefficient":8,"favColor":"red"},{"_id":"5dc8472300a998b65ca5a5e9","age":40,"balance":13749.28,"eyeColor":"green","name":"Crosby Ratliff","gender":"male","continent":"Asia","gradePointAverage":18,"educationCoefficient":6,"favColor":"purple"},{"_id":"5dc84723d3b3a1d5ab07ef86","age":26,"balance":17085.26,"eyeColor":"brown","name":"Navarro Cochran","gender":"male","continent":"Oceania","gradePointAverage":0,"educationCoefficient":18,"favColor":"black"},{"_id":"5dc84723151fec441ff309a8","age":37,"balance":3872.6,"eyeColor":"blue","name":"Lakisha Allen","gender":"female","continent":"Africa","gradePointAverage":12,"educationCoefficient":16,"favColor":"red"},{"_id":"5dc84723792963dd29335fd0","age":27,"balance":4780.59,"eyeColor":"green","name":"Janice Gill","gender":"female","continent":"Africa","gradePointAverage":19,"educationCoefficient":17,"favColor":"black"},{"_id":"5dc84723e35c286a846e4ee0","age":26,"balance":2229.99,"eyeColor":"green","name":"Hillary Sparks","gender":"female","continent":"Europe","gradePointAverage":6,"educationCoefficient":22,"favColor":"brown"},{"_id":"5dc84723a0e7be84e6476f2e","age":37,"balance":2456.96,"eyeColor":"green","name":"Angel Manning","gender":"female","continent":"South America","gradePointAverage":0,"educationCoefficient":6,"favColor":"brown"},{"_id":"5dc84723c131f6a9539a684d","age":21,"balance":7508.64,"eyeColor":"blue","name":"Barrera Bentley","gender":"male","continent":"North America","gradePointAverage":20,"educationCoefficient":11,"favColor":"blue"},{"_id":"5dc8472318a5778e7b5bd00d","age":32,"balance":18615.48,"eyeColor":"blue","name":"Dale Gilmore","gender":"male","continent":"Asia","gradePointAverage":19,"educationCoefficient":12,"favColor":"purple"},{"_id":"5dc8472366fdad6f26fa63bd","age":37,"balance":1837.25,"eyeColor":"brown","name":"John Alvarado","gender":"female","continent":"North America","gradePointAverage":13,"educationCoefficient":0,"favColor":"yellow"},{"_id":"5dc847233a3f1e2ae5b52ee9","age":34,"balance":18639.14,"eyeColor":"blue","name":"Rush Noble","gender":"male","continent":"Oceania","gradePointAverage":15,"educationCoefficient":5,"favColor":"red"},{"_id":"5dc8472382e3196b5d8a76b1","age":39,"balance":16506.64,"eyeColor":"brown","name":"Sanchez Randall","gender":"male","continent":"Europe","gradePointAverage":6,"educationCoefficient":11,"favColor":"purple"},{"_id":"5dc84723f871abaa0ef01b54","age":27,"balance":2514.8,"eyeColor":"green","name":"Joseph Hendricks","gender":"male","continent":"South America","gradePointAverage":19,"educationCoefficient":2,"favColor":"brown"},{"_id":"5dc847238c89047091b92a68","age":28,"balance":2024.91,"eyeColor":"brown","name":"Wynn Sharp","gender":"male","continent":"Oceania","gradePointAverage":16,"educationCoefficient":2,"favColor":"yellow"},{"_id":"5dc847235f4a55002e32c86a","age":32,"balance":6908.58,"eyeColor":"green","name":"Combs Mullen","gender":"male","continent":"South America","gradePointAverage":10,"educationCoefficient":27,"favColor":"green"},{"_id":"5dc84723a4c06ecaab041df9","age":30,"balance":9799.06,"eyeColor":"blue","name":"Jacquelyn Glover","gender":"female","continent":"North America","gradePointAverage":7,"educationCoefficient":29,"favColor":"yellow"},{"_id":"5dc847234c59b93b766d147c","age":33,"balance":13002.32,"eyeColor":"green","name":"Stephenson Dominguez","gender":"male","continent":"Asia","gradePointAverage":5,"educationCoefficient":27,"favColor":"purple"},{"_id":"5dc847236ce3c4142fb78dcb","age":25,"balance":15712.37,"eyeColor":"brown","name":"Hollie Avery","gender":"female","continent":"Africa","gradePointAverage":3,"educationCoefficient":29,"favColor":"purple"},{"_id":"5dc847239fe303598ea09345","age":24,"balance":14704.26,"eyeColor":"blue","name":"Puckett Matthews","gender":"male","continent":"Asia","gradePointAverage":5,"educationCoefficient":20,"favColor":"purple"},{"_id":"5dc84723107faed90510e159","age":26,"balance":3338.41,"eyeColor":"brown","name":"Shaffer Woods","gender":"male","continent":"North America","gradePointAverage":17,"educationCoefficient":7,"favColor":"blue"},{"_id":"5dc847234dc2f0bc92cf9539","age":33,"balance":12289.79,"eyeColor":"brown","name":"White Avila","gender":"male","continent":"South America","gradePointAverage":14,"educationCoefficient":5,"favColor":"brown"},{"_id":"5dc84723bda481f634cf7531","age":28,"balance":13615.47,"eyeColor":"green","name":"Frazier Frye","gender":"male","continent":"Africa","gradePointAverage":13,"educationCoefficient":5,"favColor":"blue"},{"_id":"5dc8472350a33f72aefc3a5f","age":30,"balance":13219.77,"eyeColor":"green","name":"Katy Chandler","gender":"female","continent":"Europe","gradePointAverage":10,"educationCoefficient":3,"favColor":"blue"},{"_id":"5dc84723612c41965e40a4ea","age":22,"balance":19385.98,"eyeColor":"brown","name":"Tia Bradshaw","gender":"female","continent":"Asia","gradePointAverage":12,"educationCoefficient":24,"favColor":"yellow"},{"_id":"5dc84723bc27e28126b6a2f1","age":23,"balance":12602.09,"eyeColor":"green","name":"Bennett Walker","gender":"male","continent":"Africa","gradePointAverage":7,"educationCoefficient":6,"favColor":"brown"},{"_id":"5dc84723a373d7fc234e8db4","age":26,"balance":9236.48,"eyeColor":"brown","name":"Tara Jimenez","gender":"female","continent":"North America","gradePointAverage":7,"educationCoefficient":22,"favColor":"green"},{"_id":"5dc84723dd769699cea9874b","age":38,"balance":9288.38,"eyeColor":"brown","name":"Brigitte Mcgee","gender":"female","continent":"Oceania","gradePointAverage":12,"educationCoefficient":17,"favColor":"purple"},{"_id":"5dc84723ee5484a47e9fa450","age":21,"balance":7541.82,"eyeColor":"green","name":"Geneva Lopez","gender":"female","continent":"Oceania","gradePointAverage":18,"educationCoefficient":5,"favColor":"green"},{"_id":"5dc8472363b708372214ef26","age":27,"balance":16678.17,"eyeColor":"brown","name":"Haley Lynn","gender":"female","continent":"Africa","gradePointAverage":14,"educationCoefficient":1,"favColor":"yellow"},{"_id":"5dc8472377d636f5ccd9aa51","age":39,"balance":6947.85,"eyeColor":"green","name":"Vivian Jackson","gender":"female","continent":"Oceania","gradePointAverage":20,"educationCoefficient":29,"favColor":"purple"},{"_id":"5dc84723775ba3c085745f75","age":25,"balance":1225,"eyeColor":"brown","name":"Mack Baker","gender":"male","continent":"Oceania","gradePointAverage":11,"educationCoefficient":5,"favColor":"blue"},{"_id":"5dc84723f09336ca8ed43fec","age":23,"balance":17940.52,"eyeColor":"brown","name":"Ryan Olsen","gender":"male","continent":"Africa","gradePointAverage":11,"educationCoefficient":28,"favColor":"yellow"},{"_id":"5dc84723c06942e5c5e3960b","age":20,"balance":6300.21,"eyeColor":"brown","name":"Sylvia Lindsey","gender":"female","continent":"Africa","gradePointAverage":10,"educationCoefficient":19,"favColor":"red"},{"_id":"5dc84723b9b6a31ffae23eb6","age":22,"balance":12400.69,"eyeColor":"brown","name":"Langley Bishop","gender":"male","continent":"South America","gradePointAverage":10,"educationCoefficient":28,"favColor":"green"},{"_id":"5dc84723e2b571d73222bae1","age":32,"balance":12846.18,"eyeColor":"green","name":"Hensley Goff","gender":"male","continent":"Asia","gradePointAverage":14,"educationCoefficient":24,"favColor":"purple"},{"_id":"5dc84723c987926fa2a2401f","age":37,"balance":9905.98,"eyeColor":"brown","name":"Deidre Parks","gender":"female","continent":"Europe","gradePointAverage":2,"educationCoefficient":3,"favColor":"purple"},{"_id":"5dc84723671ea8c2ceb99c58","age":39,"balance":324.13,"eyeColor":"blue","name":"Virgie Barber","gender":"female","continent":"North America","gradePointAverage":0,"educationCoefficient":22,"favColor":"blue"},{"_id":"5dc8472333b23e52d9bc6a33","age":32,"balance":4218.59,"eyeColor":"green","name":"Miller Workman","gender":"male","continent":"Asia","gradePointAverage":11,"educationCoefficient":9,"favColor":"purple"},{"_id":"5dc84723f0fb5b3db4f16ab9","age":27,"balance":8236.88,"eyeColor":"blue","name":"Guerrero Coleman","gender":"male","continent":"South America","gradePointAverage":20,"educationCoefficient":20,"favColor":"black"}]
var col = this.columnParser(data)
var pie = this.pieParser(data);
    var scat = this.scatterParser(data);
    var bub = this.bubbleParser(data);
    return (

        
        <div>
        <h1>Hello user !</h1>

        <Chart  width={300}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={col}
        options={{
          title: 'Eye color of people',
          chartArea: { width: '30%' },
          hAxis: {
            title: 'Eye color',
            minValue: 0,
          },
          vAxis: {
            title: 'Number of people',
          },
        }}
        legendToggle/>

<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={pie}
  options={{
    title: 'Favorite colors',
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
<Chart
  width={'500px'}
  height={'300px'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data= {scat}
  options={{
    title: 'Grade Point Average vs Education Coefficient',
    hAxis: { title: 'Education Coefficient' },
    vAxis: { title: 'Grade Point Average' },
    legend: 'none',
    trendlines: { 0: {} },
  }}
  rootProps={{ 'data-testid': '1' }}
/>

<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={bub}
  options={{
    title: 'Comparaison of male and females average money by continent',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Money',
      minValue: 0,
    },
    vAxis: {
      title: 'Continent',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>

    );

}
    

    

}

export default App2;