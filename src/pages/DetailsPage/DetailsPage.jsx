import { ProductDetailsList } from "../../components/ProductDetailsList";
import { NavLink } from "react-router-dom";
import s from "./DetailsPage.module.scss"
export const DetailsPage = () => {
  return (
    <div className="container">
      <NavLink className={s.link} to={-1}>Назад</NavLink>
      <ProductDetailsList />
    </div>
  );
};
