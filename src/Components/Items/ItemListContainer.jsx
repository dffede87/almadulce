import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemListContainer({ titulo }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    
    if (categoryId) {
      const q = query(collection(db, "productos"), where("categoryId", "==", categoryId))
      getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No results")
        }
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      }).catch(error => console.log(error)).finally(() => { setLoading(false) })
    } 
    else {
      const q = collection(db, "productos")
      getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No results")
        }
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      }).catch(error => console.log(error)).finally(() => { setLoading(false) })
    }  
  }, [categoryId])

  return (
    <>
       <h1>{titulo}</h1>
       <div className={s.containerItems} >
          {loading ? <h3>Cargando productos...</h3> : <ItemList productos={items} />}
       </div>
    </>
  );
}