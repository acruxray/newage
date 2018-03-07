function notification(text, lifetime, className) {

    lifetime   = (typeof lifetime === 'undefined' || lifetime === null) ? 3000 : lifetime;
    className = (typeof className === 'undefined' || className === null) ? '' : className;

    var e = document.createElement('div'),
        timeout = lifetime + 1000;
    e.className = 'notification ' + className;
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
