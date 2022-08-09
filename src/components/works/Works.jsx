import './works.scss'
import Typewriter from 'typewriter-effect';

export default function Works() {
  return (
    <div className='work' id="work">
      <div className='container' id="containter1">
        <div className='item'>
          <h1>Skills:</h1>
          <h3 className='type'><Typewriter
          options={{
            strings: ['JAVA', 'PYTHON','HTML/HTML5','CSS/SCSS/SASS','GIT & GITHUB PAGES', 'MYSQL', 'MANGODB', 'JAVASCRIPT', 'BOOTSTAP'],
            autoStart: true,
            loop: true,
          }}
        /></h3>  
      </div>    
      </div>
      </div>
  )
}
