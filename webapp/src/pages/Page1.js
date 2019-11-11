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