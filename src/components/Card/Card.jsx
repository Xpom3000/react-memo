import { CROSS_SUIT, DIAMONDS_SUIT, HEARTS_SUIT, SPADES_SUIT } from "../../const";
import styles from "./Card.module.css";

import heartsImageUrl from "./images/hearts.svg";
import crossImageUrl from "./images/cross.svg";
import spadesImageUrl from "./images/spades.svg";
import diamondsImageUrl from "./images/diamonds.svg";
import cardShirtImageUrl from "./images/сard-shirt.svg";

import cn from "classnames";

const images = {
  [HEARTS_SUIT]: heartsImageUrl,
  [CROSS_SUIT]: crossImageUrl,
  [SPADES_SUIT]: spadesImageUrl,
  [DIAMONDS_SUIT]: diamondsImageUrl,
};

const OpenCard = ({ rank, suit }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.rank}>
          <div className={styles.rankContainer}>
            {rank}
            <img className={styles.rankImage} src={images[suit]} alt={suit} />
          </div>
        </div>
        <div className={styles.suit}>
          {images[suit] && <img className={styles.suitImage} src={images[suit]} alt={suit} />}
        </div>
        <div className={cn(styles.flippedRank, styles.rank)}>
          <div className={styles.rankContainer}>
            {rank}
            <img className={styles.rankImage} src={images[suit]} alt={suit} />
          </div>
        </div>
      </div>
    </div>
  );
};


const ClosedCard = ({ onClick }) => (
  <button onClick={onClick} className={cn(styles.card, styles.cardClosed)}>
    <img src={cardShirtImageUrl} alt="card shirt" />
  </button>
);

export function Card({ onClick, suit, rank, open }) {
  return (
    <div>
      <div
        className={cn(styles.flipContainer, {
          [styles.flip]: open,
        })}
      >
        <div className={styles.flipper}>
          <div className={styles.front}>
            <ClosedCard onClick={onClick} />
          </div>
          <div className={styles.back}>
            {/* Защита от читерства через dev tools: Скрываем масть и ранг пока карта не открыта */}
            <OpenCard suit={open ? suit : ""} rank={open ? rank : ""} />
          </div>
        </div>
      </div>
    </div>
  );
}
