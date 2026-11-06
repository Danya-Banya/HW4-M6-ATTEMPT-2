import s from "./Product.module.scss";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { id, title, price, image } = props;
  const toProductDetails = `/products/${id}`;

  return (
    <Link className="link" to={toProductDetails}>
      <div className={s.card}>
        <div className={s.wrapper}>
          <img src={image} className={s.image} alt={title} />
        </div>
        <h3 className={s.title}>{title}</h3>
        <span className={s.price}>${price}</span>
      </div>
    </Link>
  );
};
