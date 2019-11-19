import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question:  this.randomNumber()
    }
  }
  
  randomNumber = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return{ value1, value2, value3, proposedAnswer};
  }

handleEvent = (e) => {
  const currectAnswer = this.buttonValue(e.target.name);
  this.props.handleAnswer(currectAnswer);
  this.setState({ question: this.randomNumber()});
}

buttonValue = value => {
  const { value1, value2, value3, proposedAnswer} = this.state.question;
  const values = (value1 + value2 + value3);
  return(
    (values === proposedAnswer && value === 'true') || 
    (values !== proposedAnswer && value === 'false')
  )
}
  
render() {
  const { value1, value2, value3, proposedAnswer} = this.state.question;
  return(
    <div>
     <div className="equation">
         <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button name="true" onClick={this.handleEvent} >True</button>
      <button name="false" onClick={this.handleEvent} >False</button>
	  <p className="text">
      	Your Score: {this.props.numCorrect}/{this.props.numQuestions}
      </p>
    </div>
  );
}
  
}

export default Score;