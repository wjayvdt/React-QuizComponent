import React, {Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
	constructor(props){
		super(props)
		this.state = {incorrectAnswer: false}
	}
	
	render() {
		return (
			<main>
				<section>
				  <p>{this.props.quiz_question.instruction_text}</p>
				</section>
				<section className="buttons">
				  <ul>
				  {this.props.quiz_question.answer_options.map((answer_option, index) => (
					<QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
				  ))}					
				  </ul>
				</section>
				{this.state.incorrectAnswer ? <p class="error">Sorry, that is not right!</p> : null}
			</main>
		)
	}
	
	handleClick(buttonText) {
		if(buttonText === this.props.quiz_question.answer) { 
			this.setState((state) => {
				return {incorrectAnswer: false}
			})
			this.props.showNextQuestionHandler()
		} else {
			this.setState((state) => {
				return {incorrectAnswer: true}
			})			
		}
	}
}

export default QuizQuestion