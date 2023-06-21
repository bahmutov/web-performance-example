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

/**
 * Returns a symbol for the score.
 * @param {number} score from 0 to 1
 */
function evalEmoji(score) {
  if (score >= 0.9) {
    return '🟢'
  }
  if (score >= 0.5) {
    return '🟧'
  }
  return '🔺'
}

const rows = []

metrics.forEach((key) => {
  const audit = results.audits[key]
  rows.push([audit.title, audit.displayValue, evalEmoji(audit.score)])
})

console.table(rows)

ghCore.summary
  .addHeading('Lighthouse Performance')
  .addTable([
    [
      { data: 'Metric', header: true },
      { data: 'Time', header: true },
      { data: 'Eval', header: true },
    ],
    ...rows,
  ])
  .addLink(
    'Trying Lighthouse',
    'https://glebbahmutov.com/blog/trying-lighthouse/',
  )
  .write()
