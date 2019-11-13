
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './component/edit'
import React, { Component } from 'react';
import uuid from "uuid";
class App extends Component {
  constructor(props) {
    super(props);
   this.state={ emp:[{id:uuid,name:"aaaa",comp:"bbbb",email:"cccc",num:"1222",desig:"ddd"},
  {id:uuid,name:"aaaa",comp:"bbbb",email:"cccc",num:"1222",desig:"ddd"}],list:"",
  id:uuid(),
  name:"",comp:"",email:"",num:"",desig:"",
  edit:false,emps:[]

  }
}
handelName =e=>{this.setState({name:e.target.value});};
handelComp=(e)=>{this.setState({comp:e.target.value});};
handelEmail=(e)=>{this.setState({email:e.target.value});};
handelNum=(e)=>{this.setState({num:e.target.value});};
handelDesig=(e)=>{this.setState({desig:e.target.value});};
handelSubmit=(e)=>{e.preventDefault()
const newEmp={
  id:this.state.id,
  names:this.state.name,
  comps:this.state.comp,
  emails:this.state.email,
  nums:this.state.num,
  design:this.state.desig};
  const update=[...this.state.emps,newEmp];
  this.setState({
    emps:update,
    id:uuid(),
     name:"",
    comp:"",
    email:"",
    num:"",
    desig:"",
   edit:false
  },()=>console.log(update));

};
clearList=()=>{
  this.setState({emps:[]});
};
handelDelete = id => {
  const filteredItems = this.state.emps.filter(item => item.id !== id);
  this.setState({
      emps: filteredItems
  });
};
handelEdit = id => {
  const filteredItems = this.state.emps.filter(item => item.id !== id);

  const selectedItem = this.state.emps.find(item => item.id === id);

  console.log(selectedItem);

  this.setState({
      emps: filteredItems,
      name: selectedItem.names,
      comp: selectedItem.comps,
      email: selectedItem.emails,
      num:selectedItem.nums,
      desig: selectedItem.design,
      edit: true,
      id: id
  });
};;


  render() {
    return (
      <>
 <div className = "container" >
            <div className = "col-6" >
            <form onSubmit = {this.handelSubmit } >
            <input type = "text"
            value = {this.state.name}
            placeholder = "name"
            onChange = { this.handelName}
            />
             <input type = "text"
            value = { this.state.comp }
            placeholder = "comp"
            onChange = { this.handelComp }
            /> 
            <input type = "text"
            value = { this.state.email }
            placeholder = "email"
            onChange = { this.handelEmail }
            />
             <input type = "num"
            value = { this.state.num }
            placeholder = "number"
            onChange = { this.handelNum }
            /> 
            <input type = "text"
            value = {this.state.desig }
            placeholder = "desig"
            onChange = { this.handelDesig }
            /> 
            <button type = "submit"
            className = "btn btn-primary" > Add </button>

            </form>

            </div> 
            </div> 
        
          <Edit emps={this.state.emps}
          clear={this.clearList}
          handelDelete={this.handelDelete}
          handelEdit={this.handelEdit}/>
      </>
    );
  }
}

export default App;