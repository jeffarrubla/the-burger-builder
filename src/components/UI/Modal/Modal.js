import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

	render(){
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div 
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(-120vh)' : 'translateY(-1000vh)',
						opacity: this.props.show ? '1' : '0'
					}}
					>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired
};


export default Modal;