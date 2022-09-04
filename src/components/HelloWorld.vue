<template>
 chào mọi người
 <button @click="conso" >ttt</button>
</template>

<script>
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
    conso(){
      //tim cac gia tri giong nhau
      let a = [{hanh: 1, hue: 3}, {hanh: 1, hue: 3}, {hanh:3, cong: 5}, {cong: 9}]
      // let b = [... new Set(a.filter(item => item.hanh ).map(item => item.hanh ))]
      let c = {tottol: [],hanh: []}
      a.forEach(item => {if (!c.hanh.includes(item.hanh)) { c.tottol.push(item); c.hanh.push(item.hanh)}})
      console.log(c)
      
     


    },
    setTralet(){
      // let a = [[1,2,3],[3,5,6,7,8],['34','aa']]
      // console.log(a)
      // let b = a.reduce((tottol,item) => [...tottol,...item] )
      // console.log(b)
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
