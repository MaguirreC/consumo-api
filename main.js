
var app = new Vue({
  el: '#app',
  data: {
      user: null
  },
  methods: {
    getUser() {
          axios.get('https://randomuser.me/api/')
              .then(response => {
                  this.user = response.data.results[0];
              })
              .catch(error => {
                  console.error('Error al obtener el usuario:', error);
              });
      },
      deleteUser() {
          this.user = null;
      }
  },
  mounted() {
      this.getUser();
  }
});