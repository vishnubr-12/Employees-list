import React, { Component } from 'react'
import { FaPen } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
const sty={
  wordSpacing:"80px",
  backgroundColor:"grey"
  };
export default class list extends Component {
  render() {
      const{
        names,comps,emails,nums,design,handelDelete,handelEdit
        }=this.props;
    return (
      <>
        <tr style={sty}>
           
       <td> {names}</td>
       <td> {comps}</td>
        <td>{emails}</td>
        <td>{nums}</td>
       <td> {design}</td>
        <td><button onClick={handelEdit}> edit<FaPen/></button><button onClick={handelDelete}>delete<FaBackspace/></button></td>
      </tr>
      </>
    );
  }
}
