import { useEffect, useState } from "react";
import StarRating from "../../components/StarRating";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
const TopSellingSection = () => {
  const [data, setData] = useState([]);
  // const getAPI = import.meta.env.VITE_API_URL_GET_TOP_SELLING;
  // const getApiImage = import.meta.env.VITE_API_IMAGE_PATH;

  const navigate = useNavigate();
  const handleClick = (id, item) => {
    navigate(`/shop/product/${id}/${item}`);
  };

  useEffect(() => {
    try {
      fetch("/shopco.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data.TopSelling);
          // console.log(data);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const calcDiscount = (price, discount) => {
    const totalDiscount = price * (discount / 100);
    return Math.round(price - totalDiscount);
  };

  return (
    <section className="container mx-auto px-4 mb-20 xl:px-0">
      <h2 className="font-integralcf font-bold text-3xl text-center mb-13.75">
        Top Selling
      </h2>
      {data.length > 0 ? (
        <Swiper
          freeMode={true}
          slidesPerView={2.5}
          spaceBetween={20}
          modules={[FreeMode]}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.99,
            },
          }}
        >
          {data.map((items) => (
            <SwiperSlide>
              <div
                key={items.id}
                className="select-none cursor-pointer"
                onClick={() => {
                  handleClick(items.id, items.name);
                }}
              >
                <figure className="bg-lightGrey min-w-50 max-w-75 mb-2.5 overflow-hidden rounded-xl">
                  <img
                    className="hover:scale-110 ease-in duration-100"
                    src={items.image}
                    alt=""
                    draggable="false"
                  />
                </figure>
                <div className="flex flex-col gap-y1">
                  <figcaption className="font-bold lg:text-xl capitalize">
                    {items.name}
                  </figcaption>
                  <div className="flex gap-1">
                    <StarRating value={items.rating} />
                    <span className="my-auto text-xs lg:text-sm"></span>
                  </div>
                  <div className="flex gap-1.25 items-center">
                    <span className="text-xl font-bold xl:text-2xl">{`${
                      items.discount > 0
                        ? `$${calcDiscount(items.price, items.discount)}`
                        : ""
                    }`}</span>

                    <span
                      className={`text-xl font-bold xl:text-2xl ${
                        items.discount > 0 ? "line-through opacity-40" : ""
                      }`}
                    >{`$${items.price}`}</span>

                    <span
                      className={`text-xs font-medium rounded-full text-red-500 px-2 py-.75 xl:text-2xl ${
                        items.discount > 0 ? "bg-red-200" : ""
                      }`}
                    >{`${
                      items.discount > 0 ? `${items.discount}%` : ""
                    }`}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h3 className="opacity-60 font-bold text-2xl text-center">
          No Items Found
        </h3>
      )}
      <div className="flex justify-center mt-9">
        <Link to="/shop">
          <button className="border-2 border-gray-300 py-3.5 px-20 w-full rounded-full text-sm font-bold md:w-fit hover:border-black duration-300">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TopSellingSection;
