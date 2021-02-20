import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }: Props): JSX.Element => {
	return (
		<div>
			<h1>Home</h1>
			<button
				onClick={() => {
					history.push("/topics");
				}}
			>
				See visualizations!
			</button>
		</div>
	);
};
