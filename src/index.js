import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// ReactDOM.render(<div><h1>Hello World!</h1> <p>This is a paragraph</p></div>, document.getElementById('root'));

// // The following will over-write the above, but i am keeping both so that i can view each step

// /////////////////////////////////////////////////////////////////
// ReactDOM.render(
//   <ul>
//     <li> lsit item ett</li>
//     <li> list item dos</li>
//     <li> list item drei </li>
//   </ul>,
//   document.getElementById('root')
//   );

// /////////////////////////////////////////////////////////////////
//   function MyList(){
//     return(
//       <ul>
//         <li>list function 1</li>
//         <li>list function 2</li>
//         <li>list function 3</li>
//       </ul>
//     )
//   }

//   ReactDOM.render(
//     <MyList />,
//     document.getElementById("root")
//   );

/////////////////////////////////////////////////////////////////
import MyInfo from "./components/MyInfo"

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
);

/////////////////////////////////////////////////////////////////
