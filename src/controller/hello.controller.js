import db from '@/fb'
import { collection, getDocs, query,limit } from 'firebase/firestore/lite';
// addDoc, updateDoc, doc, deleteDoc, query, orderBy, limit, limitToLast
    //get total
const citiesCol = collection(db, 'hello');

export const getHellos = async () =>{
    let citySnapshot = await getDocs(citiesCol);
    return citySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));   
}
export const getHellolimit = async () => {
    let querys = query(citiesCol, limit(5) )
    let citySnapshot = await getDocs(querys)
    return citySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));   
}