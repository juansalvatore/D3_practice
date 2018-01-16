const data = [
  { date: '07/01/2017', num: 20 },
  { date: '07/02/2017', num: 37 },
  { date: '07/03/2017', num: 25 },
  { date: '07/04/2017', num: 45 },
  { date: '07/05/2017', num: 23 },
  { date: '07/06/2017', num: 33 },
  { date: '07/07/2017', num: 49 },
  { date: '07/08/2017', num: 40 },
  { date: '07/09/2017', num: 36 },
  { date: '07/10/2017', num: 27 },
]

let time_parse = d3.timeParse('%m/%d/%Y')
let time_format = d3.timeFormat('%b %e')
let chart_width = 1000
let chart_height = 400
let padding = 50
// loop through each date
data.forEach((e, i) => {
  data[i].date = time_parse(e.date)
})

// Create SVG element
let svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', chart_width)
  .attr('height', chart_height)

// Create Scales
let x_scale = d3
  .scaleTime()
  .domain([
    d3.min(data, d => {
      return d.date
    }),
    d3.max(data, d => {
      return d.date
    }),
  ])
  .range([padding, chart_width - padding * 2])

let y_scale = d3
  .scaleTime()
  .domain([
    0,
    d3.max(data, d => {
      return d.num
    }),
  ])
  // turn around values to flip canvas
  .range([chart_height - padding, padding])

let a_scale = d3
  .scaleSqrt()
  .domain([
    0,
    d3.max(data, d => {
      return d.num
    }),
  ])
  .range([5, 25])

// Create Circles
svg
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => {
    return x_scale(d.date)
  })
  .attr('cy', d => {
    return y_scale(d.num)
  })
  .attr('r', d => {
    return a_scale(d.num)
  })
  .attr('fill', '#D1AB0E')

// Create Labels
svg
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => {
    return time_format(d.date)
  })
  .attr('x', d => {
    return x_scale(d.date)
  })
  .attr('y', d => {
    return y_scale(d.num)
  })
