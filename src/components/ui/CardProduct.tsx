import { Link } from "react-router-dom";
import type { AllProduct } from "./ListProduct";

// interface ProductProps{
//     product: AllProduct;
// }

export default function CardProduct({ product }: { product: AllProduct }) {
  return (
    <div className=" bg-whate border rounded-lg p-4 ">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-3/4 sm:w-full mx-auto sm:m-0 h-64 bg-cover mb-4"
        />
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
      </Link>
    </div>
  );
}
