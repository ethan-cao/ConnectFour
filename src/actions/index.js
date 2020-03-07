export const FILL = "fill";

export const fillCell = (column) => {
    return  {
        type: FILL,
        payload: column
    }
};