import * as React from 'react';
import Typewriter from 'typewriter-effect';
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
       
      <div className='right'>
        <div className='wrapper'>
      <h2>Hello, I'm</h2>
      <h1>Yagmur Guzeldereli</h1>
      <h3><Typewriter
            options={{
              strings: ['A Web Developer', 'A Web Designer'],
              autoStart: true,
              loop: true,
            }}
          /></h3>
        </div>
      </div>
        </div>
  )
}
