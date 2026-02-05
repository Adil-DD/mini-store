import React from "react";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Заголовок */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">О нас</h1>
        <p className="text-muted max-w-2xl mx-auto">
          MiniStore — это современный интернет-магазин с широким выбором
          качественных товаров по доступным ценам и быстрой доставкой.
        </p>
      </section>

      {/* Основная информация */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-3">Кто мы</h3>
          <p className="text-muted">
            Мы команда энтузиастов, которая стремится сделать онлайн-покупки
            простыми, удобными и приятными для каждого клиента.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-3">Что мы продаём</h3>
          <p className="text-muted">
            В нашем магазине вы найдёте одежду, электронику, украшения и товары
            для дома — всё в одном месте.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-3">Почему мы</h3>
          <p className="text-muted">
            Мы предлагаем честные цены, быструю доставку и поддержку клиентов
            на каждом этапе покупки.
          </p>
        </div>
      </section>

      {/* Контакты */}
      
    </main>
  );
}
