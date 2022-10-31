<template>
  <div>
    <h1 v-if="$store.state.isLoading">Loading....</h1>
    <router-view v-if="$store.state.isAuthenticated" />
    <Signin v-else />
    
  </div>
</template>

<script>
// import axios from '@/plugins/axios.js'
// import socket from './plugins/socketIo';
import Signin from './views/register/signin.vue';

export default {
  name: "App",
  data: () => ({
    //
    socketInstance: null
  }),
  created() {
    this.$store.dispatch('getPortalOrders', { status: "new", page: 1, perPage: 20 })
    // axios.get('/portal-orders/?status=hold&page=10&perPage=15').then(res => {
    //   console.log(res.data);
    // })
    // axios.get('http://localhost:3300/socketio_api/hey').then(res=>{
    //   console.log(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    // })
    // socket.emit('salom', ['yaxshimisizlar o\'zi ko\'rinmaysizlar ham'])    
    // console.log(this.socketInstance);
  },
  components: { Signin }
};
</script>
