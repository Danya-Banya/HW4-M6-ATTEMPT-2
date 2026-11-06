import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import s from "./ProductDetailsList.module.scss"
import { useProductDetails } from "./ProductDetails.api";
import { ProductDetailsCard } from "../ProductDetailsCard/ProductDetailsCard";

export const ProductDetailsList = () => {
  const { id: slug } = useParams();
  const { data: product, error, isError, isPending } = useProductDetails(slug);

  if (isPending) {
    return <div>Загрузка...</div>;
  }
  if (isError) {
    return <div>Ошибка при получении данных: {error}</div>;
  }
  return (
    <div className={s.ProductDetailsList}>
      <ProductDetailsCard key={slug} {...product} />
    </div>
  );
};
