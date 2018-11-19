import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			descriptoin: "",
			imageUrl: "",
			id: ""
		}
	}
	componentDidMount() {
		if (this.props.match.params.id) {
			const rslt = this.props.showEditedContent(this.props.match.params.id)
			this.setState({
				title: rslt.title,
				descriptoin: rslt.descriptoin,
				key: rslt.index,
				imageUrl: rslt.imageUrl
			})
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { title, descriptoin } = this.state;
		const id = this.props.match.params.id;
		this.props.onSubmit(id, title, "", descriptoin);
		this.props.history.push("/");
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return (
			<form className="edit-page" onSubmit={this.handleSubmit}>
				<label> title:
	            <input value={this.state.title} type="text" name="title" onChange={this.handleChange} required></input>
				</label>
				<label> description:
		        <textarea value={this.state.descriptoin} name="descriptoin" onChange={this.handleChange}></textarea>
				</label>
				<input type="file" name="imageUrl" onChange={this.handleChange} />
				<input type="submit" value="submit"></input>

			</form>
		)
	}
}

export default withRouter(Form);