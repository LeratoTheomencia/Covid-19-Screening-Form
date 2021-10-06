

import React, { Component} from "react";
import "./style.css"
import ShoppingForm from './components/ShoppingForm';
import DisplayList from './components/DisplayList';
import Search from "./Search";


class  App extends Component{
  state = {
    list: [],
    
  };


  handleSubmit = (FirstName, LastName, Age, Gender, Radio, Radio2, Radio3, Radio4, Radio5, Radio6)=>{
    
    let obj={
      FirstName:FirstName,
       LastName:LastName,
       Age:Age, 
       Gender:Gender, 
       Radio:Radio,
       Radio2:Radio2,
       Radio3:Radio3,
       Radio4:Radio4,
       Radio5:Radio5,
       Radio6:Radio6,
    
    }
    if(FirstName === ""){
      alert("Please enter FirstName")
    }
    else if(LastName === ""){
      alert("please fill out LastName")
    }
    else if(Age === ""){
      alert("please fill out Age")
    }
    else if(Gender === ""){
      alert("please fill out Gender")
    }
    else if(Radio === ""){
      alert("please fill out form")
    }
    else if(Radio2 === ""){
      alert("please fill out form")
    }
    else if(Radio3 === ""){
      alert("please fill out form")
    }
    else if(Radio4 === ""){
      alert("please fill out form")
    }
    else if(Radio5 === ""){
      alert("please fill out form")
    }
    else if(Radio6 === ""){
      alert("please fill out form")
    }
  
    else{
      this.setState({
        list:[...this.state.list, obj]
      })
    }
    }
    handleDelete = id =>{
      this.setState({
        list: this.state.list.filter(item =>item.id !==id)
      })
      console.log(this.state.list)
    }
   
  render(){
  

   
    
    return (

      <div> 
         <ShoppingForm handleSubmit={this.handleSubmit}/>
         <DisplayList  data={this.state.list} Delete={this.handleDelete}/>
        <Search />
         
      </div>
    )
  }  
}
export default App ;