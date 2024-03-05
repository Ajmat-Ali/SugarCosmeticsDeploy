import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// local Component Import
import styles from "../styles/SingleItem.module.css";

function SingleItem() {
  const { paramId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${paramId}`)
      .then((res) => {
        return res.json();
      })
      .then((finalData) => {
        setProduct(finalData);
      })
      .catch((err) => {
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
        setErr(false);
      });
  }, []);

  console.log(paramId);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (err) {
    return <h1>Something Went Wrong! please try after some time</h1>;
  }

  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className={styles.parent_Single}>
      <div className={`card ${styles.card}`}>
        <img
          src={image}
          className={`card-img-top ${styles.card_img_top}`}
          height="150px"
        />
        <div className={`card-header overflow-auto ${styles.card_header}`}>
          <p>{category}</p>
        </div>
        <div className="card-body">
          <div className={`row text-center ${styles.price_Section}`}>
            <h3>ID : {id}</h3>
            <p className={styles.title}>{title}</p>
            <div>{description}</div>
            <dl>
              <dt>Price </dt>
              <dd>${price}</dd>
            </dl>
          </div>
        </div>
        <div className={`card-footer ${styles.card_footer}`}>
          <Link to="/">
            <button className="btn btn-info">Back</button>
          </Link>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
export default SingleItem;
