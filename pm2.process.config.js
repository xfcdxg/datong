
var env = process.env.NODE_ENV || 'development'

module.exports = (
  {
    apps: [{
      name       : "datong",
      script     : "server.js",
      watch      : true,
      interpreter: 'node',
      env        : { "NODE_ENV": env },
      log_date_format: 'MM-DD HH:mm:ss'
    }]
  }
)
