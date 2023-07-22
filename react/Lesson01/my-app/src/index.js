import React from 'react';
import ReactDOM from 'react-dom/client';
import Users from './component/Users';
import Button from './component/Button';
import ButtonProps from './component/ButtonProps';


const root = ReactDOM.createRoot(document.getElementById('root'));

let Obj = {
  name: 'Sascha',
  age: 12
}

root.render(
  <>
    <Users item={Obj}>
      Saschaaa
    </Users>

    <Button />
    <ButtonProps item={'Click-Click'}/>
  </>
);

