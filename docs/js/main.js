
var app = new Vue({
  el: '#app',
  data: {
  	message: 'loading ...'
  },
  computed: {
	dao() {
		var z = window.location.hash,
			a = (z == '') ? 'index' : z.split('/')[1];

		g(a, function(r) {
			app.message = r;
		})
	}
  },
  methods: {
	show: function(a) {
		g(a, function(r) {
			app.message = r;
		})
	}
  }

})


app.dao;


function g(a, cb) {
	axios.get('base/' + a + '.html')
		.then(function(response) {
			cb(response.data);
		}).catch(function (error) {
			cb('404 Not Found');
		});
}
