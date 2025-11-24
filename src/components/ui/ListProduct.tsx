import CardProduct from "./CardProduct";

export interface AllProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ListProductProps {
  data: AllProduct[];
}

export default function ListProduct({ data }: ListProductProps) {
  if (!data) return <p>Загрузка...</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
