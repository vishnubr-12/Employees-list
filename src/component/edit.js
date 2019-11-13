import React, { Component } from 'react'
import List from "./list";
const sty={
wordSpacing:"80px",
backgroundColor:"grey"
};
export default class Edit extends Component {
  render() {
    const {emps,clear,handelDelete,handelEdit}=this.props;
    return (
<>
    <table className="w-100" >
    <caption>employee list </caption>
      <thead style={sty}>
        
        <tr>
    <th>name</th>
    <th>company</th>
    <th>email</th>
    <th>number</th>
    <th>designation</th>
  </tr>
  </thead>    
<tbody>
         {emps.map(emp=>{return(<List key={emp.id}
        names={emp.names}
        comps={emp.comps}
        emails={emp.emails}
        nums={emp.nums}
        design={emp.design}
        handelDelete={()=>handelDelete(emp.id)}
        handelEdit={()=>handelEdit(emp.id)}
        />);
        })
        }
             
       </tbody>        
       
       </table> 
       <button className="btn btn-danger text-center" onClick={clear}>Clear list</button>
     </> 
    );
  }
}
