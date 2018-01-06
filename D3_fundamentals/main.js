// const dataset = [10, 20, 30, 40, 50]
d3.csv('data.csv', (err, data) => {
  if (err) {
    return console.log(err)
  }
  // console.log(data)
  // generate(data)
})

// json

d3.json('data.json', (err, data) => {
  if (err) {
    return console.log(err)
  }
  generate(data)
})

generate = dataset => {
  let el = d3
    .select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(data => {
      return 'This paragraph is binded to the number ' + data
    })
    .attr('class', data => {
      switch (data) {
        case 10:
          return 'lowest'
          break
        case 50:
          return 'highest'
          break
        default:
          return 'normal'
          break
      }
    })
    // .attr('class', 'bar')
    .classed('lessThanTwentyFive', data => {
      return data < 25
    })
    .style('color', data => {
      if (data > 25) {
        return 'red'
      } else {
        return 'blue'
      }
    })

  console.log(el)

  // selection methods (.select, .append), transformation methods (.attr, .text)
}
