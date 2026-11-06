import s from "./ProductDetailsCard.module.scss";
export const ProductDetailsCard = (props) => {
  const { title, price, image, rating, category,description } = props;
  const { rate, count } = rating;
  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <img src={image} className={s.image} alt={title} />
      </div>
      <div className="content-wrapper">
        <h1 className={s.title}>{title}</h1>
        <p className={s.description}>{description}</p>
        <span className={s.price}>Price: ${price}</span>
        <h2>Rating: {rate}/5</h2>
        <h2>Quantity: {count}</h2>
      </div>
    </div>
  );
};
