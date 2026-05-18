/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Cpu, 
  Layers, 
  Terminal, 
  GitBranch, 
  FileJson, 
  BarChart3, 
  BrainCircuit, 
  Send,
  Code2,
  ChevronRight,
  ExternalLink,
  Github,
  Monitor
} from "lucide-react";
import { useState, useEffect } from "react";

const NAVIGATION = [
  { name: "Стек", href: "#stack" },
  { name: "Проекты", href: "#projects" },
  { name: "Обо мне", href: "#about" },
  { name: "Контакты", href: "#contact" },
];

const SKILLS = [
  {
    name: "Greenplum",
    category: "СУБД",
    description: "Развертывание и оптимизация массивных MPP-кластеров для аналитики.",
    icon: Database,
    color: "text-blue-400"
  },
  {
    name: "PySpark",
    category: "Обработка",
    description: "Написание распределенных заданий для обработки петабайтных датасетов.",
    icon: Cpu,
    color: "text-yellow-400"
  },
  {
    name: "dbt (Data Build Tool)",
    category: "Трансформация",
    description: "Построение надежных SQL-пайплайнов с тестированием и документацией.",
    icon: Layers,
    color: "text-orange-500"
  },
  {
    name: "Anchor Modeling",
    category: "Data Vault 2.0",
    description: "Проектирование гибких и расширяемых архитектур баз данных.",
    icon: GitBranch,
    color: "text-emerald-400"
  },
  {
    name: "Форматы данных",
    category: "Storage",
    description: "Опыт работы с Parquet, ORC, Avro. Оптимизация сжатия и схем.",
    icon: FileJson,
    color: "text-cyan-400"
  },
  {
    name: "ML & DS",
    category: "AI",
    description: "Обучение моделей и внедрение их в продуктовые пайплайны.",
    icon: BrainCircuit,
    color: "text-purple-400"
  }
];

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F8FAFC] selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Pattern */}
      <div className="fixed inset-0 data-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center font-mono font-bold text-[10px]">M</div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Metis Architecture</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://t.me/metismode" className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white/5 transition-all">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">Scalable Data Solutions</div>
              <h1 className="text-7xl md:text-8xl font-serif italic font-black mb-8 tracking-tighter leading-none uppercase">
                Expertise <span className="text-white/10 italic">In Data</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light">
                Проектирование и внедрение <span className="text-white font-medium italic">высоконагруженных систем</span> обработки данных. От MPP-архитектур до распределенных ETL-пайплайнов.
              </p>
            </motion.div>
          </section>

          {/* Capabilities Grid */}
          <section className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
              {[
                {
                  title: "DWH & MPP",
                  desc: "Развертывание и оптимизация кластеров Greenplum для аналитики петабайтного уровня.",
                  icon: Database,
                  color: "text-blue-400"
                },
                {
                  title: "Big Data Processing",
                  desc: "Агрегация и трансформация данных с использованием PySpark, dbt и Kafka.",
                  icon: Cpu,
                  color: "text-yellow-400"
                },
                {
                  title: "System Architecture",
                  desc: "Проектирование гибких моделей данных: Anchor Modeling и Data Vault 2.0.",
                  icon: GitBranch,
                  color: "text-emerald-400"
                },
                {
                  title: "Advanced Analytics",
                  desc: "Интеграция DS/ML моделей в продуктовые потоки данных и BI-визуализация.",
                  icon: BrainCircuit,
                  color: "text-purple-400"
                }
              ].map((service) => (
                <div key={service.title} className="bg-[#0A0A0B] p-10 hover:bg-white/[0.02] transition-colors group">
                  <service.icon className={`${service.color} mb-6 group-hover:scale-110 transition-transform`} size={28} />
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Deep Stack Section */}
          <section className="mb-32">
            <div className="border-l border-white/10 pl-10">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-white/30 mb-8">Technical Proficiency</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
                <div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Databases</div>
                  <div className="text-xs text-white/40 leading-relaxed space-y-1">
                    <div>Greenplum (Enterprise)</div>
                    <div>PostgreSQL</div>
                    <div>NoSQL Systems</div>
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Processing</div>
                  <div className="text-xs text-white/40 leading-relaxed space-y-1">
                    <div>PySpark & SparkSQL</div>
                    <div>dbt Core / Cloud</div>
                    <div>Kafka Streams</div>
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Modeling</div>
                  <div className="text-xs text-white/40 leading-relaxed space-y-1">
                    <div>Anchor Modeling</div>
                    <div>Data Vault 2.0</div>
                    <div>Dimensional (3NF)</div>
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Formats</div>
                  <div className="text-xs text-white/40 leading-relaxed space-y-1">
                    <div>Parquet / ORC</div>
                    <div>Avro / Protobuf</div>
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Operations</div>
                  <div className="text-xs text-white/40 leading-relaxed space-y-1">
                    <div>GitLab CI/CD</div>
                    <div>Airflow / Prefect</div>
                    <div>Dockerized envs</div>
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Intelligence</div>
                  <div className="text-xs text-white/40 leading-relaxed space-y-1">
                    <div>Feature Engineering</div>
                    <div>BI Visualization</div>
                    <div>DS/ML Logic</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call */}
          <section className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Terminal size={200} />
            </div>
            <h2 className="text-5xl font-serif italic font-black mb-8 leading-tight relative z-10">
              Построим архитектуру <br/> <span className="text-blue-500">будущего</span> вместе.
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <a 
                href="https://t.me/metismode" 
                className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105"
              >
                Связаться с архитектором (@metismode)
              </a>
            </div>
          </section>

        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-white/20 font-mono">Metis / Advanced Data Engineering</span>
          <div className="flex gap-6">
            <a href="https://t.me/metismode" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Telegram @metismode</a>
            <span className="text-[10px] uppercase tracking-widest text-white/20">© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
