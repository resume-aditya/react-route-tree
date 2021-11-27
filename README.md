A simple tree component with nodes acting as route link : 

## Install

npm i react-route-tree

## Usage 

import Tree from './components/react-route-tree/src/Tree'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  let treeData = [
    {
      "name": "Router",
      "to": "/router",
      "children": [
        {
          "name": "Overview",
          "to": "/overview"
        },
        {
          "name": "Example",
          "to": "/example",
          "children": [
            {
              "name": "Simple Routing Demo",
              "to": "/simpleRoute"
            },
            {
              "name": "Nested Route Demo",
              "to": "/nestedRoute"
            }
          ]
        }
      ]
    },
    {
      "name": "Create Ref",
      "to": "/createRef",
      "children": [
        {
          "name": "Overview",
          "to": "/overview"
        },
        {
          "name": "Example",
          "to": "/example",
          "children" : [{
            "name" : "Simple referncing - .createRef",
            "to" : "/createRef"
          },
          {
            "name" : "Forward Ref",
            "to" : "/forwardRef"
          },
          {
            "name" : "Callback refs",
            "to" : "/callbackRef"
          }]
        }
      ]
    }
  ];  
  return (
    <div className="App">
      <Router>
        <Tree data = {treeData}/>
    </Router>
    </div>
  );
}

export default App;


## License

react-route-tree is released under the MIT license.