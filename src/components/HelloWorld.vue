<template>
 chào mọi người
 <div>toi la cong</div>
 <div>
  <div>
    <input v-model="addvalue" />
  </div>
  <div>
    <button @click="add()" >add</button>

  </div>
   <div v-for="item in listdata" :key="item.id">
    {{item?.toi}}
    <button @click='showedit(item)'>edit</button>
    <input v-if="item.id === editid" v-model="valueupdate"/>
    <button v-if="item.id === editid" @click="update(item.id)">update</button>
    <button  @click="deleterow(item.id)">delete</button>
    
  
  </div>
 </div>
 <button @click="conso()" >list</button>


</template>

<script>

import db from '@/fb'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite';
// import { query, orderBy } from "firebase/firestore";  
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      listdata: [],
      editid: null,
      valueupdate: null,
      addvalue: null,
    }
  },
  created(){
    this.conso()
  },
  computed(){},
  methods:{
    showedit(item){
      this.editid = item.id
      this.valueupdate = item.toi
    },
    //get all
   async conso(){
    const citiesCol = collection(db, 'hello');
    const citySnapshot = await getDocs(citiesCol);
    this.listdata = citySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
   
   
    },
    //them 1 row:
    async add(){
     const citiesCol = collection(db, 'hello');
     await addDoc(citiesCol, { toi: this.addvalue}).then(()=> {this.addvalue = null, this.conso() })
 
     },
    ///update 1 row thi nhu the nao
    async update(id){
     const userDoc = doc(db, 'hello', id);
     const newFields = {toi: this.valueupdate}
     await updateDoc(userDoc, newFields).then(() => {this.affterupdate(id)})
     this.editid = null
     console.log(100)
    },
    //delete
    async deleterow(id){
      console.log(100)
      const userDoc = doc(db, 'hello', id);
      await deleteDoc(userDoc).then(()=> {
      this.listdata = this.listdata.filter(item => item.id !== id)
     })
    


    },
    affterupdate(id){
      this.listdata.forEach(item => { if (item.id === id){item.toi = this.valueupdate}  
        
      });
    },
    setTralet(){
      let a = [[1,2,3],[3,5,6,7,8],['34','aa']]
      console.log(a)
    
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
