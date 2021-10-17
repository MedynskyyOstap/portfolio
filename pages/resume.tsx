import { Bar } from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from '../animations'

const Resume = () => {
  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Applied Mathematics
            </h5>
            <p className="font-semibold">National University “Lviv Polytechnic” (2003-2008)</p>
            <p className="my-3">
              Graduated as Master
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full Stack Developer Jr.</h5>
            <p className="font-semibold">SCIMUS</p>
            <p className="my-3">I enjoy work here and improve my skills</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume