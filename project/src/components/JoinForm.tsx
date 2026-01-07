import { motion } from 'framer-motion';


const JoinForm = () => {
    return (
        <motion.div
            className="join-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="join-title">We're just getting started. Join us.</h3>
            <p className="join-text">
                If this resonates, we'd love to share our early experiments, and maybe shape a pilot around your most frustrating problem.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
                <label className="form-label">Name</label>
                <input type="text" placeholder="Your full name" className="form-input" />

                <label className="form-label">Email</label>
                <input type="email" placeholder="Your work email" className="form-input" />

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </motion.div>
    );
};

export default JoinForm;
