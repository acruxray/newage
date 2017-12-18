
var app = new Vue({
  el: '#app',
  data: {
  	message: 'loading ...',
    latestCommitHash: '',
    latestCommitUrl: '',
    latestCommitDate: ''
  },
  computed: {
	dao() {
		var z = window.location.hash,
			a = (z == '') ? 'index' : z.split('/')[1];

		g('base/' + a + '.html', function(r) {
			app.message = r;
            hL();
		});
	}
  },
  methods: {
	show: function(a) {
		g('base/' + a + '.html', function(r) {
			app.message = r;
            hL();
		});
	}
  }

})


app.dao;


function g(a, cb) {
	axios.get(a)
		.then(function(response) {
			cb(response.data);
		}).catch(function (error) {
			cb('404 Not Found');
		});
}


function hL() {
    setTimeout(function() { Prism.highlightAll() }, 300);
}


window.onload = function() {
    g('https://api.github.com/repos/acruxray/newage/commits', function(r) {
        console.log(r[0].sha)
        app.latestCommitHash = r[0].sha;
        app.latestCommitUrl  = r[0].html_url;
        app.latestCommitDate = moment(r[0].commit.committer.date).fromNow();
    });
}
