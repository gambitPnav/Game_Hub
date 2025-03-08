import React from 'react'
import './Square.css'
import { useEffect } from 'react';

import noise from '../Sounds/explosion.mp3';
import success from '../Sounds/success.mp3';

const Square = () => {


  let bomb = [];
  while (bomb.length != 5) {
    const a = Math.round(Math.random() * 100) % 25;
    if (bomb.includes(a))
      continue;
    else
      bomb.push(a);

  }
  const boxes = [];
  for (let i = 0; i < 25; i++) {

    boxes.push(<div className='box' id={`${i}`} onClick={() => display(i)} >🌻</div>);
  }

  function playsound(file) {
    const audio = new Audio(file);
    audio.play();
  }
  function display(e) {
    const val = document.getElementById(e);

    if (val.innerHTML != '🌻')
      return;

    if (bomb.includes(e)) {
      playsound(noise);
      for (let i = 0; i < 25; i++) {
        const bb = document.getElementById(i);
        if (bomb.includes(i)) {
          bb.innerHTML = '🚫';
        }
        else {
          bb.innerHTML = '⭐';
        }
      }
    }
    else {
      playsound(success);
      val.innerHTML = '⭐';
    }


  }

  function reset() {

    for (let i = 0; i < 25; i++) {
      const bb = document.getElementById(i);
      bb.innerHTML = '🌻';
    }
    bomb = [];
    while (bomb.length != 5) {
      const a = Math.round(Math.random() * 100) % 25;
      if (bomb.includes(a))
        continue;
      else
        bomb.push(a);

    }

  }
  return (

    <>
      <div className='mainBody'>
        <div id="mainBox" > {boxes} </div>
        <button className='btn' onClick={reset}>Reset</button>
      </div>
    </>

  )
}
export default Square