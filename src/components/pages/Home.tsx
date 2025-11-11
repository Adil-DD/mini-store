import { useAllProductQuery } from "../../services/fakestoreApi"
import ListProduct from "../ui/ListProduct"
import { Link } from "react-router-dom"

export default function Home() {
    const {data, isLoading, isError} = useAllProductQuery()

    const featuredProducts = data?.slice(0, 4);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Добро пожаловать в Mini Store</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Откройте для себя лучшие товары по отличным ценам. 
                        Качество и надежность в каждой покупке.
                    </p>
                    <Link 
                        to="/catalog" 
                        className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Перейти в каталог
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="text-4xl mb-4">🚚</div>
                        <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                        <p className="text-gray-600">Доставка по всему миру в кратчайшие сроки</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-4xl mb-4">💯</div>
                        <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                        <p className="text-gray-600">100% оригинальные товары с гарантией</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="text-4xl mb-4">💳</div>
                        <h3 className="text-xl font-semibold mb-2">Безопасная оплата</h3>
                        <p className="text-gray-600">Защищенные платежи и конфиденциальность</p>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Популярные товары</h2>
                        <Link 
                            to="/catalog" 
                            className="text-indigo-600 hover:text-indigo-800 font-semibold"
                        >
                            Смотреть все →
                        </Link>
                    </div>
                    
                    {isLoading && (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-600">Загрузка...</p>
                        </div>
                    )}
                    
                    {isError && (
                        <div className="text-center py-12">
                            <p className="text-lg text-red-600">Ошибка загрузки товаров</p>
                        </div>
                    )}
                    
                    {featuredProducts && <ListProduct data={featuredProducts} />}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-600 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Готовы начать покупки?</h2>
                    <p className="text-lg mb-8">
                        Присоединяйтесь к тысячам довольных клиентов по всему миру
                    </p>
                    <Link 
                        to="/catalog" 
                        className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Начать покупки
                    </Link>
                </div>
            </section>
        </div>
    )
}
