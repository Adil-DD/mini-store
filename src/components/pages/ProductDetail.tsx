import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { useParams } from "react-router-dom";
import { useGetStaffProductQuery } from "../../services/fakestoreApi";
import type { AllProduct } from "../ui/ListProduct";

export default function ProductDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data: product, isLoading, isError } = useGetStaffProductQuery(productId);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomPosition, setZoomPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  if (isLoading) return <p className="container mx-auto p-6">Загрузка...</p>;
  if (isError) return <p className="container mx-auto p-6">Ошибка загрузки товара</p>;
  if (!product) return <p className="container mx-auto p-6">Товар не найден</p>;

  const images = [product.image, product.image, product.image];
  const mainImage = selectedImage ?? images[0];

    // позиция курсора при зуме
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

    // клик для включения/выключения зума
  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex lg:items-start lg:gap-8">
                {/* Левая часть: изображения + описание */}
        <div className="lg:flex-1">
          <div className="flex flex-col lg:flex-row gap-6">
                        {/* Миниатюры */}
            <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(src)}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded overflow-hidden border ${
                    mainImage === src ? "ring-2 ring-indigo-600" : "border-gray-200"
                  }`}
                >
                  <img src={src} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Главное изображение */}
            <div
              className="order-1 lg:order-2 flex-1 flex items-center justify-center rounded relative overflow-hidden cursor-pointer"
              onClick={toggleZoom}
              onMouseMove={handleMouseMove}
            >
              <img
                src={mainImage}
                alt={product.title}
                className={`transition-transform duration-200 object-contain ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      }
                    : {}
                }
              />

              {/* Подсказка */}
              {!isZoomed && (
                <div className="absolute bottom-3 right-3 bg-gray-900/70 text-white text-xs px-2 py-1 rounded">
                  Нажмите для увеличения
                </div>
              )}
            </div>
          </div>

          {/* Описание */}
          <div className="mt-8 prose max-w-none">
            <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
            <p className="text-muted mt-3">{product.description}</p>
          </div>
        </div>

        {/* Правая панель */}
        <aside className="mt-6 lg:mt-0 lg:w-[340px]">
          <div className="bg-card lg:sticky lg:top-24 border rounded p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-muted text-sm ">Быстрая покупка</div>
                <div className="text-2xl font-bold mt-1">{product.title}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-3xl font-extrabold text-indigo-600">${product.price}</div>
              <div className="text-muted text-sm mt-1">(Цена указана в USD)</div>
            </div>

            <div className="mt-6">
              <label className="text-muted text-sm mb-2 block">Количество</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 border rounded">-</button>
                <div className="px-4 py-1 border rounded">{quantity}</div>
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1 border rounded">+</button>
              </div>
            </div>

            <button
              onClick={() => dispatch(addItem({ id: product.id, title: product.title, price: product.price, image: product.image, quantity }))}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition"
            >
              Добавить в корзину
            </button>

            <div className="text-muted mt-4 text-sm">
              <p>Доставка: 1–3 рабочих дня</p>
              <p className="mt-1">Возврат в течение 14 дней</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
