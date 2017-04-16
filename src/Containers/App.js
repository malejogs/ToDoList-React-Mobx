import React, { Component } from 'react';
import Lista from '../Components/lista'
import Items from '../Components/Items'
import varlistaData from '../Components/listaData'
import {observer} from 'mobx-react'

class App extends Component {
  render() {
  	const footer= () => (
		<footer className="footer">
			<div className="container-fluid">
				<p className="copyright pull-right">
					<i className="material-icons">code</i> with <i className="material-icons">favorite</i> by <a href="https://github.com/malejogs" target="_blank">Alejandro Gonzalez</a>
				</p>
			</div>
		</footer>
	);

  	let listTareas=[];
  	varlistaData.tareas.map((el) => {return listTareas.push(
		<Items key={el.key} item={el}/>
	)});


    return (
    	<div>
    		<Lista tareas={listTareas} add={function () {varlistaData.add()}} rm={function () {varlistaData.rm()}}/>
			{footer()}
		</div>
    );
  }
}

export default observer(App);
