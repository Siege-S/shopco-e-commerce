import { useRef } from "react";

function ItemsScroll({ children }) {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    const slider = scrollRef.current;
    slider.classList.add("cursor-grabbing");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = scrollRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="scroll-hidden flex overflow-auto gap-4 xl:justify-between py-9"
    >
      {children}
    </div>
  );
}

export default ItemsScroll;
