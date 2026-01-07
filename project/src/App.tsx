import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import JoinForm from './components/JoinForm';
import logo from './assets/b21-logo.png';

interface SectionProps {
  title?: string;
  children: ReactNode;
  delay?: number;
}

const Section = ({ title, children, delay = 0 }: SectionProps) => {
  return (
    <motion.section
      className="max-w-[600px] mx-auto px-5 py-[10px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {title && (
        <h2 className="text-[32px] md:text-[60px] leading-[1.1] mb-[30px] tracking-[-0.03em]">
          {title}
        </h2>
      )}
      <div className="text-lg [&>p]:mb-5 [&>p:last-child]:mb-0">
        {children}
      </div>
    </motion.section>
  );
};

const Hero = () => {
  return (
    <Section>
      <img src={logo} alt="B21" className="w-[120px] h-[120px] block" />
      <h1>
        Something is broken about how teams work.
      </h1>
      <br />
      <p>
        Not the people. Not the talent. But the invisible architecture that holds teams together. It's as if we built our organizations to move slowly on purpose.
      </p>
      <br />
      <h4>Think about it.</h4>
      <br />
      <p>
        Most companies group people by skill: marketing here, ops there, product somewhere else. It made sense once, back when knowledge lived exclusively in human heads. But that way of organizing now creates friction by default. Every handoff adds confusion, every cross-functional project adds coordination overhead.
      </p>

      <h4>The result?</h4>
      <br />
      <p>
        Days filled with meetings, emails, 'alignment' sessions, and just a tiny thin slice of time left for meaningful work.
      </p>

      <h4>It doesn't have to be this way.</h4>
      <br />

      <p>
        What if you had AI agents that already "know" the basic playbooks of every business function? It reimagines what teams could look like. Not as silos grouped by skill, but as fluid units aligned around clear, actionable goals.
      </p>
      <br />
      <h4>Goals first, structure second.</h4>
      <br />
      <p>
        Imagine stating a goal: "Raise customer satisfaction from 4.2 to 4.6 by next quarter", and watching it turn instantly into actions. Specialist agents make the calls, analyze sentiment, spot hidden patterns (like consistent complaints after the eighth customer visit), update guidelines, and notify managers proactively. All before a human even thinks to ask "what happened?"
      </p>

      <p>
        <span className="text-text-primary">This isn't about replacing humans; it's about elevating them.</span> Instead of spending energy on tasks that add no real value, talented people become conductors → focusing their judgment on key decisions, edge cases, and moments of creativity.
      </p>
    </Section>
  );
};

const MiddleSection = () => {
  return (
    <Section delay={0.6}>
      <h2>At B21, we're designing this new operating model.</h2>
      <br />
      <h3>Orchestrators plus deep domain specific agents, wired into the stack you already own, built for teams that want progress instead of theatre.</h3>
      <br />
      <p>
        Because we think the future of work is about fewer handoffs, fewer meetings, fewer bottlenecks; and far more clarity, intentionality, and genuine impact.
      </p>
    </Section>
  );
};

const Footer = () => {
  return (
    <Section>
      <img src={logo} alt="B21" className="w-[120px] h-[120px] block" />
      <h4>B21 is a goal-first operating system.</h4>
      <p>
        Orchestrators plus agents, wired into the stack you already own, built for teams that want progress instead of theatre.
      </p>
      <div className="w-full h-px bg-white/10 my-8" />
      <p>( © 2025 B21. All rights reserved. )</p>
    </Section>
  );
};

function App() {
  return (
    <div>
      <Hero />
      <MiddleSection />
      <Section>
        <JoinForm />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
