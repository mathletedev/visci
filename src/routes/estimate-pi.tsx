export default (): JSX.Element => {
	return <div>{estimatePi()}</div>;
};

const estimatePi = (): number => {
	let count: number = 0;

	for (let i: number = 0; i < 1000; i++) {
		const x: number = Math.random();
		const y: number = Math.random();

		if (x * x + y * y <= 1) count++;
	}

	return count / 250;
};
