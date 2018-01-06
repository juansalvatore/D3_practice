const data = []

for (let i = 0; i < 20; i++) {
  let num = Math.floor(Math.random() * 50)
  data.push(num)
}

let chart_width = 800
let chart_height = 400
let bar_padding = 5
// create svg element
let svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', 800)
  .attr('height', 400)

// bind data and create bars
svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, index) => {
    return index * (chart_width / data.length) // 5px between each rectangle
  })
  .attr('y', d => {
    return chart_height - d * 5
  })
  .attr('width', chart_width / data.length - bar_padding)
  .attr('height', data => {
    return data * 5
  })
  .attr('fill', '#7ED26D')

// create labels
svg
  .selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => {
    return d
  })
  .attr('x', (d, index) => {
    if (d < 10) {
      return index * (chart_width / data.length) + 13
    }
    return index * (chart_width / data.length) + 9 // 5px between each rectangle
  })
  .attr('y', d => {
    if (d < 5) {
      return chart_height - d * 5 - 5
    }
    return chart_height - d * 5 + 20
  })
