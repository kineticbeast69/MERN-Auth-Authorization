import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // regsiter function for api calling
  const registerSubmit = async (data) => {
    setDisabled(true);
    const { username, password, email } = data;
    try {
      const response = await axios.post(
        //api calling
        import.meta.env.VITE_BASE_URL + "register",
        { username, password, email }
      );
      toast.success(response.data.message, {
        //notification for success
        position: "top-center",
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.warning(error.response.data.message, {
          //notification for error
          position: "top-center",
          theme: "dark",
        });
      }
    } finally {
      setDisabled(false);
    }
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-600">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account.
            </h1>

            {/* form section is over here */}
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(registerSubmit)}
            >
              {/* username input filed is here */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  {...register("username", {
                    required: "Username is required.",
                    minLength: {
                      value: 8,
                      message: "Username must have 8 characters.",
                    },
                    maxLength: {
                      value: 25,
                      message: "Username must be less than 25 characters.",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9 _]+$/i,
                      message:
                        "Username can only contain letters, numbers, and underscores (_)",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-white italic text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* email input filed is here */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-white italic text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* password input filed is here */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be at most 20 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])/,
                      message:
                        "Password must have at least one uppercase, one lowercase, one number, and one special character (@$!%*?&)",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-white italic">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* show and hide password section */}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      {showPassword ? "Hide" : "Show"} Password
                    </label>
                  </div>
                </div>
              </div>

              {/* submit button is here */}
              <button
                type="submit"
                disabled={disabled}
                className="w-full text-white bg-blue-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-white ">
                Have an account ?{""}
                <Link
                  to="/"
                  className="text-blue-300 font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
