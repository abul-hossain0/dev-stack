import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Nav></Nav>

      <main>
        <Banner></Banner>
        <Technologies></Technologies>
      </main>

      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
