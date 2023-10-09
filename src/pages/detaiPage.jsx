import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../store/product/action";
import { useEffect } from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import addItem from "../store/cart/slice";

const DetailPage = () => {
  const navigasi = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { entity } = useSelector((state) => state.product);
  const fetchproduct = (productId) => {
    dispatch(getProduct(productId));
  };
  useEffect(() => {
    fetchproduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToCheckOut = (productId) => {
    navigasi(`/checkout/${productId}`);
  };

  return (
    <>
      <Navbar />
      <Hero title={entity.title} desc={entity.description} />
      <div className="flex flex-row justify-around bg-[#EFF4FA]">
        <div className=" m-[20px] w-[300px] h-min bg-white rounded-xl ">
          <img className="  p-3 rounded-t-lg " src={entity.image} alt="image" />
          <div className="font-semibold text-[25px] text-center text-[#FF6A28]">
            <p>{entity.price}</p>
          </div>

          <div
            onClick={() => goToCheckOut(entity.id)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[30px] text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-[20px] ">
            <p>Daftar Kelas</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-[900px] h-min bg-white m-[20px] rounded-lg p-[60px] gap-5 ">
            <div>
              <h2 className="font-bold text-2xl">Materi</h2>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Pengenalan Programming Laravel
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus inventore doloremque, recusandae hic tempora omnis. Cum
                neque libero debitis voluptates ipsum, voluptatum nihil, laborum
                hic sequi magni soluta, in a.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Materi Bootcamp Laravel 2
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus inventore doloremque, recusandae hic tempora omnis. Cum
                neque libero debitis voluptates ipsum, voluptatum nihil, laborum
                hic sequi magni soluta, in a.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Materi Bootcamp Laravel 3
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus inventore doloremque, recusandae hic tempora omnis. Cum
                neque libero debitis voluptates ipsum, voluptatum nihil, laborum
                hic sequi magni soluta, in a.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Materi Bootcamp Laravel 4
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus inventore doloremque, recusandae hic tempora omnis. Cum
                neque libero debitis voluptates ipsum, voluptatum nihil, laborum
                hic sequi magni soluta, in a.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Materi Bootcamp Laravel 5
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus inventore doloremque, recusandae hic tempora omnis. Cum
                neque libero debitis voluptates ipsum, voluptatum nihil, laborum
                hic sequi magni soluta, in a.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Materi Bootcamp Laravel 6
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus inventore doloremque, recusandae hic tempora omnis. Cum
                neque libero debitis voluptates ipsum, voluptatum nihil, laborum
                hic sequi magni soluta, in a.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[900px] h-min bg-white m-[20px] rounded-lg p-[60px] gap-5">
            <div className="font-bold text-2xl">
              <h3>Fasilitas</h3>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>E-Sertifikat</li>
                <li>Portfolio</li>
                <li>Job Connector</li>
                <li>Career Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DetailPage;
