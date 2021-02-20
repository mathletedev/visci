import React from "react";
import { RouteComponentProps } from "react-router-dom";
import routes from "./utils/routes.json";
import { Route } from "./utils/interfaces";

interface Props extends RouteComponentProps<{ id: string }> {}

export const Topics: React.FC<Props> = ({ history }: Props): JSX.Element => {
	return (
		<div>
			<h1>Topics</h1>
			{routes.map((route: Route) => (
				<button
					onClick={(): void => {
						history.push(`/topics/${route.id}`);
					}}
				>
					{route.name}
				</button>
			))}
		</div>
	);
};
