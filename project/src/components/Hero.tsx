import { motion } from 'framer-motion';
import logo from '../assets/b21-logo.png';


const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={logo} alt="B21" className="brand-logo" />

        <h1 className="hero-title">
          Something is broken about how teams work.
        </h1>

        <p className="hero-text">
          Not the people. Not the talent. But the invisible architecture that holds teams together. It's as if we built our organizations to move slowly on purpose.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
