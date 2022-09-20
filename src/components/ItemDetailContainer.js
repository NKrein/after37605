import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/CartProvider";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

  const { addToCart } = useContext(cartContext);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

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

  const onAdd = (count) => {
    console.log(`Agregaste ${product.title}, cantidad: ${count}.`);
    addToCart(product, count);
    setAdded(true); // seteo en tru cuando es agregado el producto
  }

  return (
    <>
      {loading ? <Loader /> : <ItemDetail onAdd={onAdd} product={product} added={added} />}
    </>
  );
}

export default ItemDetailContainer;
