import { useEffect, useState } from "react";
import useProductApi from "../../service/product/useProductApi";
import Wishescard from "./../../components/UI/Wishescard/Wishescard";
import useProductStore from "./../../store/useProductStore";
import CardWrapperSl from "./../../components/Layout/CardWrapperSl";

const Wishes = () => {
  const { getAllProductsFromWishes } = useProductApi;
  const [data, setData] = useState([]);
  const { isLoad, setLoader, setProduct, product } = useProductStore();

  useEffect(() => {
    useProductApi.getAll().then((res) => {
      console.log(res.data);
      console.log(res.data);
      setProduct(res.data);
      setLoader();
    });
  }, []);
  if (!isLoad) {
    return <h1>LOADING . . .</h1>;
  }

  useEffect(() => {
    getAllProductsFromWishes()
      .then((res) => {
        setData(res.data);
      })
      .catch();
  }, [data]);

  return (
    <section>
      <div className="container mx-auto my-[50px]">
        <h2 className="text-[24px] mb-7 font-semibold border-b-[1px] pb-3">
          Istaklarim
        </h2>

        <div className="flex items-center justify-start gap-4">
          {data.length > 0
            ? data?.map((item, index) => <Wishescard key={index} item={item} />)
            : "Loading..."}
        </div>

        <CardWrapperSl data={product}></CardWrapperSl>
      </div>
    </section>
  );
};

export default Wishes;
