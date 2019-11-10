import React from 'react'
import NdPage from './2ndPage.js'
import NameForm from './NameForm.js';

export default class Page1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: "false"
        }
        this.onUpdate = this.onUpdate.bind(this);

      }

    onUpdate (val) {
          this.setState({ isLoggedIn: val })
          console.log("updating page with "+this.state.isLoggedIn);
      };

    render(){
        console.log("[page1] test with isloggedin : "+this.state.isLoggedIn)
        if(this.state.isLoggedIn === "true"){
            console.log("Affichage ndpage : "+this.state.isLoggedIn)
            return <NdPage/>;
        }
        else {        return <NameForm onUpdate={this.onUpdate}/>;
    }
    
    }

}