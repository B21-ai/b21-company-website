import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    title?: string;
    children: ReactNode;
    delay?: number;
}

const Section = ({ title, children, delay = 0 }: SectionProps) => {
    return (
        <motion.section
            className="section-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        >
            {title && (
                <h2 className="section-title">
                    {title}
                </h2>
            )}
            <div className="section-content">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
