import { GetServerSidePropsContext, NextPage } from 'next'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
// import { api_url } from '../configs/config'

const About: NextPage = () => {
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h6 className="my-3 text-base font-medium">
        I finished National University “Lviv Polytechnic” in 2008 year with Graduated as Master. I have 2+ years of experience in
        Full Stack Web Development.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger}>
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
//   const res = await fetch(`${api_url}/services`)
//   const data = await res.json()
//   console.log(data)

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
