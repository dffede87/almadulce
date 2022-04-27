import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer({ titulo }) {
  
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    const db = getFirestore()

    const prodRef = doc(db, "productos", id)
    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() })
      }
    }).catch((error) => {console.log(error)}).finally(() => { setLoading(false) })
  }, [id])

  return (
    <>
      <div>
          {loading ? <h3>Cargando producto...</h3> : <ItemDetail producto={producto} />}
       </div>
    </>
  );
}