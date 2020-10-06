const progressive = require('next-pwa')

module.exports = progressive({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
})
