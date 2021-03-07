
import React, { Component } from 'react'
import Button from './components/Button';
import cookie from './assets/biscoito.png';
import './style.css';
class App extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            phrase: ''
        }
        this.breakCookie = this.breakCookie.bind(this);
        this.sentences = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A fresh start will put you on your way.', 
        'A friend asks only for your time not your money.', 'A friend is a present you give yourself.', 'A gambler not only will lose what he has, but also will lose what he doesn’t have.']
    }

    breakCookie(){
        let state = this.state
        let randomNumber = Math.floor(Math.random() * this.sentences.length);
        state.phrase = this.sentences[randomNumber];
        this.setState({state});
    }
    render(){
        return(
            <div className="container">
                <img  src={cookie} alt="Cookie" className="img"/>
                <Button name="Open cookie" action={this.breakCookie}/>
                <h3 className="phrase">{this.state.phrase}</h3>
            </div>
        )
    }
}
export default App;