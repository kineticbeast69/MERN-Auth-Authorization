import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_BASE_URL + "logout"
      );
      // console.log(response);
      toast.success(response.data.message, {
        position: "top-right",
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          position: "top-right",
          theme: "dark",
        });
      }
    }
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Username */}
        <Link to="/home" className="text-white font-bold text-lg">
          {data.username}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Middle Section: Links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-6`}>
          <Link to="/home" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300">About</Link>
          <Link className="text-white hover:text-gray-300">Contact</Link>
          {data.role === "admin" && (
            <>
              <Link to="/home/admin" className="text-white hover:text-gray-300">
                Admin Dashboard
              </Link>
              <Link
                to="/home/author"
                className="text-white hover:text-gray-300"
              >
                Author Dashboard
              </Link>
            </>
          )}
          {data.role === "author" && (
            <>
              {" "}
              <Link
                to="/home/author"
                className="text-white hover:text-gray-300"
              >
                Author Dashboard
              </Link>
            </>
          )}
        </div>

        {/* Right Section: Logout Button */}
        <button
          onClick={logoutUser}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg hidden md:block"
        >
          Logout
        </button>
      </div>

      {/* Mobile Logout Button */}
      {isOpen && (
        <div className="md:hidden text-center mt-3">
          <button
            onClick={logoutUser}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
