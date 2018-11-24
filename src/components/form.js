import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",			
			id: "",
			imageUrl: "",
		}
	}
	componentDidMount() {		
		if (this.props.match.params.id) {
			const rslt = this.props.showEditedContent(this.props.match.params.id)
			this.setState({
				title: rslt.title,
				description: rslt.description,
				key: rslt.index,
				imageUrl: rslt.imageUrl
			})		
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { title, description, imageUrl } = this.state;
		const id = this.props.match.params.id;
		this.props.onSubmit(id, title, description, imageUrl);
		this.props.history.push("/");
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return (
			<form className="edit-page" onSubmit={this.handleSubmit}>
				<label> title:	</label>
				<input value={this.state.title} type="text" name="title" onChange={this.handleChange} required></input>
				<label> description:</label>
				<textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>
				<label> image url:	</label>
				<input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} required />
				<input type="submit" value="submit"></input>
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