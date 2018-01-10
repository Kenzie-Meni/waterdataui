const { extent } = require('d3-array');
const { scaleLog, scaleTime } = require('d3-scale');


function createScales(data, xSize, ySize) {
    // Calculate max and min for data
    const xExtent = extent(data, d => d.time);
    const yExtent = extent(data, d => d.value);

    // Add 20% of the y range as padding on both sides of the extent.
    let yPadding = 0.2 * (yExtent[1] - yExtent[0]);
    yExtent[0] -= yPadding;
    yExtent[1] += yPadding;

    // xScale is oriented on the left
    const xScale = scaleTime()
        .range([0, xSize])
        .domain(xExtent);

    // yScale is oriented on the bottom
    const yScale = scaleLog()
        .nice()
        .range([ySize, 0])
        .domain(yExtent);

    return {xScale, yScale};
}


module.exports = {createScales};
