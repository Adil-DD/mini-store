import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { increase, decrease, removeItem, clearCart } from "../../store/cartSlice";

export default function Basket() {
  const [open, setOpen] = useState(false);
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const count = items.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative p-2 rounded hover:bg-accent"
        aria-label="Open cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        </svg>

        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <div
            className="absolute inset-0 modal-backdrop"
            onClick={() => setOpen(false)}
          />

          {/* sidebar */}
          <aside className="absolute right-0 top-0 h-full w-96 bg-card shadow-lg p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Корзина</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="text-sm text-muted hover:underline"
                >
                  Очистить
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm hover:underline"
                >
                  Закрыть
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto space-y-4">
              {items.length === 0 && (
                <p className="text-sm text-muted">Корзина пуста</p>
              )}

              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center gap-3 border-b border-divider pb-3"
                >
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-16 h-16 object-contain bg-white rounded"
                  />

                  <div className="flex-1">
                    <div className="font-medium text-sm">
                      {it.title}
                    </div>

                    <div className="text-sm text-muted">
                      ${it.price.toFixed(2)}
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decrease(it.id))}
                        className="px-2 py-1 border border-divider rounded"
                      >
                        −
                      </button>

                      <div className="px-3 py-1 border border-divider rounded">
                        {it.quantity}
                      </div>

                      <button
                        onClick={() => dispatch(increase(it.id))}
                        className="px-2 py-1 border border-divider rounded"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch(removeItem(it.id))}
                        className="ml-2 text-sm btn-destructive px-2 py-1 rounded"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-divider pt-4">
              <div className="flex justify-between items-center font-semibold">
                <span>Итого</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="mt-3 flex gap-2">
                <button className="flex-1 btn-primary py-2 rounded">
                  Оформить
                </button>

                <button
                  onClick={() => dispatch(clearCart())}
                  className="flex-1 btn-destructive py-2 rounded"
                >
                  Опустошить
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
