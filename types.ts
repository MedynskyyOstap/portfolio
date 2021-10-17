import { IconType } from 'react-icons'

export interface IService {
	title: string;
	about: string;
	Icon: IconType
}

export interface IConfig {
	app: string;
  api_schema: string;
  api_host: string;
  api_port: string | number;
	api_url?: string;
	api_version: string;
}

export interface ISkill {
	name: string,
	level: string,
	Icon: IconType
}