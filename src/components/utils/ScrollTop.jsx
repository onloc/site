import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Move o scroll para o topo (X: 0, Y: 0) sempre que a rota mudar
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}