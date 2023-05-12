import React, { useContext, useState } from "react";
import login from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const [errorMessage, setError] = useState("");
  const { loginUser } = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();

    setError('')

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setError(errorMessage)
      });

  };
  return (
    <div className="hero min-h-screen bg-base-200 bg-white rounded-lg border">
      <div className="hero-content flex-col lg:flex-row gap-3">
        <div className=" w-1/2">
          <img src={login} alt="Login Image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
          <div className="card-body">
            <h2 className="text-xl text-center mt-10 ">Login</h2>
            <p className="text-center text-red-700 p-5">{errorMessage}</p>
            <form onSubmit={loginHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>

            <p className="mt-3">
              Don't have an account...!{" "}
              <Link className="text-[#ff3811]" to={"/signup"}>
                SignUp
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
