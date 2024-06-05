import React from "react";
import "./css.css";

export default function Login() {
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="forget">
                <label>
                  <input type="checkbox" /> Rember me
                  <a href="#">Forget Password</a>
                </label>
              </div>
              <button>Log in</button>
              <div className="register">
                <p>
                  Don't have a account <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
