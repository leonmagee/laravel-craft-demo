import ReactDOM from "react-dom/client";
import Main from "./Main";

if (document.getElementById("root")) { 
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Main  />
    );
}