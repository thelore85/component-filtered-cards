
import React, { Component } from "react";
import CardList from "../components/CardList.js";
import Selector from '../components/Selector.js';
import { pjt } from '../db.js';


//BUILD THE COMPONENT
class App extends Component {

	//DEFINE THE STATE
	constructor(){
		super()
		this.state = {
			db: pjt,
			selection: '',
		}
	}
	

	// ON-CHANGE ACTION: SELECT THE PROJECT FILTER
	onSelectorChange = (event) => {
		let newSelection = event.target.value;
		this.setState({selection: newSelection})
	} 

	//RENDER THE COMPONENT
	render(){
		//generate the content to pass to the CardList Component
		var filteredProject = this.state.db.filter( (value, index) =>{ //value represent the object of the db array
				return value.tag.toString().includes(this.state.selection)}
		)
		//call component to generate the html
		return(
			<div>
				<Selector selectorChange={this.onSelectorChange}/>
				<CardList project={filteredProject} />
			</div>
		)
	}
}


export default App