import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import PriceDiscount from "../../components/PriceDiscount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

const ProductItems = () => {
  const { id, productName } = useParams();
  const [product, setProduct] = useState({});
  // console.log("ID: " + id);
  // console.log("Name: " + productName);
  const [colorOption, setColorOption] = useState("brown");
  const [sizeOption, setSizeOption] = useState("large");
  const [productQuantity, setProductQuatity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const addQuantity = () => {
    setProductQuatity((prevState) => prevState + 1);
  };
  const minusQuantity = () => {
    if (productQuantity > 1) {
      setProductQuatity((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    fetch("/shopco.json")
      .then((result) => result.json())
      .then((data) => {
        if (id <= 4) {
          const getItem = data.NewArrival.find(
            (item) => item.id === Number(id)
          );
          // console.log(getItem);
          setProduct(getItem);
        } else if (id > 4 && id <= 8) {
          const getItem = data.TopSelling.find(
            (item) => item.id === Number(id)
          );
          // console.log(getItem);
          setProduct(getItem);
        } else {
          const getItem = data.CategoryItems.find(
            (item) => item.id === Number(id)
          );
          // console.log(getItem);
          setProduct(getItem);
        }
      });
    // console.log(cartItems);
  }, [id]);

  return (
    <>
      <section className="container mx-auto px-4 xl:px-0">
        <nav>
          <ul className="flex gap-1 text-gray-400 my-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="capitalize text-black">{product.name}</li>
          </ul>
        </nav>

        <div className="md:flex md:gap-x-10">
          <figure className="w-full lg:flex lg:flex-row-reverse lg:gap-3.5 xl:w-2/3 xl:justify-end">
            <div className=" rounded-[20px] overflow-hidden mb-3 lg:mb-0 lg:w-full  xl:w-111 xl:h-132.5 bg-lightGrey">
              <img
                src={product.image}
                className="w-full lg:h-full lg:my-auto hover:scale-110 ease-in duration-100"
                alt={`product-${product.id}`}
              />
            </div>

            <div className="flex gap-x-3 gap-y-3.5 mb-5 xl:mb-0 lg:flex-col lg:w-38 xl:justify-between  xl:h-132.5">
              <div className="rounded-[20px] overflow-hidden xl:h-41.75 bg-lightGrey">
                <img
                  className="hover:scale-110 ease-in duration-100"
                  src={product.image}
                  alt={`product-${product.id}`}
                />
              </div>
              <div className=" rounded-[20px] overflow-hidden xl:h-41.75 bg-lightGrey">
                <img
                  className="hover:scale-110 ease-in duration-100"
                  src={product.image}
                  alt={`product-${product.id}`}
                />
              </div>
              <div className=" rounded-[20px] overflow-hidden xl:h-41.75 bg-lightGrey">
                <img
                  className="hover:scale-110 ease-in duration-100"
                  src={product.image}
                  alt={`product-${product.id}`}
                />
              </div>
            </div>
          </figure>

          <div>
            <div className="space-y-3">
              <h2 className="font-integralcf text-2xl font-bold md:text-4xl">
                {product.name}
              </h2>
              <div>
                <StarRating value={product.rating} max={5} />
              </div>
              <div>
                <PriceDiscount
                  price={product.price}
                  discount={product.discount}
                />
              </div>
              <div>
                <p className="text-sm text-black/60">{product.description}</p>
              </div>
            </div>
            <hr className="text-black/10 border-1 my-6" />
            <div>
              <p className="text-black/60 mb-4">Select Colors</p>
              <div className="flex gap-4">
                <button
                  className="bg-[#4F4631] size-9 rounded-full cursor-pointer"
                  onClick={() => {
                    setColorOption("brown");
                  }}
                >
                  {colorOption === "brown" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="size-4 text-white m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="bg-[#314F4A] size-9 rounded-full cursor-pointer"
                  onClick={() => {
                    setColorOption("green");
                  }}
                >
                  {colorOption === "green" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="size-4 text-white m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
                <button
                  className="bg-[#31344F] size-9 rounded-full cursor-pointer"
                  onClick={() => {
                    setColorOption("Blue");
                  }}
                >
                  {colorOption === "Blue" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="size-4 text-white m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
            <hr className="text-black/10 border-1 my-6" />
            <div>
              <p className="text-black/60 mb-4 ">Choose Size</p>
              <div className="space-x-3 space-y-3">
                <button
                  className={`py-3 px-6 text-black/60 bg-[#F0F0F0] rounded-full cursor-pointer ${
                    sizeOption === "small" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSizeOption("small")}
                >
                  Small
                </button>
                <button
                  className={`py-3 px-6 text-black/60 bg-[#F0F0F0] rounded-full cursor-pointer ${
                    sizeOption === "medium" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSizeOption("medium")}
                >
                  Medium
                </button>
                <button
                  className={`py-3 px-6 text-black/60 bg-[#F0F0F0] rounded-full cursor-pointer ${
                    sizeOption === "large" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSizeOption("large")}
                >
                  Large
                </button>
                <button
                  className={`py-3 px-6 text-black/60 bg-[#F0F0F0] rounded-full cursor-pointer ${
                    sizeOption === "x-large" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSizeOption("x-large")}
                >
                  X-Large
                </button>
              </div>
            </div>
            <hr className="text-black/10 border-1 my-6" />
            <div className="flex gap-3">
              <div className="bg-[#F0F0F0] flex rounded-full py-3 px-4 gap-4 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-5 cursor-pointer"
                  onClick={minusQuantity}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>

                <span>{productQuantity}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-5 cursor-pointer"
                  onClick={addQuantity}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <button
                className="w-full text-sm text-white bg-black rounded-full cursor-pointer hover:bg-black/20 hover:text-black duration-200 active:bg-black/20"
                onClick={() =>
                  addToCart(
                    id,
                    product.name,
                    product.price,
                    colorOption,
                    sizeOption,
                    productQuantity,
                    product.discount,
                    product.image
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductItems;
