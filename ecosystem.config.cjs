module.exports = {
  apps: [
    {
      name: 'TFG-WEB',
      script: 'npm run start',
      exec_mode: 'cluster',
      instances: 'max'
    }
  ]
}