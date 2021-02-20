import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Topics } from "./Topics";

export default (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/topics/:id" exact component={Topics} />
				<Route
					path="/"
					render={(): JSX.Element => <div>404 Page Not Found</div>}
				/>
			</Switch>
		</BrowserRouter>
	);
};
