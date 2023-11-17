export const changeColor = (change: number) => {
    return change > 0 ? "#87f79f" : "#fa453f";
};


export const PercentageChange = ({ value }: { value: number }) => {
    const isNegative = value < 0;
    const color = isNegative ? "red" : "green";
    return <span style={{ color }}>{value}%</span>;
};