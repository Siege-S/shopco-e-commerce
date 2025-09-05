import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box, Typography } from "@mui/material";

function PriceRangeSlider() {
  const [values, setValues] = useState([50, 200]); // default range
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(true);
  const togglePriceMenu = () => {
    setIsPriceMenuOpen((prevState) => !prevState);
  };
  const min = 0;
  const max = 250;
  // console.log(`min: ${values[0]}, max:${values[1]}`);
  return (
    <>
      <div className="flex justify-between" onClick={togglePriceMenu}>
        <strong className="text-xl">Price</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-500 cursor-pointer ${
            isPriceMenuOpen ? "" : "-rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden duration-300 ${
          isPriceMenuOpen ? "max-h-20 opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        <Box sx={{ width: 1 }}>
          <Box sx={{ position: "relative", height: 60 }}>
            {/* Slider */}
            <Slider
              value={values}
              onChange={(e, newValue) => setValues(newValue)}
              valueLabelDisplay="off"
              min={min}
              max={max}
              sx={{
                color: "#111827", // dark track
                height: 8,
                "& .MuiSlider-thumb": {
                  backgroundColor: "black",
                  width: 20,
                  height: 20,
                  zIndex: 2,
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#F0F0F0",
                  opacity: 1,
                },
              }}
            />

            {/* Custom tooltips that move with thumbs */}
            {values.map((val, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  top: "35px", // place below thumb
                  left: `calc(${(val / max) * 100}% - 5px)`,
                  transform: "translateX(-50%)",
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: "500" }}>
                  ${val}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default PriceRangeSlider;
