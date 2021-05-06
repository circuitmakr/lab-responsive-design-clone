import './App.css';
import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state ={
       showMenu: false
    }
  }
  handleClick = ()=>{
    this.setState({showMenu: !this.state.showMenu})
  }

render() {
  return (
    <div className="App">
      <header className="masthead">

      <nav className="navbar">

      <div className="navContainer">
        <div className="nav-bar-brand-scroll-trigger">
          <a href="#">
            <img src={"https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"} alt=''/>
          </a>
        </div>
        <button className="navbar-toggler" onClick={this.handleClick}><a href='#'>Menu</a></button>
     
        <div className="navbar-responsive-collapse">
        
          <ul className="navbar-nav text-uppercase">
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">TEAM</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
      </nav>
      {(this.state.showMenu === true)?
      <ul className="navbar-toggler-menu">
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">TEAM</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>:<></>}

      <div className="welcome-container">
        <article className="masthead-sub-heading">Welcome to Our Studio!</article>
        <article className="masthead-heading">It's Nice to Meet You</article>
        <div className="btn-primary">Tell Me More</div>
      </div>
      </header>
    </div>
  );
}
}
export default App;
