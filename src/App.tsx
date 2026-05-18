/**
 * Metis Landing — Data Engineering & Architecture
 */

import { motion } from "motion/react";
import { 
  Database, 
  Cpu, 
  GitBranch, 
  BrainCircuit, 
  Terminal 
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Для корректной работы анимаций после SSR
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F8FAFC] overflow-x-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 data-grid-pattern opacity-5 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0B]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center font-bold text-sm">M</div>
            <span className="font-mono text-sm tracking-[1px] text-white/50">METIS</span>
          </div>
          
          <a 
            href="https://t.me/metismode" 
            className="px-5 py-2 text-sm border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            Написать мне
          </a>
        </div>
      </header>

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero */}
          <section className="mb-28">
            <div className="uppercase tracking-[3px] text-blue-500 text-sm mb-4 font-mono">Data Engineering & Architecture</div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-black tracking-tighter leading-none mb-8">
              Строю системы,<br /> 
              которым можно <span className="text-white/30">доверять</span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl">
              Greenplum, PySpark, dbt, Anchor Modeling, Data Vault 2.0.<br />
              От сырых данных до надёжных аналитических платформ.
            </p>
          </section>

          {/* Services */}
          <section className="mb-24">
            <h2 className="uppercase text-xs tracking-widest text-white/40 mb-8">Что я делаю</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Database,
                  title: "MPP & DWH",
                  desc: "Проектирование и поддержка больших Greenplum кластеров"
                },
                {
                  icon: Cpu,
                  title: "Big Data Processing",
                  desc: "PySpark, Kafka, сложные ETL/ELT пайплайны"
                },
                {
                  icon: GitBranch,
                  title: "Data Modeling",
                  desc: "Anchor Modeling, Data Vault 2.0, гибкие архитектуры"
                },
                {
                  icon: BrainCircuit,
                  title: "Analytics & ML",
                  desc: "Внедрение моделей и аналитики в production"
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all"
                >
                  <item.icon className="w-9 h-9 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-20 border border-white/10 rounded-3xl bg-white/[0.02]">
            <Terminal className="mx-auto mb-6 text-white/30" size={72} />
            <h2 className="text-4xl font-serif tracking-tight mb-6">
              Готов обсудить ваш проект
            </h2>
            <a 
              href="https://t.me/metismode"
              className="inline-block mt-4 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all text-lg"
            >
              Написать в Telegram @metismode →
            </a>
          </section>
        </div>
      </main>

      <footer className="py-12 text-center text-white/30 text-sm font-mono">
        © 2026 Metis Architecture
      </footer>
    </div>
  );
}