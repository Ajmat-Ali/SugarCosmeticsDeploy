import styles from "../styles/Footer.module.css";

// library
import {
  BsFacebook,
  BsTwitterX,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
  BsChevronRight,
} from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.parent_footer}>
        <div className={styles.hrLine}></div>
        <div className={styles.readMore}>
          <p>
            <p>Read More About Sugar Cosmetics</p>{" "}
            <div>
              <BsChevronRight />
            </div>
          </p>
        </div>
        <div className={styles.getIn_touch}>
          <div>
            <h5>LETS STAY IN TOUCH</h5>
            <p>
              Gets the latest beauty tips straight to your inbox. Can't wait to
              connect!
            </p>
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
            />
            <button className="btn btn-dark">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div>
          <ul className={styles.social_icon}>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitterX />
            </li>
            <li>
              <BsLinkedin />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Stores</li>
            <li>Elite</li>
            <li>Terms & Condition</li>
            <li>Returns</li>
            <li>FAQs</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className={styles.touch_info}>
          <div>Get in Touch</div>
          <div>
            <div>
              <h5>Call Us at</h5>
              <p>
                1800-209-9933 <br />
                Monday to Friday: 9:00 AM to 9:00 PM <br />
                Saturday 9:00 AM to 7:00 PM
              </p>
            </div>
            <div>
              <h5>Support</h5>
              <p>
                <a href="mailto:hello@sugarcosmetics.com">
                  hello@sugarcosmetics.com
                </a>
              </p>
            </div>
            <div>
              <h5>Careers</h5>
              <p>
                <a href="/hiring">We're Hiring!</a>
              </p>
            </div>
            <div>
              <h5>Press and Media</h5>
              <p>
                <a href="/press">pr@sugarcosmetic.com</a>
              </p>
            </div>
            <div>
              <h5>Influncer Collabe</h5>
              <p>
                <a href="/hiring">Join Us</a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Copyright &copy; 2024 SugarCosmetics. All rights reserve</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
