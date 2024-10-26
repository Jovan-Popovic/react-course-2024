import { useCallback, useState } from "react";
import { useAuthContext } from "../../../contexts/auth";
import { loginUser } from "../../../services/auth";

export const LoginPage = () => {
  const { handleLogin } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const handleEmailChange = useCallback(event => {
    const { value } = event.target;

    setEmail(value);
  }, []);

  const handlePasswordChange = useCallback(event => {
    const { value } = event.target;

    setPassword(value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const loginData = {
        email,
        password,
      };

      const response = await loginUser(loginData);

      handleLogin({ email, token: response.token });
    },
    [email, password]
  );

  return (
    <form
      className="flex flex-col gap-4 justify-center max-w-xs mx-auto mt-12"
      onSubmit={handleSubmit}
    >
      <input
        className="border-black border"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="border-black border"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="bg-green-500 text-white" type="submit">
        Login
      </button>
    </form>
  );
};
