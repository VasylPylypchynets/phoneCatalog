import React, { useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import '../../styles/App.scss';
import MainTitle from '../MainTitle';
import NavButton from '../NavButton';
import CardItem from '../CardItem';
import Total from '../Total';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ProductNotFound from '../ProductsNotFound';
import { loadCard, removeFromCard } from '../../store/slices/cardsSlice';
import classNames from 'classnames';
import ProductListLoader from '../ProductListLoader';

const Cart: React.FC = () => {
  const { cards, loading, error, cardsLength } = useSelector(
    (state: RootState) => state.cards,
  );

  const [isOpenCheckout, setIsOpenCheckout] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadCard());
  }, [dispatch]);

  function handleOpenCheckout() {
    setIsOpenCheckout(true);
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
  }

  function handleCloseCheckout() {
    setIsOpenCheckout(false);
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';
  }

  function handleClearAllCards() {
    setIsOpenCheckout(false);
    document.body.style.overflowY = 'auto';
    document.documentElement.style.overflowY = 'auto';

    cards.forEach(card => {
      dispatch(removeFromCard(card.card.itemId));
    });
  }

  return (
    <section className={`page__wrapper-center ${styles.cart}`}>
      {loading && !error && <ProductListLoader count={6} />}

      {error && !loading && <ProductNotFound />}

      {!error && !loading && (
        <>
          <div className={styles.cart__top}>
            <NavButton right={false}>Back</NavButton>
            <MainTitle>Cart</MainTitle>
          </div>
          <div className={styles.cart__bottom}>
            {cardsLength === 0 ? (
              <img
                src="./img/cart-is-empty.png"
                alt="Cart is empty"
                className={styles.cart__empty}
              />
            ) : (
              <>
                <div className={styles.cart__cards}>
                  {cards.map(card => (
                    <CardItem
                      key={card.card.itemId}
                      product={card.card}
                      card={card}
                    />
                  ))}
                </div>
                <Total onOpenCheckout={handleOpenCheckout} />
              </>
            )}
          </div>
        </>
      )}

      <div
        className={classNames(styles['cart__checkout-wrapper'], {
          [styles['cart__checkout-wrapper--open']]: isOpenCheckout,
        })}
      >
        <div className={styles.cart__checkout}>
          <h4 className={styles['cart__checkout-text']}>
            Checkout is not implemented yet.
            <br /> Do you want to clear the Cart?
          </h4>
          <div className={styles['cart__checkout-buttons']}>
            <button
              className={styles['cart__checkout-button']}
              onClick={handleClearAllCards}
            >
              Yes
            </button>
            <button
              className={styles['cart__checkout-button']}
              onClick={handleCloseCheckout}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
