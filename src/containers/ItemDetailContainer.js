import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from '../components/Loader';
import ItemDetail from '../components/ItemDetail';
import getList from "../utils/getProducts";


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getList()
      .then((response) => {
        setProduct(response.find(item => item.id === id))
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [id]);



  return (
    <>
      {loading && product.id ? <Loader /> : <ItemDetail product={product} />}
    </>
  );
}

export default ItemDetailContainer;
