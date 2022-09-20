import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    const URL = catId ? `https://fakestoreapi.com/products/category/${catId}` : 'https://fakestoreapi.com/products/';
    const getCollection = fetch(URL);

    getCollection
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [catId]);

  return (
      <div className="listContainer">
        {loading ? <Loader /> : <ItemList products={products} />}
      </div>
  );

}

export default ItemListContainer;
