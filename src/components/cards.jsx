import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../store/product/action";

function Cards() {
  const { entities } = useSelector((state) => state.product);
  // const navigasi = useNavigate();

  const dispath = useDispatch();

  const fetchProduct = async () => {
    dispath(getAllProducts());
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // const goToDetailPage = (productId) => {
  //   navigasi(`/detail/${productId}`);
  // };
  return (
    <div className="flex flex-col bg-[#EFF4FA]">
      <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-10 m-10 overflow-scroll  ">
        {entities.map((product) => {
          return (
            <div
              key={product.id}
              className=" max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[300px] ">
              <a href="#" className=" overflow ">
                <img
                  className="p-3 rounded-t-lg "
                  src={product.image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
