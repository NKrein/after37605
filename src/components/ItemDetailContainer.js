import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  // const itemId = 1;
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const URL = `https://fakestoreapi.com/products/${itemId}`;
    const getItem = fetch(URL)

    getItem
      .then((res) => res.json())
      .then((res) => {
        setProduct(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [itemId]);

  return (
    <>
      {loading ? <Loader /> : <ItemDetail product={product} />}
    </>
  );
}

export default ItemDetailContainer;
