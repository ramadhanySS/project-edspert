// import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../store/product/action";
import { useEffect } from "react";

const CheactOut = () => {
    const { entities } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { id } = useParams();
    const fetchProduct = (productId) => {
        dispatch(getProduct(productId));
    };
    useEffect(() => {
        fetchProduct(id);
    }, [entities]);
  return (
    <>
      <div className="flex flex-col bg-[#EFF4FA]">
        <div>
          <h2>Cheackout</h2>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col ">
            <div>
              <h3>Pilih Metode Pembayaran</h3>
            </div>
            <div>
              <h4>Bank Transfer (verifikasi manual)</h4>
              <p>
                Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar
                ini memerlukan verifikasi pembayaran manual melalui Whatsapp
              </p>
            </div>
          </div>
          <div>
            <div>
                {entities.map((product) => {
                    return (
                        <div key={product.id}>
                            <div>
                                {product.title}
                            </div>
                            <div>
                                {product.price}
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheactOut;
