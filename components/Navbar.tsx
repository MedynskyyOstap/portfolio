import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
	route: string,
	activeItem: string,
	setActiveItem: Function,
	name: string
}> = ({ activeItem, setActiveItem, name, route }) => {
	return (
		activeItem !== name ? (
			<Link href={route}>
				<a>
					<span 
						onClick={() => setActiveItem(name)}
						className="hover: text-green">
						{name}
					</span>
				</a>
			</Link>
		) : null
	)
}

export const Navbar = () => {
const [activeItem, setActiveItem] = useState<string>('')
const { pathname } = useRouter()

useEffect(() => {
	switch (pathname) {
		case '/': 
			setActiveItem('About')
			break
		case '/projects': 
			setActiveItem('Projects')
			break
		case '/resume': 
			setActiveItem('Resume')
			break
	}
},[])

	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">{activeItem}</span>
			<div className="flex space-x-5 text-lg ">
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
			</div>
		</div>
	)
}