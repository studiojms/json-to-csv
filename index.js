// require json-2-csv module
const converter = require('json-2-csv')
const fs = require('fs')

// read JSON from a file
const todos = JSON.parse(fs.readFileSync('./data/input/data.json'))

// convert JSON array to CSV string
;(async () => {
  try {
    const csv = await converter.json2csvAsync(todos.results)

    // print CSV string
    console.log(csv)

    // write CSV to a file
    fs.writeFileSync(`./data/output/data_${new Date().getTime()}.csv`, csv)
  } catch (err) {
    console.log(err)
  }
})()