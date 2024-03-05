import { useEffect, useState } from "react";
import { BsStar, BsHeart } from "react-icons/bs";

import SliderItem from "../component/SliderItem";
import styles from "../styles/Home.module.css";
import SliderComponent from "../component/SliderComponent";
import Footer from "../component/Footer";
import ImageSlider from "../component/ImageSlider";
import Navbar from "../component/Navbar.jsx";

function GiftingItem({ giftData }) {
  return (
    <div className={styles.container_card}>
      <h5 className="text-center">GIFTING</h5>
      <div className={styles.parent_Card}>
        {giftData.map(({ img, title, price, mrp }, ind) => {
          return (
            <div key={ind} className={`card ${styles.card}`}>
              <img
                src={img}
                className={`card-img-top ${styles.card_img_top}`}
                height="150px"
              />
              <div
                className={`card-header overflow-auto ${styles.card_header}`}
              >
                <p>{title}</p>
              </div>
              <div className="card-body">
                <div className={`row text-center ${styles.price_Section}`}>
                  <div>MRP {mrp}</div>
                  <div>Price ${price}</div>
                </div>
              </div>
              <div className={`card-footer ${styles.card_footer}`}>
                <div>
                  <a href="#" className="text-dark">
                    <BsHeart />
                  </a>
                </div>
                <div>
                  <button className="btn btn-dark">CHOOSE ITEMS</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Home() {
  ///////////////////////////////////////////////////////

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const heading = "BEST SELLERS";
  const heading2 = "WOMEN's DAY SPECIAL DEALS!";
  const heading3 = "JUST-IN";
  const heading4 = "GIFTING";
  const heading5 = "SUPER SAVERS";

  async function getData() {
    setLoading(true);

    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const finalData = await res.json();
      setItem(finalData);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <h2>Something Went Wrong! Please try after some time</h2>;
  }
  ///////////////////////////////////////////////////////

  const ary = [
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/9b92bb73-edd9-4b40-84be-c0a3f9c32d7c.gif",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/98854243-4b0b-41e8-a4cf-dd5dfa92b4a4.jpg&w=640&q=75",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/87bdf177-d99b-4b0b-92c6-34204e201aaf.jpg&w=3840&q=75",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/062d29c6-31e6-4bee-861a-3b8f47c2bab4.gif",
    },
  ];

  const slider2 = [
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/c84926c4-8914-484e-8ad5-649fd1980d1f.jpg&w=3840&q=75",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/cd5c828f-a59f-4342-8955-25c7a9f7c70d.jpg&w=3840&q=75",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/8b810378-baea-4a92-a85d-2e4412ad5c4b.jpg&w=3840&q=75",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/b185408c-0721-47e5-8dc4-549c19759a52.gif",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/d1e6ecce-05e3-4d2a-82e7-09eba677ce57.jpg&w=3840&q=75",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/388de371-6bca-45c5-8efa-97eeee4d1e09.jpg&w=3840&q=75",
    },
  ];

  const giftData = [
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FLipstick-_-Kohl-Value-Set---WBG_1.jpg%3Fv%3D1692719185&w=384&q=75",
      title: "Lipstick & Kohal Value Set",
      price: 799,
      mrp: 999,
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F554408657-wedding-makeup-kit-revamp_1.jpg%3Fv%3D1700475948&w=384&q=75",
      title: "Wedding Makeup Kit",
      price: 1699,
      mrp: 2243,
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F566527803-the-office-makeup-kit-wbg-1.jpg%3Fv%3D1704469085&w=384&q=75",
      title: "The Office Makeup Kit",
      price: 999,
      mrp: 1346,
    },
  ];

  return (
    <>
      <Navbar />
      <ImageSlider />
      <SliderItem items={item} heading={heading} />
      <SliderItem items={item} heading={heading2} />
      <div className="Banner">
        <h5 className="text-center m-4 img1">REFER YOUR FRIEND</h5>
        <img
          src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F20395dda-05f5-4bdf-8015-a795d7c22678.jpg&w=3840&q=75"
          alt="Banner"
          width={"100%"}
          className={styles.img1}
        />
        <img
          src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/bdc64adb-f939-4088-8836-4c02a5f99f2e.jpg&w=1920&q=75"
          alt="resPonsiveBanner"
          className={styles.img2}
          width={"100%"}
        />
      </div>
      <SliderComponent ary={ary} />
      <SliderItem items={item} heading={heading3} />

      {/* iframe video */}
      <div className={styles.iframe}>
        <h5 className="text-center mt-4 mb-4">
          LA LA LOVES 18HR LIQUID LIPSTICS! NOW IN 6 NEW SHADE
        </h5>
        <iframe
          src="//www.youtube.com/embed/qbbvMX7S7tM?rel=0&amp;amp;autoplay=1"
          frameBorder="0"
          className="Homepage_youtube_border__cAbDe"
        ></iframe>
      </div>
      <SliderComponent ary={slider2} />
      <GiftingItem giftData={giftData} />
      <Footer />
    </>
  );
}

export default Home;
