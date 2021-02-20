import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ id: string }> {}

export const Topics: React.FC<Props> = ({ match }: Props): JSX.Element => {
	return (
		<div>
			<h1>Topics</h1>
			<div>Rendering topic {match.params.id}</div>
		</div>
	);
};
