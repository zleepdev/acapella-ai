"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Docs() {
  return (
    <div className="container py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="heading text-center mb-6"
      >
        Документация
      </motion.h1>
      <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-8">
        Изучите наши подробные руководства и уроки для начала работы с рабочими процессами Acapella.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2xl mx-auto ">
        <div className="card flex flex-col">
          <h2 className="text-xl font-semibold mb-3">Начало Работы</h2>
          <p className="text-muted mb-4">Изучите основы и настройте свой первый рабочий процесс за считанные минуты с помощью нашего репозитория на GitHub'e!</p>
          <div className="flex justify-center mt-auto">
            <Link href="/docs/getting-started" className="button button-primary">
              Читать Далее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}