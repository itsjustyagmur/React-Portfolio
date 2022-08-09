import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
       <h1>Projects</h1><br></br><br></br>
       <div className="container">
       <div className="item">
        <img src="./assets/evil.png" alt=""/>
        <a href="https://itsjustyagmur.github.io/evileye/">cafe</a>
        
      </div>
       <div className="item">
          <img src="./assets/clock.png" alt=""/>
          <a href="https://itsjustyagmur.github.io/javaclock/">Clock</a>
        </div>
        <div className="item">
          <img src="./assets/quote.png" alt=""/>
          <a href="https://itsjustyagmur.github.io/quote/">Zen</a>
        </div>
        <div className="item">
          <img src="./assets/broadway.png" alt=""/>
          <a href="https://itsjustyagmur.github.io/broadwaywebsite/">Broadway</a>
        </div>
        <div className="item">
          <img src="./assets/morroco.png" alt=""/>
          <a href="https://itsjustyagmur.github.io/Morocco/">Morocco</a>
        </div>
        <div className="item">
          <img src="./assets/trivia.jpg" alt=""/>
          <a href="https://itsjustyagmur.github.io/trivia-game/">Trivia</a>
        </div>
        <div className="item">
          <img src="./assets/classvue.png" alt=""/>
          <a href="https://itsjustyagmur.github.io/evileye/">ClassVue</a>
        </div>
        <div className="item">
          <img src="./assets/wordguess.jpg" alt=""/>
          <a href="https://itsjustyagmur.github.io/Word-Guess-Game/">Guess</a>
        </div>
       
       </div>
      
        </div>
  )
}
