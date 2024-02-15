import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-dark d-flex p-4">
      <Link to={"/"}>
        <img
          style={{ maxWidth: "150px" }}
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        />
      </Link>
    </div>
  );
};

export default Header;
