import React from 'react'
import NameForm from './NameForm'


export default class RendForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: "false",
          update: (isLoggedIn) => {
              console.log("updating rendform")
            if( (isLoggedIn !== this.state.isLoggedIn)){
                this.props.onUpdate(isLoggedIn);
                this.setState({isLoggedIn: isLoggedIn});
            }

          }
        }
        this.state.update(this.state.isLoggedIn);

    
      }

      onUpdate = (val) => {
          //if(val !== this.state.isLoggedIn )
            this.setState({ isLoggedIn: val})
            this.state.update(this.state.isLoggedIn);

       // if(val2 !== this.state.isUnvalidated)
      };

render(){
    this.setState(this.state)
        return(
         <NameForm onUpdate={() => this.onUpdate} handleSubmit = {this.props.handleSubmit}/>
        )
     
        
    

}

}