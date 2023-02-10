import React,{useState,useCallback} from 'react';
import { treeNode } from './data';



function Tree({id,name,children}:treeNode) {

    const[show,setShow] = useState(false);

    const handleClick = useCallback(
      () => {
        setShow(!show)
      },
      [show,setShow],
    )
    
    

  return (
    <>
    <div onClick={handleClick}>{id}{name}</div>
    {show && (children ?? []).map((node:treeNode)=>(<Tree {...node}/>))}
    </>
    
  )
}

export default Tree

//first commits pushed
//coments fro br1