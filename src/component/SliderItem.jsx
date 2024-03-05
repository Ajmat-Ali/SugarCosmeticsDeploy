import { useState } from "react";
import { Link } from "react-router-dom";

// local Style
import styles from "../styles/SliderItem.module.css"; // Import CSS file for styling

import { BsStar, BsHeart } from "react-icons/bs";

const SliderItem = ({ items, heading }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };
  return (
    <div className={styles.parentDiv}>
      <h5 className="text-light text-center mb-4">{heading}</h5>
      <div className={styles.scroll_container} onScroll={handleScroll}>
        <div
          className={styles.inner_container}
          style={{ marginLeft: -scrollPosition }}
        >
          {/* Generate divs with images */}
          {items.map(({ image, title, price, rating, id }, index) => (
            <div key={index} className={styles.item}>
              {/* ////////////////////////////////////////// */}
              <div className={`card ${styles.card}`}>
                <img
                  src={image}
                  className={`card-img-top ${styles.card_img_top}`}
                  height="150px"
                />
                <div
                  className={`card-header overflow-auto ${styles.card_header}`}
                >
                  <p>{title}</p>
                </div>
                <div className="card-body">
                  <dl className="row text-center">
                    <dt>Price</dt>
                    <dd>${price}</dd>
                    <dt className={styles.rating}>Rating</dt>
                    <dd className={styles.rating}>
                      {" "}
                      <BsStar color="tomato" /> &nbsp;
                      {rating.rate}
                      &nbsp;- &nbsp;[{rating.count}]
                    </dd>
                  </dl>
                </div>
                <div className={`card-footer ${styles.card_footer}`}>
                  <div>
                    <a href="#" className="text-dark">
                      <BsHeart />
                    </a>
                  </div>
                  <div>
                    <Link to={`/products/${id}`}>
                      <button className="btn btn-dark">CHOOSE ITEMS</button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* /////////////////////////////////////////// */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
