import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsSearch,
  BsPerson,
  BsBag,
  BsSun,
  BsHeart,
  BsList,
  BsX,
  BsChevronRight,
  BsChevronDown,
} from "react-icons/bs";

import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };
  const [scrollPositionFront, setScrollPositionFront] = useState(0);
  const handleScrollFront = (e) => {
    setScrollPositionFront(e.target.scrollLeft);
  };

  // Array of image URLs
  const res_img = [
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/15b51099-afc7-4fd5-9d31-2c4ac6c98088.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/19ccca89-522c-4673-bec8-502ef06fe064.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/c07928b2-f4c5-4f3c-bc55-09ead560b973.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/444743a7-7113-4249-929c-a40041eb86a3.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/22aad929-35a7-48ef-b8d3-d391cd047202.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/4ced257c-cd29-4662-870c-3f699de622c6.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/4a407fb2-9de4-4d9b-bf64-405e9e30f668.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/52b3a13b-6ae1-452c-97f1-16084632d2c0.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/b25743c5-2adb-42ae-9d89-20be489f252f.jpg",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/category/b99b96e2-2131-47d2-bd3c-a6dc2bcf0a84.jpg",
    },

    // Add more image URLs as needed
  ];
  ///////////////////////////////////////

  const front_res_imgSlider = [
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/Women's-Day-Sale-Category-Icon.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/87ee3f38-e44e-46b8-8381-b2461b1a295f.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/4c80dfb6-e2ce-4aee-8b7a-0f1cb675ca16.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/a03076b8-8b09-43a8-821e-12cc11230c0b.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/129fc2a5-eaee-4dee-972b-9cfb365ef4b0.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/1c05e74d-ade5-4fa5-96ce-d2a7df8b5084.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/70e62180-7b7d-4d2e-9d7b-0b0976f683bd.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/2d01ceb5-7425-4819-b853-3c8913f89eab.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/611a5d3d-d773-4457-ba35-886b0f428d5a.png",
    },
    {
      img: "https://d32baadbbpueqt.cloudfront.net/Homepage/ed002f66-653b-4a6b-b399-d00d5a0eadf1.png",
    },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is 768px or below
      if (window.innerWidth <= 768) {
        setShowMenu(false); // Close sidebar if screen width is 768px or below
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="toggle-button" onClick={toggleMenu}>
            <BsList size={30} />
          </div>
          <div className="navbar-brand">
            <img src="./logo.png" alt="Logo" />
          </div>
          <div className="navbar-icons">
            <div className="input-group search-div">
              <input
                type="text"
                className="form-control "
                placeholder="Try Liquid Lipstick"
              />
              <button className="btn btn-light text-dark ">
                {" "}
                <BsSearch size={15} color="black" /> &nbsp;search
              </button>
            </div>
            <div className="login-bar">
              <Link to="/login">
                <span className="person-icon">
                  <BsPerson size={25} color="white" />
                </span>
                <span>Login/Register</span>
              </Link>
            </div>
            <div className="icons">
              <a href="#">
                <BsHeart size={17} color="white" />{" "}
              </a>{" "}
              <a href="#">
                <BsBag size={17} color="white" />{" "}
              </a>{" "}
              <a href="#">
                <BsSun size={20} color="white" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className={`sidebar ${showMenu ? "active" : ""}`}>
          <div className="sidebar-content">
            <button className="close-button" onClick={closeMenu}>
              <BsX size={35} />
            </button>
            <div className="sidebar-logo">
              <img src="./logo.png" alt="logo" />
            </div>
            <ul>
              <a href="#">
                <li className="res-li">
                  <div>BROWS BY CATEGORY</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              {/*////////////////////////////////////////////  */}
              <a href="#">
                <li className="res-li">
                  <div className="scroll-container" onScroll={handleScroll}>
                    <div
                      className="inner-container"
                      style={{ marginLeft: -scrollPosition }}
                    >
                      {/* Generate divs with images */}
                      {res_img.map(({ img }, index) => (
                        <div key={index} className="item">
                          <img
                            src={img}
                            alt={`Image ${index + 1}`}
                            className="image"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </a>
              {/* ////////////////////////////////////////////// */}
              <a href="#">
                <li>
                  <div>BLOG</div>
                  <div>
                    <BsChevronDown />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>OFFER</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>STORES</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>CORPORATE GIFTING</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>HELP & SUPPORT</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>FAQS</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>REFUND & RETURN POLICY</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>TERMS AND CONDITIONS</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li>
                  <div>CAREERS</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
              <a href="#">
                <li className="res-li">
                  <div>ABOUT US</div>
                  <div>
                    <BsChevronRight />
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <menu>
        <div>
          <a href="/#">LIPS</a>
          <a href="/#">EYES</a>
          <a href="/#">FACE</a>
          <a href="/#">NAILS</a>
          <a href="/#">SKINCARE</a>
          <a href="/#">ACCESSORIES</a>
          <a href="/#" className="menu-womens">
            WOMEN'S DAY GIFTING
          </a>
          <a href="/#">BEST SELLERS</a>
          <a href="/#">NEW LAUNCHES</a>
          <a href="/#">OFFERS</a>
          <a href="/#">BLOG</a>
        </div>

        <div className="menu-input-group search-div input-group">
          <button className="btn btn-light text-dark ">
            {" "}
            <BsSearch size={15} color="black" />
          </button>
          <input
            type="text"
            className="form-control "
            placeholder="Try Liquid Lipstick"
          />
        </div>
        <div className="front-res-slider">
          <div className="front-scroll-container" onScroll={handleScrollFront}>
            <div
              className="front-inner-container"
              style={{ marginLeft: -scrollPositionFront }}
            >
              {/* Generate divs with images */}
              {front_res_imgSlider.map(({ img }, index) => (
                <div key={index} className="item">
                  <img src={img} alt={`Image ${index + 1}`} className="image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </menu>
    </header>
  );
};

export default Navbar;
