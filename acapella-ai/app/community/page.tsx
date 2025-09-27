"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Community() {
  return (
    <div className="container py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="heading text-center mb-6"
      >
        Присоединяйтесь к Нашему Сообществу
      </motion.h1>
      <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
        Общайтесь с разработчиками, делитесь опытом и создавайте лучшие рабочие процессы вместе.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6">
          <div className="feature-icon bg-primary/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1l9 18-9-4.5L3 19l9-18z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold my-4">Сообщество Telegram</h3>
          <p className="text-muted mb-8">Присоединяйтесь к нашему Telegram каналу, чтобы общаться с разработчиками, получать помощь и делиться опытом.</p>
          <div className="flex justify-center">
            <a href="https://t.me/optiflow" target="_blank" rel="noopener noreferrer" className="button button-primary">
              Присоединиться к Telegram
            </a>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="feature-icon bg-secondary/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold my-4">GitHub</h3>
          <p className="text-muted mb-6">Участвуйте в разработке Acapella, сообщайте о проблемах и изучайте наши проекты с открытым исходным кодом.</p>
          <div className="flex flex-col gap-4">
            <a href="https://github.com/zleepdev" target="_blank" rel="noopener noreferrer" className="button button-primary">
              zleepdev a.k.a. галлюцинации
            </a>
            <a href="https://github.com/printhiegprog" target="_blank" rel="noopener noreferrer" className="button button-primary">
              egprog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}