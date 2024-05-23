module.exports = {
  apps: [
    {
      name: 'TFG-WEB',
      script: 'npm run build && npm run start',
      watch: true,
      exec_mode: 'cluster',
      instances: 'max'
    }
  ]
}