import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => (
  <div id="error" className="page">
    ¿Te has perdido? <Link to="/">Volver a la portada</Link>
  </div>
);

export default Error;
