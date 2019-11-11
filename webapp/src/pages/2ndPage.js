import React  from 'react'
import Chart from 'react-google-charts'
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';



class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: ""
        }
      }
componentDidMount(){
    const self = this;
    var Http = new XMLHttpRequest();
    var url='http://localhost:3000/bonhoms';
    Http.open("GET", url);
   Http.send();

    Http.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200){
        var json = JSON.parse(Http.response);
        self.setState({data: json})
      }
    };
   }


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
    bub[i][1] = bub[i][1]/nbmale;
    bub[i][2] = bub[i][2]/nbfemale;
}


return bub;
}





render(){

    
    var col = this.columnParser(this.state.data);
   var pie = this.pieParser(this.state.data);
    var scat = this.scatterParser(this.state.data);
    var bub = this.bubbleParser(this.state.data);

      return (


        <div>
        <MediaQuery query= "(min-width: 1600px)">
        <h1  style = {{textAlign: 'center', color: 'black', fontFamily: 'verdana' }}> WELCOME USER !</h1>
        <p></p>
        <p></p>
        <p></p>


        <Grid fluid>
                <Row>
                    <Col >
                        <Chart  
                            width={'400px'}
                height={'500px'}
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
                    </Col>
                     <Col >
                        <Chart
                             width={'400px'}
                             height={'500px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                             data={pie}
                            options={{
            title: 'Favorite colors',
            is3D: true,
          }}
                             rootProps={{ 'data-testid': '2' }}
                        />
                    </Col>
                    <Col >
                        <Chart
                            width={'400px'}
          height={'500px'}
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
                    </Col>
                     <Col>
                        <Chart
                             width={'400px'}
          height={'500px'}
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
                    </Col>
                </Row>
            </Grid>
            </MediaQuery>
            <MediaQuery query = "(max-width: 1600px)">
            <MediaQuery query = "(min-width: 1200px)">

            <h1  style = {{textAlign: 'center', color: 'black', fontFamily: 'verdana'}}>  WELCOME USER !</h1>
            <p></p>
            <p></p>
            <p></p>


            <Grid fluid>
             
                <Row>
                    <Col >
                        <Chart  
                            width={'400px'}
                height={'500px'}
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
                    </Col>
                     <Col >
                        <Chart
                             width={'400px'}
                             height={'500px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                             data={pie}
                            options={{
            title: 'Favorite colors',
            is3D: true,
          }}
                             rootProps={{ 'data-testid': '2' }}
                        />
                    </Col>

                    <Col  >
                        <Chart
                            width={'400px'}
          height={'500px'}
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
                    </Col>
                    </Row>
                    <Row>
                     <Col >
                        <Chart
                             width={'400px'}
          height={'500px'}
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
                    </Col>
                </Row>
            </Grid>
            </MediaQuery>
            </MediaQuery>
            <MediaQuery query = "(max-width: 1200px)">
            <MediaQuery query = "(min-width: 800px)">

            <h1  style = {{textAlign: 'center', color: 'black', fontFamily: 'verdana'}}>  WELCOME USER !</h1>
            <p></p>
            <p></p>
            <p></p>

            <Grid fluid>

                <Row>
                    <Col >
                        <Chart  
                            width={'400px'}
                height={'500px'}
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
                    </Col>
                     <Col >
                        <Chart
                             width={'400px'}
                             height={'500px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                             data={pie}
                            options={{
            title: 'Favorite colors',
            is3D: true,
          }}
                             rootProps={{ 'data-testid': '2' }}
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col  >
                        <Chart
                            width={'400px'}
          height={'500px'}
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
                    </Col>
                  
                     <Col >
                        <Chart
                             width={'400px'}
          height={'500px'}
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
                    </Col>
                </Row>
            </Grid>
            </MediaQuery>
            </MediaQuery>
        <MediaQuery query = "(max-width: 800px)">
        <h1  style = {{textAlign: 'center', color: 'black', fontFamily: 'verdana'}}> WELCOME USER !</h1>
        <p></p>
        <p></p>
        <p></p>

        <Grid fluid>
           
                <Row>
                    <Col >
                        <Chart  
                            width={'400px'}
                height={'500px'}
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
                    </Col>
                    </Row>
                    <Row>
                     <Col >
                        <Chart
                             width={'400px'}
                             height={'500px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                             data={pie}
                            options={{
            title: 'Favorite colors',
            is3D: true,
          }}
                             rootProps={{ 'data-testid': '2' }}
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col xs = {12} >
                        <Chart
                            width={'400px'}
          height={'500px'}
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
                    </Col>
                    </Row>
                    <Row>
                     <Col xs = {12}>
                        <Chart
                             width={'400px'}
          height={'500px'}
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
                    </Col>
                </Row>
            </Grid>
            </MediaQuery>
  
      </div>

        );


    };


    


    

    

}

export default App2;