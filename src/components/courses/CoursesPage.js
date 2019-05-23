import React from 'react';

class CoursesPage extends React.Component{
	state = {
		course: {
			title: ""
		}
	};

  	handleChange = event => {
		const course = {...this.state.course, title: event.target.value}
		this.setState({ course }) 
	}
	
	handleSubmit = event => {
		event.preventDefault();
		alert("Niicee")
	 }

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input type="text"
					   onChange={this.handleChange.bind(this)} 
					   value={this.state.course.title}/>
			</form>
		)
	}
}

export default CoursesPage;