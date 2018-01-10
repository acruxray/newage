function notification(text, lifetime) {

    lifetime = typeof lifetime  === 'undefined' ? 3000 : lifetime;

    var e = document.createElement('div'),
        timeout = lifetime + 1000;
    e.className = 'notification';
    e.innerHTML = text;

    document.body.appendChild(e);

    setTimeout(function() {
    	e.classList.add('active');

    	setTimeout(function() {
	    	e.classList.remove('active');
            setTimeout(function() {
                e.remove();
            }, timeout);
	    }, lifetime);
    });

}
