const lambdaDepth = (k) => {
    const depth = () => {
        if (k === 0) return "edabit";
        k--;
        return depth;
    };

    return depth();
};
