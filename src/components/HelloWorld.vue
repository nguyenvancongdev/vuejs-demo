<template>
 chào mọi người
 <div>toi la cong</div>
 <button @click="conso()" >ttt</button>
</template>

<script>

import db from '@/fb'
import { collection, getDocs } from 'firebase/firestore/lite';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods:{
   async conso(){
    const citiesCol = collection(db, 'hello');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    return cityList;
   
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
