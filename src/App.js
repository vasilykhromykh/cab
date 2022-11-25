import React from 'react';
import './App.scss';



function App() {




  let newDate = new Date()

  let time = newDate.getHours().toString()+ newDate.getMinutes().toString()
  let day= newDate.getDay()

  let First = 915
  let Second = 1015
  let Third = 1115
  let Fourth = 1210
  let Fifth = 1305
  let Six = 1415
  let Seventh = 1525
  let x=1

  let days=[
    {
      "1": 210,
      "2": 156,
      "3": 309,
      "4": 320,
      "5": 331,
      "6": 331,
      "7": 214,
      "8": "ПН"
    },
    {
      "1": 307,
      "2": 156,
      "3": 156,
      "4": 320,
      "5": 331,
      "6": 214,
      "7": 331,
      "8": "ВТ"
    },
    {
      "1": 214,
      "2": 'акт',
      "3": 331,
      "4": 311,
      "5": 315,
      "6": 307,
      "7": 210,
      "8": "СР"
    },
    {
      "1": 331,
      "2": 331,
      "3": 301,
      "4": 'я пидр',
      "5": 'акт',
      "6": 'хз',
      "7": 'домой',
      "8": "ЧТ"
    },
    {
      "1": 307,
      "2": 320,
      "3": 214,
      "4": 214,
      "5": 'хз',
      "6": 331,
      "7": 320,
      "8": "ПТ"
    }
  ]



  switch (true) {
    case(Number(time) < First)  :
      x=1;
      break;
    case(Number(time) < Second) :
      x=2;
      break;
    case(Number(time) < Third)  :
      x=3;
      break;
    case(Number(time) < Fourth) :
      x=4;
      break;
    case(Number(time) < Fifth)  :
      x=5;
      break;
    case(Number(time) < Six)    :
      x=6;
      break;
    case(Number(time) < Seventh):
      x=7;
      break;
  }


  function refreshPage() {
    window.location.reload();
  }
  console.log(time)
  return (
      <div className='App' >

        <h1>{days[day-1][x+1]}</h1>

<div>
        <button onClick={()=>refreshPage()}>Обновить</button>
  <a href='https://t.me/whoecho'>by @whoecho</a>
</div>
      </div>
  );
}

export default App;
