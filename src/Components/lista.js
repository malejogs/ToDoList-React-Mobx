import React,{Component} from 'react';

class Lista extends Component{

	handleKeyPress = (event) => {
		if(event.which === 13){
			this.props.add()
		}
	}

	render(){

		return(
			<div>
				<h3 id="titulo">ToDoList React-Mobx</h3>
				<input id="addInput" type="text" onKeyPress={this.handleKeyPress.bind(this)} placeholder="buy milk, go to gym, ...."/>
				<button id="addButton" onClick={this.props.add} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
					<i className="material-icons">add</i>
				</button>
				<button id="rmButton" onClick={this.props.rm} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
					<i className="material-icons">delete</i>
				</button>
				<div>
					<div className="demo-list-action mdl-list">
						{this.props.tareas}
					</div>
				</div>
			</div>
		)
	}
}

export default Lista
