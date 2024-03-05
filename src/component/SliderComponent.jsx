import { useState } from "react";

// module css file
import styles from "../styles/SliderComponent.module.css";

function SliderComponent({ ary }) {
  //   console.log("SliderComponent ka data here hai --> ", ary[0].img);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div>
      <h5 className={`text-center mt-4 mb-4`}>HOT DETAILS</h5>
      <div className={styles.scroll_container} onScroll={handleScroll}>
        <div
          className={styles.inner_container}
          style={{ marginLeft: -scrollPosition }}
        >
          {ary.map(({ img }, index) => (
            <div key={index} className={styles.item}>
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
