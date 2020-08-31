/** @format */

import React, {useState, useRef, useEffect} from "react";
import StrainList from "./StrainList";
import { v4 as uuidv4 } from 'uuid';

function App() {
	return (
		<>
			<StrainList />
			<input type="text" placeholder="e.g. OG Kush" />
			<button>Add to Stash</button>
			<button>Clear Smoked Strains </button>
			<div>Smoked away 0 strains.</div>
		</>
	);
}

export default App;
