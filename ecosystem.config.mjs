module.exports = {
  name: 'TFG-WEB',

  // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/

  script: 'npm run build && npm run start',
  watch: true,
  exec_mode: 'cluster',
  instances: 'max'
}