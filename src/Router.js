import React from "react";
import { Switch, Route } from "react-router";
import Initiative from "./components/Initiative";
import Dungeonizer from "./components/Dungeonizer";
import Home from "./components/Home";
import Monsters from "./components/Monsters";

const Router = () => {
	console.log("env process in router", process.env);
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/initiative" component={Initiative} />
			<Route path="/dungeonizer" component={Dungeonizer} />
			<Route path="/monsters" component={Monsters} />
		</Switch>
	);
};

export default Router;
