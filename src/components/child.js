import React, { Component } from 'react';
export default class Child extends Component {
render() {
    return (
      <div>
          <h3>Ahihi I am Child Component</h3>
          <h3>{this.props.Title}</h3>
      </div>
    );
 }
}
//import vào file Parent.js sau đó gọi ra dùng