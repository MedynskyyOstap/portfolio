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
						className="mx-2 cursor-pointer hover:border-b-4 hover:text-green">
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
		<div className="flex items-center justify-between px-5 py-3 my-3">
			<span className="text-xl font-bold border-b-4 md:text-2xl border-green">
				{activeItem}
			</span>
			<div className="text-base font-normal md:text-xl">
				<NavItem 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					name="About" 
					route="/" 
				/>
				<NavItem 
					activeItem={activeItem} 
					setActiveItem={setActiveItem} 
					name="Projects" 
					route="/projects" 
				/>
				<NavItem
				 activeItem={activeItem} 
				 setActiveItem={setActiveItem} 
				 name="Resume" 
				 route="/resume" 
				/>
			</div>
		</div>
	)
}