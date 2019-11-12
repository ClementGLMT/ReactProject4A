import React from 'react'
import NameForm from './components/NameForm.js'
import NdPage from './components/2ndPage.js'


export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "false"
    }
    this.onUpdate = this.onUpdate.bind(this);

  }

onUpdate (val) {
      this.setState({ isLoggedIn: val })
  };

render(){
    if(this.state.isLoggedIn === "true"){
    return (<NdPage />
        );
  }

     
    
    else {        return (
        <div >
         <NameForm onUpdate={this.onUpdate}/> ;
    </div> )
}   

}

}


  


