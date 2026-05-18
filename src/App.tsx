/**
 * Metis Landing Page
 * Advanced Data Engineering
 */

import { motion } from "motion/react";
import { 
  Database, Cpu, Layers, GitBranch, FileJson, 
  BrainCircuit, Terminal 
} from "lucide-react";
import { useState, useEffect } from "react";

const NAVIGATION = [
  { name: "Стек", href: "#stack" },
  { name: "Проекты", href: "#projects" },
  { name: "Обо мне", href: "#about" },
  { name: "Контакты", href: "#contact" },
];

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F8FAFC]">
      {/* Background */}
      <div className="fixed inset-0 data-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-mono font-bold text-xs">M</div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">Metis Architecture</span>
          </div>

          <a 
            href="https://t.me/metismode" 
            className="px-5 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Написать
          </a>
        </div>
      </header>

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero */}
          <section className="mb-24">
            <div className="text-blue-500 font-mono text-xs uppercase tracking-[0.125em] mb-4">Data Engineering • Architecture</div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-black tracking-tighter leading-none mb-6">
              Строю <span className="text-white/20">надёжные</span><br />системы обработки данных
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl">
              Greenplum, PySpark, dbt, Anchor Modeling, Data Vault.<br />
              От идеи до продакшена.
            </p>
          </section>

          {/* Services */}
          <section className="mb-20 grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {[
              { title: "DWH & MPP", desc: "Greenplum кластеры высокой производительности", icon: Database },
              { title: "Big Data", desc: "PySpark + Kafka + dbt пайплайны", icon: Cpu },
              { title: "Моделирование", desc: "Anchor Modeling и Data Vault 2.0", icon: GitBranch },
              { title: "Analytics", desc: "ML в продакшене и BI", icon: BrainCircuit },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0B] p-9 hover:bg-white/[0.015] transition-all group">
                <item.icon className="text-blue-400 mb-5 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Final CTA */}
          <section className="text-center py-20 border border-white/10 rounded-3xl bg-white/5">
            <Terminal className="mx-auto mb-6 opacity-30" size={80} />
            <h2 className="text-5xl font-serif font-black tracking-tight mb-6">
              Готовы к следующему уровню?
            </h2>
            <a 
              href="https://t.me/metismode" 
              className="inline-block px-10 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all active:scale-95"
            >
              Связаться в Telegram → @metismode
            </a>
          </section>
        </div>
      </main>

      <footer className="py-12 text-center text-xs text-white/30 font-mono tracking-widest">
        © 2026 Metis Architecture
      </footer>
    </div>
  );
}