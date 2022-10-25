 <template>
     <div>

       <menu-user />
      </div>
      xin chao anh em
     <router-view></router-view>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import MenuUser from '@/components/user/MenuUser';
  
  export default defineComponent({
    name: 'UserHello',
    components: {
      MenuUser,
    },
  });
  </script>
  