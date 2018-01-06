const dataset = [10, 20, 30, 40, 50]

let el = d3
  .select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p')
  .text(data => {
    return 'This paragraph is binded to the number ' + data
  })
  // .append('p')
  // .attr('class', 'foo')
  // .attr('class', 'bar')
  // .classed('foo', true)
  // .classed('bar', true)
  // .text('Hello World')
  .style('color', data => {
    if (data > 25) {
      return 'red'
    } else {
      return 'blue'
    }
  })

console.log(el)

// selection methods (.select, .append), transformation methods (.attr, .text)
