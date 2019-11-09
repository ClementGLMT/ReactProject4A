import React from 'react'
import NdPage from './2ndPage.js'
import RendForm from './RendForm.js'

export default class Page1 extends React.Component {

    render(){
        console.log("[page1] test with isloggedin : "+this.props.isLoggedIn)
        if(this.props.isLoggedIn === "true"){
            console.log("Affichage ndpage : "+this.props.isLoggedIn)

            return <NdPage/>;
        }
        return <RendForm onUpdate={this.props.onUpdate} handleSubmit ={this.props.handleSubmit}/>;
    }

}