module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3003/'],
      startServerCommand: 'npm start',
      settings: {
        'budget-path': 'budget.json',
        preset: 'desktop',
        'only-categories': 'performance',
        'max-wait-for-load': 6000,
        'skip-audits': true,
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
