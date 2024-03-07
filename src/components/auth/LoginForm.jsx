import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
        }
      }
      const user = { ...formData };
      setAuth({ user });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is required" })}
          className={`auth-input ${
            errors.email ? "border-red-600" : "border-gray-300"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" htmlFor="password" error={errors.password}>
        <input
          {...register("password", {
            required: "password ID is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-600" : "border-gray-300"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <Field label="Password" htmlFor="password">
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
