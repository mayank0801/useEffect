import "./styles.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // useEffect(() => {
  //   console.log("Hii");
  // }, []);

  useEffect(() => {
    toast.success("Hii", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }, []);
  return (
    <div className="App">
      <h1>tanaypratap's box</h1>
      <h2>write your app here</h2>
      <ToastContainer />
    </div>
  );
}
