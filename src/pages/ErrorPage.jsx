import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.scss";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("");
  };
  return (
    <div className="error-page">
      <h2>We can't find the page you are looking for.</h2>
      <p>
        Sorry, the requested page doesn't exist. Maybe double check the link?{" "}
      </p>
      <button onClick={handleClick}>Keep browsing</button>
    </div>
  );
};

export default ErrorPage;
