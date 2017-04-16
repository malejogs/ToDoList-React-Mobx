import React,{Component} from 'react';

class  Items extends Component{
	render(){
		return(
			<div>
				<div className="mdl-list__item item-list">
				<span className="mdl-list__item-primary-content">
				  <i className="material-icons">keyboard_arrow_right</i>
				  <label htmlFor={"check"+this.props.item.key}><span className="textItem">{this.props.item.item}</span></label>
				</span>
					<a className="mdl-list__item-secondary-action" href="#">
						<input type="checkbox" id={"check"+this.props.item.key} className="checkList mdl-checkbox__input" value={this.props.item.key}/>
					</a>
				</div>
				<hr/>
			</div>
		)
	}
}

export default Items
