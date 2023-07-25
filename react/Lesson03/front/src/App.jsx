import {Cart, Cart2} from "./component/Cart/Cart";

import { testUsers } from "./data/UserDate";


export default function App() {
  console.log(testUsers);
  const userSortAge = 
  testUsers.map(item => (
    item.age >= 18 ? (<Cart name={item.name} age={`Вік старших ${item.age}`} key={item.id} />) : (<Cart name={item.name} age={`Вік молодших ${item.age}`} key={item.id} />)
    ))

  return (
    <>
      <div className={"wrapper"}>
        <h1>Users</h1>
        {/* {
          testUsers.map(item => (
            item.age > 18 ? (
              <div key={item.id} className={"cart"}>
                <h3>{item.name}</h3>
                <h5>Вік: {item.age}</h5>
                <a href={`mailto:${item.email}`}>Email</a>
              </div>
            ) : (
              <div key={item.id} className={"cart"}>
                <h3>Молодий {item.name}</h3>
                <h5>Вік: {item.age}</h5>
                <a href={`mailto:${item.email}`}>Email</a>
              </div>
            )
          ))
        } */}
        {userSortAge}

      </div>
    </>

  )
}
