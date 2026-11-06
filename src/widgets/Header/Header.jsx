import { NavLink } from "react-router-dom";
import { useCategories } from "./Header.api";
import s from "./Header.module.scss";

const renderCategoryLink = (name) => {
  const toCategory = `/category/${name}`;
  return (
    <NavLink key={name} className={s.link} to={toCategory}>
      {name}
    </NavLink>
  );
};

export const Header = () => {
  const { data: categories } = useCategories();

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <h2 className={s.title}>SHOP.CO</h2>
      </div>
      <nav className={s.nav}>
        <ul className={s.list}>
            <NavLink className={s.link} to="/">Main</NavLink>
            {categories?.map(renderCategoryLink)}</ul>
      </nav>
    </header>
  );
};
