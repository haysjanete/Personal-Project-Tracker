import React from "react";

class LoginSignupPage extends React.Component {
  // state = {
  //   name: " ",
  //   email: " ",
  //   password: " ",
  // };

  componentDidMount = async () => {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());
  };

  render() {
    return (
      <>
        <div className="container right-panel-active">
          <div className="container__form container--signup">
            <form action="#" className="form" id="form1">
              <h2 className="form__title">Sign Up</h2>
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="btn">Sign Up</button>
            </form>
          </div>

          <div className="container__form container--signin">
            <form action="#" className="form" id="form2">
              <h2 className="form__title">Sign In</h2>
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="btn">Sign In</button>
            </form>
          </div>

          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay__panel overlay--right">
                <button className="btn" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginSignupPage;
