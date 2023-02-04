export interface treeNode{
    id:number,
    name:string,
    children?: treeNode[]
}

export const data:treeNode = {
    id:1,
    name:"one",
    children:[
      {id: 2, name:"two"},
      {id:3, name:"three",children:[
        {id:4, name:"four"}
      ]}
    ]}