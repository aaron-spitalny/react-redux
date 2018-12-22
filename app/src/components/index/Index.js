import React, { Component } from "react";
import { connect } from "react-redux";
import { changeName } from "../../redux/actions/indexActions";

function Index(props) {
	return (
		<div>
			<h1>Hello {props.name}</h1>
			<label for="name">{"Name "}</label>
			<input
				type="text"
				id="name"
				onChange={e => props.changeName(e.target.value)}
			/>
		</div>
	);
}

const mapStateToProps = state => ({
	name: state.index.name
});

export default connect(mapStateToProps, { changeName })(Index);
