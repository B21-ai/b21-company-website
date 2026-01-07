import Hero from './components/Hero';
import Section from './components/Section';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />

      <Section delay={0.2}>
        <p>
          Think about it. Most companies group people by skill: marketing here, ops there, product somewhere else. It made sense once, back when knowledge lived exclusively in human heads. But that way of organizing now creates friction by default. Every handoff adds confusion, every cross-functional project adds coordination overhead.
        </p>
        <p>
          The result? Days filled with meetings, emails, 'alignment' sessions, and just a tiny thin slice of time left for meaningful work.
        </p>
      </Section>

      <Section title="This isn't about replacing humans; it's about elevating them." delay={0.4}>
        <p>
          Instead of spending energy on tasks that add no real value, talented people become conductors → focusing their judgment on key decisions, edge cases, and moments of creativity.
        </p>
      </Section>

      <Section title="At B21, we're designing this new operating model." delay={0.6}>
        <p>
          Orchestrators plus deep domain specific agents, wired into the stack you already own, built for teams that want progress instead of theatre. Because we think the future of work is about fewer handoffs, fewer meetings, fewer bottlenecks; and far more clarity, intentionality, and genuine impact.
        </p>

        <JoinForm />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
