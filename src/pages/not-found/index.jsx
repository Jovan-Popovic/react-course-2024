import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1 className="mt-4 text-xl text-center">404 Not found</h1>
      <Link className="mt-4 text-xl text-center block" to="/">
        Go back to homepage
      </Link>
    </>
  );
};
