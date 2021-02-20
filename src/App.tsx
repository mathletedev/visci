import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";

export default (): JSX.Element => {
	return (
		<BrowserRouter>
			<Route path="/" component={Home} />
		</BrowserRouter>
	);
};
