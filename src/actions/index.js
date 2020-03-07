export const FILL = "add";

export const fillCell = (column) => {
    return  {
        type: FILL,
        payload: column
    }
};