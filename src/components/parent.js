import React, { Component } from 'react';
import Child from './child';
import Demo1 from './demo1';

export default class Parent extends Component {
render() {
//     return (
//       <div>
//           <h1>I am parent Component</h1>
//           <Child></Child>
//       </div>
//     );
//  }
// }


return (
    <div>
       <h1>I am parent Component</h1>
       <Child Title="Ahihi Parent Component">          </Child>
       <Demo1 Title="I am Text for function Component" ></Demo1>
   </div>
);
}
}
//sau khi import child vào thì tương tự qua file App.js gọi Parent 