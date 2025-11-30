import { useState } from "react";
import { useAllProductQuery } from "../../services/fakestoreApi";
import ListProduct from "../ui/ListProduct";
import Search from "../ui/Search";

export default function Catalog() {
  const { data, isLoading, isError } = useAllProductQuery();
  const [query, setQuery] = useState("");

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки</p>;
  // if(!data) return <p>Товар не загрузался </p>

  const filtered = (data ?? []).filter((p) =>
    p.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pb-8 ">
      <div className="flex w-full justify-between ">
        <h1 className="text-2xl mb-4">Каталог всех товаров</h1>
        <Search value={query} onChange={setQuery} />
        <div></div>
      </div>

      <ListProduct data={filtered} />
    </div>
  );
}
