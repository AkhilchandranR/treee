import React,{useState} from 'react';
import Tree from './Tree';
import './App.css';
import {data, treeNode} from './data' 



function App() {
  return (
    <div className="App">
      <Tree {...data}/>
    </div>
  );
}

export default App;
