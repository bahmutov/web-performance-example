module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3003/'],
      startServerCommand: 'npm start',
      settings: {
        budgetPath: 'budget.json',
        preset: 'desktop',
        onlyCategories: 'performance',
        maxWaitForLoad: 6000,
        skipAudits: true,
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
