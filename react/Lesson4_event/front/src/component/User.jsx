import React from "react"
import { useState } from "react";

// export default function Users ({item}) {
//   const [out, setOut] = useState(item)

//   function Del(res) {
//     const delUser = [...out]
//     delUser.splice(res, 1)
//     setOut(delUser);


//   }
//   return (
//     out.map((item, i) => (
//       <div>
//         <div 
//         key={item.id}>
//         {item.name}
//         <button onClick={() => Del(i)}>x</button>
//         </div>
//       </div>
//     ))
//   )
// }


export default function Users({item}) {
  return (
    <h3 key={item.id}>{item.name}</h3>
  )
}