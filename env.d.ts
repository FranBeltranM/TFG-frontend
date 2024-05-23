namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    API_BASE: string
    DEBUG_MODE: 'true' | 'false'
  }
}
