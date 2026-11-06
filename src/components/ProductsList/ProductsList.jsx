import s from "./ProductsList.module.scss";
import { useProductsList } from "./ProductsList.api";
import { ProductCard } from "../ProductCard/ProductCard";
export const ProductsList = () => {
  const { data: products } = useProductsList();
  return (
    <div className="container">
      <h2>Main page</h2>
      <section className="list">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};
