import React from "react"
import ReactDOM from "react-dom"
import CiteIcon from "./icons/cite.svg"

const App = () => (
  <div>
    Hello World with one method of svg usage <img src={CiteIcon} />
  </div>

  
)


ReactDOM.render(<App />, document.getElementById("app"))
