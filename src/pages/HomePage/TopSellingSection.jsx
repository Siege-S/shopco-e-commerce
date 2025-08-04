import { useEffect, useState } from "react";
import ItemsScroll from "../../components/ItemsScroll";
import StarRating from "../../components/StarRating";
const TopSellingSection = () => {
  const [data, setData] = useState([]);
  const getAPI = import.meta.env.VITE_API_URL_GET_TOP_SELLING;
  const getApiImage = import.meta.env.VITE_API_IMAGE_PATH;
  useEffect(() => {
    fetch(getAPI)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <section className="container mx-auto px-4 mb-20 xl:px-0">
      <h2 className="font-integralcf font-bold text-3xl text-center mb-13.75">
        Top Selling
      </h2>
      {data.length > 0 ? (
        <ItemsScroll>
          {data.map((items) => (
            <div key={items.id} className="select-none cursor-pointer">
              <figure className="min-w-50 max-w-75 mb-2.5 overflow-hidden rounded-xl">
                <img
                  className="hover:scale-110 ease-in duration-100"
                  src={`${getApiImage}${items.images}`}
                  alt=""
                  draggable="false"
                />
              </figure>
              <div className="flex flex-col gap-y1">
                <figcaption className="font-bold lg:text-xl capitalize">
                  {items.item}
                </figcaption>
                <div className="flex gap-1">
                  <StarRating value={items.rating} />
                  <span className="my-auto text-xs lg:text-sm">
                    {items.rating}/5
                  </span>
                </div>
                <span className="text-xl font-bold xl:text-2xl">{`$${items.price}`}</span>
              </div>
            </div>
          ))}
        </ItemsScroll>
      ) : (
        <h3 className="opacity-60 font-bold text-2xl text-center">
          No Items Found
        </h3>
      )}
      <div className="flex justify-center mt-9">
        <button className="border-2 border-gray-300 py-3.5 px-20 w-full rounded-full text-sm font-bold md:w-fit">
          View All
        </button>
      </div>
    </section>
  );
};

export default TopSellingSection;
