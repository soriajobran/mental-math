import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numCorrect: 0,
      numQuestions: 0
    }
    
  }
  
  handleAnswer = (currectAnswer) => {
    if(currectAnswer) {
      this.setState({
        numCorrect: this.state.numCorrect + 1
      })
    }
    this.setState({
        numQuestions: this.state.numQuestions + 1
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
    		<h2>Mental Math</h2>
    		<Score 
    			question={this.state.question}
				handleAnswer={this.handleAnswer}
				numCorrect={this.state.numCorrect}
				numQuestions={this.state.numQuestions}
			/>
        </div>
      </div>
    );
  }
}

export default App;


       
