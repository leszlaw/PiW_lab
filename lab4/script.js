class StudentList extends React.Component {
	state = {
		students: []
	}
	
	addStudent(student){
		this.setState({
			students: this.state.students.concat(student)
		})
	}
	
	render() {
		const listToRender = this.state.students.map( it => (
			<Student key={it} text={it} />
		))
		return(
		<ul>
		{this.state.students}
		</ul>
		);
	}	
}

const Student = (props) => (
	<>
	<li>
	<br></br>
	<p>Imie: {props.name}</p>
	<p>Opis: {props.description}</p>
	<a href={"mailto:"+props.email}>wyslij wiadomosc</a>
	</li>
	<br></br>
	</>
)

class StudentAdder extends React.Component {
	
	constructor(props){
		super();
		this.state= {
			func : props,
			name : "",
			description : "",
			email : ""
		}
	}
	
	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
		
	}
	
	handleDescChange = (event) => {
		this.setState({
			description: event.target.value
		})
	}
	
	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}
	
	createStudent(){
		if( this.state.name === "" || this.state.description === "" || this.state.emial === ""){
			return
		}
		this.state.func.func(<Student 
		key={Math.random()} 
		name={this.state.name} 
		description={this.state.description}
		email={this.state.email}/>)
		this.setState({
			name: "",
			description: "",
			email: ""
		})
	}
	
	render(){
		return(
		<>
		<form>
		<p>Dodanie nowego studenta</p>
		<div>
			<label>Imie: &nbsp;&nbsp;</label>
			<input type="text"value={this.state.name}onChange={this.handleNameChange}/>
		</div>
		<div>
			<label>Opis: &nbsp;&nbsp;</label>
			<input type="text" value={this.state.description} onChange={this.handleDescChange}/>
		</div>
		<div>
			<label>Email: &nbsp;</label>
			<input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
		</div>
		<br></br>
		<button type="button" className="btn btn-primary" onClick={this.createStudent.bind(this)}>+</button>
		<br></br><br></br><br></br><br></br>
		</form>
		</>
		);
	}
}

class Panel extends React.Component {
	
	state = {
		studentList: ""
	}
	
	addStudent(student){
		this.state.studentList.addStudent(student)
	}
	
	render(){
		return(
		<>
		<StudentAdder func={this.addStudent.bind(this)}/>
		<StudentList ref={(node) => {this.state.studentList = node}}/>
		</>
		);
	}
}
ReactDOM.render(
        <Panel/>,
        document.getElementById('root')
      );