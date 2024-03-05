import { useContext, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import local Component or Page
import styles from "../styles/Login.module.css";
import { AuthApi } from "../Context/AuthContextProvider";

function Login() {
  const [data, setDate] = useState({ phone: "", password: "" });
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthApi);

  function handleChange(e) {
    const { value, name } = e.target;
    setDate({ ...data, [name]: value });
  }

  function handleClick(e) {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(data));
    setDate({ phone: "", password: "" });
    setAuth(true);
    alert("Account Creat Sucessfully");
    navigate("/");
  }

  return (
    <div className={styles.parent_login}>
      <div>
        <img
          src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          alt="Login-Image"
        />
      </div>
      <div className={styles.login_details}>
        <div>
          <Link to="/">
            <BsArrowLeft color="black" size={20} fontWeight={"bold"} />
          </Link>
        </div>
        <div
          className={`${styles.inner_login_details} ${styles.inner_login_details_input}`}
        >
          <h5>Login/Sign Up Using Phone</h5>
          <input
            type="text"
            placeholder="Enter Phone No."
            className="form-control"
            onChange={handleChange}
            name="phone"
            value={data.phone}
          />
          <h6 className="mt-3">Create Password</h6>
          <input
            type="password"
            placeholder="Create Password"
            className="form-control mt-2"
            onChange={handleChange}
            name="password"
            value={data.password}
          />
          <p>
            Registering for this site for allows you to access your order status
            and history. just field in the above fields, and well get a new
            account setup for you in no time. we will only ask for information
            necessary to make the purchase process faster and easier.
          </p>
          <button className="btn btn-light" onClick={handleClick}>
            SEND ME OTP
          </button>
        </div>
        <div
          className={`${styles.inner_login_details} ${styles.terms_condition}`}
        >
          <p>
            <input type="checkbox" name="" id="" />
            Get important updates on whatsapp{" "}
            <a href="#">Terms And Condition</a>
          </p>
          <p>
            Need Help? <a href="#">Contact Us</a>
          </p>
          <p>
            By signing or Logging you are agree to our{" "}
            <a href="#">Terms and condition</a>{" "}
          </p>
        </div>
        <div className={styles.footer_copy}>
          <span>
            Copyrights &copy; 2024 SUGAR Cosmetics. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
