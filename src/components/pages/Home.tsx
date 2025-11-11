import { useAllProductQuery } from "../../services/fakestoreApi"
// import ListProduct from "../ui/ListProduct"

export default function Home() {
    const {data, isLoading, isError} = useAllProductQuery()

    if (isLoading) return <p>Загрузка...</p>;
    if (isError) return <p>Ошибка загрузки</p>;
    return (
        <div className="px-24">
            <h1 className="text-2xl mb-4" >Все товары</h1>
            {/* <ListProduct data={data}/> */}

        </div>
    )
}
