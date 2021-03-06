import React, { Component } from "react";
import ReactDom from "react-dom";
import ReactTable from "react-table-v6";
//import "react-table-v6/react-table.css";


class App extends Component {
	render() {
		const data = [{
			name: 'Tanner Linsley',
			age: 26,
			friend: {
				name: 'Jason Maurer',
				age: 23,
			}
		},{
			name: 'Tanner Linsley2',
			age: 26,
			friend: {
				name: 'Jason Maurer2',
				age: 23,
			}
		}]
	
		const columns = [{
			Header: 'Name',
			accessor: 'name' // String-based value accessors!
		}, {
			Header: 'Age',
			accessor: 'age',
			Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		}, {
			id: 'friendName', // Required because our accessor is not a string
			Header: 'Friend Name',
			accessor: d => d.friend.name // Custom value accessors!
		}, {
			Header: props => <span>Friend Age</span>, // Custom header components!
			accessor: 'friend.age'
		}]
	
		return (
			<ReactTable	data={data}	columns={columns}	/>
		)
	}
}
ReactDom.render(<App />, document.getElementById("app"));

