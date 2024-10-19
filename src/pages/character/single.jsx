import { useNavigate, useParams } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Character info: {id}</h1>
      <button onClick={() => navigate("/contact")}>home page</button>
    </>
  );
};
