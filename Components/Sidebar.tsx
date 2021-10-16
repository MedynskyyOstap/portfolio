import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

export const Sidebar = () => {
	return (
		<div>
			<Image
				src="https://drive.google.com/file/d/1wJcgkbhmMrkD6Mv8o--7lUyMFyLTbgO7/view?usp=sharing"
				alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
			/>
			<h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
				<span className="text-green">Medynskyy </span>
				Ostap
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Full Stack Web Developer</p>
			<a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="">
				<GiTie className="w-6 h-6"/> 
				<span>Download Resume</span>
			</a>
			<div className="flex justify-around my-5 mx-auto text-green w-9/12 md:w-full">
				<a href="">
					<AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" />
				</a>
			</div>
			<div 
				className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
				style={{ marginLeft:'-1rem', marginRight:'-1rem' }}>
				<div className="flex items-center justify-center">
					<GoLocation className="w-6 h-6" /> <span>Lviv, Ukraine</span>
				</div>
				<p className="my-2">ostapmedunskij@gmail.com</p>
				<p className="my-2">+380631420712</p>
			</div>
			<button className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none">Email Me</button>
			<button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105">Toggle Theme</button>
		</div>
	)
}