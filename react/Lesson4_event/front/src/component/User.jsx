import { useState, useEffect } from "react";

export default function Users({item}) {
  useEffect(() => {
    setOut(item)
  }, [item])

  const [out, setOut] = useState(item)

  function Del(res) {
    const delUser = [...out]
    delUser.splice(res, 1)
    setOut(delUser)

  }

  return(
    out.map((item, i) => (
      <div key={item.id}>
        <div>
          {item.name}
          <button onClick={() => Del(i)}>x</button>
        </div>
      </div>
      ))
  )
}