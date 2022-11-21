import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import LoginSignupPage from "./PagesJS/LoginSignupPage.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import HomePage from "./PagesJS/HomePage";
import Nav from "./Nav";
import "./HomePage.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-signin" element={<LoginSignupPage />} />
      </Routes>
    </BrowserRouter>
  );
  //   const [launch_info, setLaunchInfo] = useState([]);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     async function getData() {
  //       let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //       console.log("fastapi url: ", url);
  //       let response = await fetch(url);
  //       console.log("------- hello? -------");
  //       let data = await response.json();

  //       if (response.ok) {
  //         console.log("got launch data!");
  //         setLaunchInfo(data.launch_details);
  //       } else {
  //         console.log("drat! something happened");
  //         setError(data.message);
  //       }
  //     }
  //     getData();
  //   }, []);

  //   return (
  //     <div>
  //       <ErrorNotification error={error} />
  //       <LoginSignupPage info={launch_info} />
  //     </div>
  //   );
}

export default App;
