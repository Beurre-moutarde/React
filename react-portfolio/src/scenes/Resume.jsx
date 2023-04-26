import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <section id="resume" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div style={{textAlign: 'center'}}>
          <p style={{fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: '4rem', margin: 0}}>
            <span style={{color: 'red'}}>RESUME</span>
          </p>
          <div className="flex justify-center mt-5">
            <hr style={{borderTop: '2px solid #FF4136', width: '80px', margin: '0 auto'}} />
          </div>
        </div>
        <p style={{marginTop: '1rem', marginBottom: '1rem'}}>
        resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume resume
        </p>
      </motion.div>
    </section>
    )

}

export default Resume;