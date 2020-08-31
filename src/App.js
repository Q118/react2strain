/** @format */

import React, { useState, useRef, useEffect } from "react";
import StrainList from "./StrainList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "strainApp.strains";

function App() {
	const [strains, setStrains] = useState([]);
	const strainNameRef = useRef();

	useEffect(() => {
		const storedStrains = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

		if (storedStrains) setStrains(storedStrains);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(strains));
	}, [strains]);

	function toggleStrain(id) {
		//new list equal to copy of the current todos list
		//so that we dont change our current to do list, creating a copy
		const newStrains = [...strains];
		//find todo with an id thats equal to the id of one toggled
		const strain = newStrains.find((strain) => strain.id === id);

		strain.smoked = !strain.smoked;

		setStrains(newStrains);
	}

	function handleAddStrain() {
		// set list of strains to be the copy f list with one more added
		const name = strainNameRef.current.value;
		if (name === "") return;
		console.log(name);

		setStrains((prevStrains) => {
			return [...prevStrains, { id: uuidv4(), name: name, smoked: false }];
		});

		strainNameRef.current.value = null;
	}

	//function to clear all the ones that are done
	function handleClearStrains() {
		// set todo list = to the new to do list that does not contain any completed ones
		const newStrains = strains.filter((strain) => !strain.smoked);
		setStrains(newStrains);
	}

	return (
		<>
			<StrainList strains={strains} toggleStrain={toggleStrain} />
			<input ref={strainNameRef} type="text" placeholder="e.g. OG Kush" />
			<button onClick={handleAddStrain}>Add to Stash</button>
			<button onClick={handleClearStrains}>Clear Smoked Strains </button>
			<div>
				Smoked away {" "}
				{strains.filter((strain) => strain.smoked).length}
				{" "}strains.
			</div>
		</>
	);
}

export default App;
