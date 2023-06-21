const ghCore = require('@actions/core')
const results = require('./lighthouse-results.json')
const metrics = [
  'first-contentful-paint',
  'interactive',
  'speed-index',
  'total-blocking-time',
  'largest-contentful-paint',
  'cumulative-layout-shift',
]

const rows = []

metrics.forEach((key) => {
  const audit = results.audits[key]
  rows.push([audit.title, audit.displayValue])
})

console.table(rows)

ghCore.summary
  .addHeading('Lighthouse Performance')
  .addTable([
    [
      { data: 'Metric', header: true },
      { data: 'Time', header: true },
    ],
    ...rows,
  ])
  .write()
