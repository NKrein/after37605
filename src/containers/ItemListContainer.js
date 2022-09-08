import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import getList from '../utils/getProducts';
import Loader from '../components/Loader';

const ItemListContainer = () => {

  const [arrayList, setArrayList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getList()
      .then((response) => setArrayList(response))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))

    // fetch('productsDB.json')
    //   .then((res) => res.json())
    //   .then((data) => setArrayList(data))
    //   .catch((err) => console.error(err))
    //   .finally(() => setLoading(false))

    // fetch('https://fakestoreapi.com/products')
    // .then((res) => res.json())
    // .then((data) => setArrayList(data))
    // .catch((err) => console.error(err))
    // .finally(() => setLoading(false))

  }, [])

  return (
    <div className="listContainer">
      {loading ? <Loader /> : <ItemList products={arrayList} />}
    </div>
  )
}

export default ItemListContainer;