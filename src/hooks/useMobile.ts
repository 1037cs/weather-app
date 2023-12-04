import { useState, useEffect } from "react";

const useMobile = (width: number) => {
  const [isMobile, setIsMobile] = useState<boolean>();

  const handleResize = () => {
    document.documentElement.clientWidth <= width
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;
