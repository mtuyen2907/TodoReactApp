import React, { Component } from "react";

export default class Sample extends Component {
state = {
    a: 'My Tuyen'
    
};
handleButtonClick = () => {
   console.log("Inside Button Click");
   //this.state.a = "You pressed Button";
   this.setState ({ 
      a: "23 year old"
     
  }); 
};
render() {
   return (
      <div>
         <h1>{this.state.a}</h1>
         <button type="button" onClick={this.handleButtonClick} >Click Me</button>
 
      </div>
  );
 }
}
