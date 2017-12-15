(function (window, document) {

    var sidebar       = document.getElementById('sidebar'),
        sidebarBtn    = document.getElementById('sidebarBtn'),
        contentLocker = document.getElementById('contentLocker'),
        a = 'active';

    sidebarBtn.onclick = function (e) {
        toggle(e);
    };

    contentLocker.onclick = function(e) {
        if (sidebar.className.indexOf(a) >= 0) {
            toggle(e);
        }
    };

    sidebar.onclick = function(e) {
        if (e.target.tagName === 'A' && sidebar.className.indexOf(a) >= 0) {
            toggle(e);
        }
    };

    function toggle(e) {
        e.preventDefault();
        toggleClass(contentLocker);
        toggleClass(sidebar);
        toggleClass(sidebarBtn);
    }

    function toggleClass(el) {
        if (el.className.split(' ').indexOf(a) < 0) {
            el.classList.add(a);
        } else {
            el.classList.remove(a);
        }
    }

}(this, this.document));
