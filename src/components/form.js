import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router'


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.history.push("/");
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return (
			<form className="edit-page" onSubmit={this.handleSubmit}>
				<label> name:	</label>
				<input value={this.state.title} type="text" name="title" onChange={this.handleChange} required></input>
				<label> description:</label>
				<textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>
				<input type="submit" value="submit"></input>
				<Prompt when={!this.state.title || !this.state.description}
					message={`Are you sure you want to leave page without submitting the form?`}>
				</Prompt>
			</form>
		)
	}
}

Form.propTypes = {
	key: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
}

export default withRouter(Form);