import React from "react";

export default function Contacts() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="bg-card p-8 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-6">Контакты</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted">
          <div>
            <h4 className="font-semibold mb-2 text-default">Адрес</h4>
            <p>Казахстан, Астана</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-default">Телефон</h4>
            <p>+7 (999) 777-77-77</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-default">Email</h4>
            <p>adil.ashkenov@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
