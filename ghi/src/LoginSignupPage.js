import React from "react";

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

window.onload = function () {
  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  fistForm.addEventListener("submit", (e) => e.preventDefault());
  secondForm.addEventListener("submit", (e) => e.preventDefault());
};

class LoginSignupPage extends React.Component {
  render() {
    return (
      <div className="container right-panel-active">
        ///* Sign Up */
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="Name" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="text" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">Sign Up</button>
          </form>
        </div>
        ///* Sign In */
        <div className="container__form container--signin">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input type="email" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">Sign In</button>
          </form>
        </div>
        ///* Overlay */
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
    );
  }
}

export default LoginSignupPage;

// function Construct(props) {

//     const pad2 = num => String(num).padStart(2, '0');

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Under construction</h1>
//                 <h2>Coming on (or before)</h2>
//                 <h2>{props.info.year}-{pad2(props.info.month)}-{pad2(props.info.day)}</h2>
//                 <h2>by or <strong>WELL BEFORE</strong> {pad2(props.info.hour)}:{pad2(props.info.min)}</h2>

//             </header>
//         </div>
//     )
// }

// export default Construct;
