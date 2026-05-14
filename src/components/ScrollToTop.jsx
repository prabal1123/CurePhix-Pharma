import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if the user is moving forward to a new page
    // "PUSH" means a new entry was added to history (clicking a product)
    // "POP" means the user clicked 'Back' or 'Forward' in the browser
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
}