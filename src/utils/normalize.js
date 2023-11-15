export const normalize = (value, fromMin, fromMax, toMin, toMax) => {
    if (fromMax - fromMin === 0) {
        return toMax;
    }
    const normalized = (value - fromMin) / (fromMax - fromMin);
    return toMin + (toMax - toMin) * normalized;
};