import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'


export default class Form extends Component {
    render() {
        const { name, comp, email, num, desig, handelName, handelComp, handelEmail, handelNum, handelDesig, handelSubmit, handelEdit } = this.props;
        return ( 
        <>
            <div className = "container" >
            <div className = "col-6" >
            <form onSubmit = { handelSubmit } >
            <input type = "text"
            value = {name}
            placeholder = "name"
            onChange = { e=>{this.setState({name:e.target.value});} }
            />
             <input type = "text"
            value = { comp }
            placeholder = "comp"
            onChange = { handelComp }
            /> 
            <input type = "text"
            value = { email }
            placeholder = "email"
            onChange = { handelEmail }
            />
             <input type = "num"
            value = { num }
            placeholder = "number"
            onChange = { handelNum }
            /> 
            <input type = "text"
            value = { desig }
            placeholder = "desig"
            onChange = { handelDesig }
            /> 
            <button type = "submit"
            className = "btn btn-primary" > Add </button>

            </form>

            </div> 
            </div> 
            </>
        );
    }
}