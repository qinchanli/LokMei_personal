import { Mail } from 'lucide-react';
import { collections } from '@/data/portfolio';

const services = collections.map((c) => c.title);

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 lg:py-32 px-6 lg:px-10 scroll-mt-20 border-t border-stone-200"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sky-700 text-xs font-medium uppercase tracking-[0.4em] mb-4">
            About
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-8">
            About Me
          </h2>
          <div className="space-y-5 text-stone-600 leading-relaxed">
            <p>
              I graduated from Chelsea College of Arts, 
              University of the Arts London, majoring in Fine Art. 
              My artistic practice focuses on externalising the absolute inner feelings of the self. 
              My expression spans multiple disciplines—sculpture, 3D modelling, and traditional painting. 
              The one constant is my use of different approaches and perspectives to reveal the authentic self of the soul. 
              This is a confession of truth to myself, at once a body of work and a record.
            </p>
          </div>
        </div>

        <div className="md:border-l md:border-stone-200 md:pl-12">
          <p className="text-sky-700 text-xs font-medium uppercase tracking-[0.4em] mb-4">
            Capabilities
          </p>
          <h2 className="font-serif text-2xl text-stone-900 mb-8">
            Sections
          </h2>
          <ul className="space-y-3 mb-10">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-center gap-3 text-stone-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                {s}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6">
            <p className="text-sky-700 text-xs font-medium uppercase tracking-[0.4em] mb-4">
              Let's Talk
            </p>
            <a
              href="mailto:lokmei12@163.com"
              className="inline-flex items-center gap-2 text-stone-900 text-lg font-medium hover:text-sky-700 transition-colors"
            >
              <Mail size={20} />
              lokmei12@163.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
