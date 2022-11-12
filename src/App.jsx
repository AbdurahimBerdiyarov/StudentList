
import React from 'react';
import{student} from "./data";
import "./index.css";

// class Student extends React.Component{
//   constructor (props){
//   super(props)
//   this.state ={
//     count: 1,
//     title: "Webbrain"

//   };
// }
//   render(){
    
//     const plus =()=>{
//       this.setState({count: this.state.count+1})
//     }
//     const minus =()=>{
//       this.setState({count: this.state.count-1})


//     }
//     const titleChange = (event) => {
//       console.log(event.target.value);
//       this.setState({title: event.target.value})
//     }

//     return(
//       <div>
//         <h1>Hi {this.props.name}</h1>

//         <pre>
//         count: {this.state.count}
//         </pre>

//         <button onClick={plus}>+</button>
//         <button onClick={minus}>-</button>

//         <hr />

//         <h1>Title: {this.state.title}</h1>
//         <input type="text" onChange={titleChange}/>


        
    
//       </div>
//     )
//   }

// }





// class Student extends React.Component{
//     constructor (props){
//     super(props)
//     this.state ={
//       student: [ 
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},
//         {id: 1, name: "Berdiyarov Rakhimjon",age: "25", adress: "Uzbekistan", status: "Student", nickname: "Rahim", univ: "yeungnam", job:"devoloper", edit: "Hoorwen"},


//       ],
      

//     };
//   }
//   render() {
  

//     return(
//       <div>
//         <table border={2}>
//           <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Adress</th>
//             <th>Status</th>
//             <th>Nickname</th>
//             <th>Univ</th>
//             <th>Job</th>
//             <th>Edit</th>
//           </tr>
//           </thead>

//           <tbody>
//           {
//           this.state.student.map((std) =>{
//             return (
//               <tr key={std}>
//                 <td>{std.id}</td>
//                 <td>{std.name}</td>
//                 <td>{std.age}</td>
//                 <td>{std.adress}</td>
//                 <td>{std.status}</td>
//                 <td>{std.nickname}</td>
//                 <td>{std.univ}</td>
//                 <td>{std.job}</td>
//                 <td>{std.edit}</td>


//               </tr>

//              )
//           })
//         }


//           </tbody>

//         </table>
       
//       </div>
//     )
        
//   };
  

 

// }









// export default Student;












class Student extends React.Component{
  state={
    student: student,

    };
  

  render() {
    const onDelete =(id)=>{
      console.log(id);
      let res = this.state.student.filter((vl) => vl.id  !== id);

      this.setState({student: res})  

    }

    const filter = ({target: {value, name}})=>{
      let res = student.filter((vl) => `${vl[name]}`.toLowerCase().includes(value.toLowerCase()));
      this.setState({student: res})  


    }

    return (
    <div className='container'>


      <input className='input1' onChange={filter} name="id" type="text" placeholder='ID' />
      <input className='input2' onChange={filter} name="name" type="text" placeholder='Name' />
      <br />
      <table className='table'border={1} style={{borderCollapse:"collapse"}} >
        <thead>
        <tr className=''>
          <th className='id'>Id</th>
          <th className='header-name'>Name</th>
        </tr>
        </thead>
        <tbody>
          {
            this.state.student.map((st, index) => {
              return (
              <tr key={st.id}>
                {/* <td>{index+1}</td> */}
                <td className='number'>{st.id}</td>
                <td className='name'>{st.name}</td>
                <td className='btnbox'>
                <button className='btn' onClick={()=>onDelete(st.id)}>delete</button>
                </td>
              </tr>

          


              )
            }) 
          }
          
        </tbody>
      </table>

      

    </div>
    );
  }
  

}

export default Student