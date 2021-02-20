import React from "react";
import { RouteComponentProps } from "react-router-dom";
import routes from "./utils/routes.json";
import { Route } from "./utils/interfaces";

interface Props extends RouteComponentProps<{ id: string }> {}

export const Visualization: React.FC<Props> = ({
	match
}: Props): JSX.Element => {
	const route: Route | undefined = routes.find(
		(route: Route) => route.id === match.params.id
	);
	if (!route) return <div>404 Page Not Found</div>;

	const pull: () => JSX.Element = require(`./routes/${route.id}`).default;

	return (
		<div>
			<h1>Visualization</h1>
			<div>Rendering visualization {route.name}</div>
			{pull()}
		</div>
	);
};
