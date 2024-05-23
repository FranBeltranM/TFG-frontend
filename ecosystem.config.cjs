module.exports = {
  apps: [
    {
      name: 'TFG-WEB',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
