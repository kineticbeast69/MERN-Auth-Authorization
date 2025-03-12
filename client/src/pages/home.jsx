import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  useEffect(() => {
    //authenticating the user
    const authUser = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + "protected",
          { withCredentials: true }
        );
        setData(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        navigate("/");
      }
    };
    authUser();
  }, []);
  return (
    <div className="flex flex-col w-full h-[100dvh]">
      <Navbar data={data} />
      <div className="grow">{<Outlet />}</div>
      <Footer />
    </div>
  );
}
export default Home;
