let data = [
  [400, 200],
  [210, 140],
  [722, 300],
  [70, 160],
  [250, 50],
  [110, 280],
  [699, 225],
  [90, 220],
]
let chart_width = 800
let chart_height = 400
let padding = 50

// Create SVG element
let svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height)

// Create Scales
let x_scale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, d => {
      return d[0]
    }),
  ])
  .range([padding, chart_width - padding * 2])

let y_scale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, d => {
      return d[1]
    }),
  ])
  // turn around values to flip canvas
  .range([chart_height - padding, padding])

let r_scale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, d => {
      return d[1]
    }),
  ])
  .range([5, 30])

let a_scale = d3
  .scaleSqrt()
  .domain([
    0,
    d3.max(data, d => {
      return d[1]
    }),
  ])
  .range([5, 25])

// CREATE AXIS
let x_axis = d3.axisBottom(x_scale)
svg
  .append('g')
  .attr('class', 'x-axis')
  .attr('transform', 'translate(0,' + (chart_height - padding) + ')')
  .call(x_axis)

// Create Circles
svg
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => {
    return x_scale(d[0])
  })
  .attr('cy', d => {
    return y_scale(d[1])
  })
  .attr('r', d => {
    return a_scale(d[1])
  })
  .attr('fill', '#D1AB0E')

// Create Labels
svg
  .append('g')
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => {
    return d.join(',')
  })
  .attr('x', d => {
    return x_scale(d[0])
  })
  .attr('y', d => {
    return y_scale(d[1])
  })
