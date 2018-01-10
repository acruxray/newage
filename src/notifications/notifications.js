function notification(text) {

    var e = document.createElement('div');
    e.className = 'notification';
    e.innerHTML = text;

    document.body.appendChild(e);

    setTimeout(function() {
    	e.classList.add('active');

    	setTimeout(function() {
	    	e.classList.remove('active');
	    }, 3000);
    });

}
