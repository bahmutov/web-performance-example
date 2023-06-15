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
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
      },
    },
  },
}
