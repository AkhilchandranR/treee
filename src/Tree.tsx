import React,{useState,useCallback} from 'react';
import { treeNode } from './data';
import axios from 'axios';



function Tree({id,name,children}:treeNode) {

    const[show,setShow] = useState(false);
    const[data,setData] = useState([]);

    const handleClick = useCallback(
     async () => {
        setShow(!show)

        try{
          const d = await axios.get('https:/dummyjson.com/carts')
          console.log(d?.data?.carts);
          setData(d?.data?.carts?.products)

        }catch(e){
          console.log(e)
        }

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