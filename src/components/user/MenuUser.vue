<template>
   <div>
      <v-row justify="space-around ma-2">
       <v-icon class="m-2"
      large
      color="green darken-2"
      >
      mdi-domain
       </v-icon>
      <div>congnguyendev</div>

   
       </v-row>
   <v-row >
    <div>nguyenvancong.dev</div>
    <router-link to="/user/posts">Trang Chủ</router-link> 
    <router-link to="/user/posts">Hướng Dẫn Học</router-link> 
    <router-link to="/user/posts">Bài Tập</router-link> 
    <router-link to="/user/posts">Tham Khảo</router-link> 
    <router-link to="/user/posts">Chuyên Đề</router-link> 
    <router-link to="/user/posts">Home</router-link> 
    <router-link to="/user/about">About</router-link>
   
   </v-row>
  </div>
   </template>
   
   <script>
   export default {
     name: 'MenuUser',
     data() {
       return {
         count: 0
       }
     },
     methods:{

       setTralet(){
      
       }
     },
   
   }
   </script>
   
 
 
   