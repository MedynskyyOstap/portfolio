import { IconType } from 'react-icons'

export interface IService {
	title: string
	about: string
	Icon: IconType
}

export interface IConfig {
	app: string
  api_schema: string
  api_host: string
  api_port: string | number
	api_url?: string
	api_version: string
}

export interface ISkill {
	name: string
	level: string
	Icon: IconType
}

export interface IProject {
	name: string
	description: string
	image_path: string
	deployed_url: string
	github_url: string
	category: Category[]
	key_techs: string[]
}

export type Category = "react" | "vue" | "node" | "express" | "django" | "mongo" | "mysql"