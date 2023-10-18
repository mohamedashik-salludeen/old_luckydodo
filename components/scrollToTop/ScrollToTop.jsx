import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const scrollTop = useRef(null);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (scrollTop.current !== null) {
        if (window.scrollY > 200) {
          scrollTop.current.classList.add("active");
        } else {
          scrollTop.current.classList.remove("active");
        }
      }

      
    });
  }, []);

  return (
    <Link href="#gotoTop" className="scrollToTop" ref={scrollTop}>
      <i>
        <HiOutlineArrowUp />
      </i>
    </Link>
  );
};

export default ScrollToTop;
