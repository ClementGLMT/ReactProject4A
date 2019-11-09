import React from 'react'
import NameForm from './NameForm'


export default class RendForm extends React.Component{

    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          isLoggedIn: "false",
          isUnvalidated: "false"
        }
    
      }

      //probleme onUpdate
      onUpdate = (val, val2) => {
        this.setState({
            isLoggedIn: val,
          isUnvalidated: val2
        })
      };

render(){
    console.log("isUnvalidated : "+this.state.isUnvalidated);
    if(this.state.isUnvalidated === "false"){
        return(
         <NameForm onUpdate={this.props.onUpdate} handleSubmit = {this.props.handleSubmit}/>
        )
      }
      else {
        return(
          <div>
        <p color="red" style={{
          position: 'absolute', left: '50%', 
          transform: 'translate(-50%, -50%)'}}>Wrong Credentials !</p>
        <NameForm onUpdate={this.props.onUpdate} handleSubmit = {this.props.handleSubmit}/>
        </div>
        )
      }
}

}