import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';
import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={s.info}>
        <div className={s.user}>
          <div
            className={s.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={s.username}>Guest</div>
        </div>

        <form className={s.form}>
          <div className={s.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={s.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange={() => {}}
              value="{searchValue}"
            />
          </div>

          {false && <div className={s.box}></div>}
        </form>

        <div className={s.account}>
          <Link to={ROUTES.HOME} className={s.favourites}>
            <svg className={s['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={s.cart}>
            <svg className={s['icon-cart']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>

            <span className={s.count}>cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
