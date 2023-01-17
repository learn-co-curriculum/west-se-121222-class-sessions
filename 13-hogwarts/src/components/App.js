import React, { useState } from "react";
import Header from "./Header";
import HogList from './HogList'
import Filter from './Filter'

import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs)
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name")

	const hogsToDisplay = hogList
	  .sort((hog1, hog2) => {
		if (sortBy === "name") {
			return hog1.name.localeCompare(hog2.name)
		} else {
			return hog1.weight - hog2.weight
		}
	  })
	  .filter(hog => showGreased ? hog.greased : true)

	return (
		<div className="App">
			<Header />
			<Filter 
				showGreased={showGreased}
				onCheckGreased={setShowGreased}
				sortBy={sortBy}
				onChangeSortBy={setSortBy}
			/>
			<HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
