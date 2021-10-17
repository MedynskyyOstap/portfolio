import { IConfig } from '../types'

const config:IConfig = {
  app: process.env.NEXT_PUBLIC_APP_MODE || 'dev',
  api_schema: process.env.NEXT_PUBLIC_API_SCHEMA || 'http',
  api_host: process.env.NEXT_PUBLIC_API_HOST || 'localhost',
  api_port: process.env.NEXT_PUBLIC_API_PORT || 3000,
	api_version: 'api'
}

const port = config.api_port ? `:${config.api_port}` : ''

config.api_url = `${config.api_schema}://${config.api_host}${port}/${config.api_version}`

module.exports = config