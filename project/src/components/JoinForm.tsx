import { motion } from 'framer-motion';


const JoinForm = () => {
    return (
        <motion.div
            className="mt-10 p-10 bg-bg-secondary rounded-2xl border border-border-primary"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl mb-[10px]">We're just getting started. Join us.</h3>
            <p className="mb-[30px] text-text-tertiary text-base">
                If this resonates, we'd love to share our early experiments, and maybe shape a pilot around your most frustrating problem.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
                <label className="block mb-2 text-xs uppercase tracking-[1px] text-text-primary font-bold">Name</label>
                <input type="text" placeholder="Your full name" className="block w-full p-4 bg-bg-tertiary border border-border-secondary rounded-lg text-text-primary mb-4 text-base outline-none focus:border-border-focus transition-colors" />

                <label className="block mb-2 text-xs uppercase tracking-[1px] text-text-primary font-bold">Email</label>
                <input type="email" placeholder="Your work email" className="block w-full p-4 bg-bg-tertiary border border-border-secondary rounded-lg text-text-primary mb-4 text-base outline-none focus:border-border-focus transition-colors" />

                <button type="submit" className="mt-[10px] px-8 py-4 bg-text-primary text-text-inverse border-none rounded-md font-bold cursor-pointer text-sm uppercase tracking-[0.5px] hover:opacity-90 transition-opacity">
                    Submit
                </button>
            </form>
        </motion.div>
    );
};

export default JoinForm;
