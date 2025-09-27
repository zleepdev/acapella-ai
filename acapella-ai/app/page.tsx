"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge badge-primary mb-4 animate-float">Новые Функции Доступны</div>
          <h1 className="heading text-gradient mb-6">
            Оптимизируйте Рабочие Процессы с Помощью ИИ
          </h1>
          <p className="text-muted text-lg mb-8">
            Автоматизируйте процесс разработки с помощью интеллектуальных инструментов, созданных для современных команд.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="button button-primary animate-pulse-slow">Начать Бесплатно</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-card">
            <div className="stat-number">100К+</div>
            <div className="text-muted">Активных Пользователей</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="text-muted">Уровень Удовлетворенности</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50М+</div>
            <div className="text-muted">Автоматизированных Задач</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="badge badge-secondary mb-4">Возможности</div>
          <h2 className="heading">Почему Acapella?</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Откройте для себя будущее автоматизации рабочих процессов с нашими передовыми технологиями
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 animate-float">
            <div className="feature-icon bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Молниеносная Скорость</h3>
            <p className="text-muted">Испытайте высокую производительность с нашей оптимизированной инфраструктурой.</p>
          </div>

          <div className="glass-card p-6 animate-float" style={{animationDelay: '0.2s'}}>
            <div className="feature-icon bg-secondary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Безопасность по Умолчанию</h3>
            <p className="text-muted">Корпоративный уровень безопасности встроен в каждый уровень нашей платформы.</p>
          </div>

          <div className="glass-card p-6 animate-float" style={{animationDelay: '0.4s'}}>
            <div className="feature-icon bg-tertiary/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Работает на ИИ</h3>
            <p className="text-muted">Интеллектуальная автоматизация, которая учится и адаптируется к вашему рабочему процессу.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading mb-6">Готовы Улучшить Свои Рабочие Процессы?</h2>
          <p className="text-muted text-lg mb-8">
            Присоединяйтесь к тысячам команд, которые уже повысили свою продуктивность с Acapella!
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="button button-primary animate-pulse-slow">Начать</button>
          </div>
        </div>
      </section>
    </div>
  );
}