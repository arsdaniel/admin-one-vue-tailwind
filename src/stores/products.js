import { defineStore } from "pinia"
import { db } from "../firebase/firebase.js"
import { query, collection, getDocs } from 'firebase/firestore'

export const useProductsStore = defineStore('Products', {
    state: () => ({
        products: [],
        loading: false,
        error: null
      }),

      actions: {
        async fetchProdutcs(){
            const querySnap = await getDocs(query(collection(db, 'produk')));
            let fbProducts = []
            querySnap.forEach((doc) => {
            const product = {
                id: doc.id,
                href: doc.data().href,
                imageAlt: doc.data().imageAlt,
                imageSrc: doc.data().imageSrc,
                name: doc.data().name,
                price: doc.data().price,
                jumlah: doc.data().jumlah,
                diskon: doc.data().diskon,
                }
            fbProducts.push(product);
            })
            this.products = fbProducts
        },
      },
    })
