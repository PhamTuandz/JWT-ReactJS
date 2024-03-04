import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div></div>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div classNameName="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <div>
        <h3>Quuên mật khẩu?</h3>
      </div>
      <div>
        <button>Đăng nhập</button>
        <Link to={'/register'}>Đăng ký</Link>
      </div>
    </div>
  );
}
