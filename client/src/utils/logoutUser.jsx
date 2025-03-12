import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const logoutUser = async () => {
  const navigate = useNavigate();
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
export default logoutUser;
