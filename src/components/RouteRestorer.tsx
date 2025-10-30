import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouteRestorer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedPath = sessionStorage.getItem("redirectPath");
    if (storedPath) {
      sessionStorage.removeItem("redirectPath");
      navigate(storedPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

export default RouteRestorer;
