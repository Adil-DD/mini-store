export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 w-full">
      <div className="container mx-auto px-4">
        {/* Верхняя часть футера */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О магазине */}
          <div>
            <h3 className="text-xl font-bold mb-4">MiniStore</h3>
            <p className="text-gray-400">
              Лучший выбор товаров по доступным ценам с быстрой доставкой.
            </p>
          </div>

          {/* Категории */}
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Одежда</a></li>
              <li><a href="#" className="hover:text-white">Электроника</a></li>
              <li><a href="#" className="hover:text-white">Украшения</a></li>
              <li><a href="#" className="hover:text-white">Для дома</a></li>
            </ul>
          </div>

          {/* Помощь */}
          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Доставка</a></li>
              <li><a href="#" className="hover:text-white">Возврат</a></li>
              <li><a href="#" className="hover:text-white">Оплата</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i> Астана
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i> +7 (999) 777-77-77
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i> adil.ashkenov@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 MiniStore.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-vk text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-telegram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
