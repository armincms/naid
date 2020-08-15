Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'naid',
      path: '/naid',
      component: require('./components/Tool'),
    },
  ])
})
