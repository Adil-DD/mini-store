import { useAllProductQuery } from "../../services/fakestoreApi"
import ListProduct from "../ui/ListProduct"
import Search from "../ui/Search";



export default function Catalog() {
    const {data, isLoading, isError} = useAllProductQuery()
    
    if(isLoading) return <p>Загрузка...</p>;
    if(isError) return <p>Ошибка загрузки</p>;
    // if(!data) return <p>Товар не загрузался </p>

  return (
    <div className="px-24   ">
        <div className="flex w-full justify-between">
            <h1 className="text-2xl mb-4">
                Коталог всех товаров 
            </h1>
            <Search/>
        </div>

        <ListProduct data={data ?? []}/>
    </div>
  )
}
