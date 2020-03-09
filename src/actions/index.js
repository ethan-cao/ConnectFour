export const FILL = "fill";
export const RESTART = "restart";

export const fillCell = (column) => ({
	type: FILL,
	payload: column
});

export const restart = () => ({
	type: RESTART,
	payload: null
});
