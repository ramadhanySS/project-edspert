import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../store/product/action";
import { useEffect } from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

const DetailPage = () => {
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

  return (
    <>
    <Navbar/>
    <Hero title={entity.title} desc={entity.description} />
      <div className="mt-50px">
        <div>
            <img src={entity.image} alt="" />
          <div>
            <h2>Materi</h2>
          </div>
          <div>
            <h3>Pengenalan Programming Laravel</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              inventore doloremque, recusandae hic tempora omnis. Cum neque
              libero debitis voluptates ipsum, voluptatum nihil, laborum hic
              sequi magni soluta, in a.
            </p>
          </div>
          <div>
            <h3>Materi Bootcamp Laravel 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              inventore doloremque, recusandae hic tempora omnis. Cum neque
              libero debitis voluptates ipsum, voluptatum nihil, laborum hic
              sequi magni soluta, in a.
            </p>
          </div>
          <div>
            <h3>Materi Bootcamp Laravel 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              inventore doloremque, recusandae hic tempora omnis. Cum neque
              libero debitis voluptates ipsum, voluptatum nihil, laborum hic
              sequi magni soluta, in a.
            </p>
          </div>
          <div>
            <h3>Materi Bootcamp Laravel 4</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              inventore doloremque, recusandae hic tempora omnis. Cum neque
              libero debitis voluptates ipsum, voluptatum nihil, laborum hic
              sequi magni soluta, in a.
            </p>
          </div>
          <div>
            <h3>Materi Bootcamp Laravel 5</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              inventore doloremque, recusandae hic tempora omnis. Cum neque
              libero debitis voluptates ipsum, voluptatum nihil, laborum hic
              sequi magni soluta, in a.
            </p>
          </div>
          <div>
            <h3>Materi Bootcamp Laravel 6</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              inventore doloremque, recusandae hic tempora omnis. Cum neque
              libero debitis voluptates ipsum, voluptatum nihil, laborum hic
              sequi magni soluta, in a.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default DetailPage;
