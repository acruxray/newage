(function (window, document) {

    var sidebar       = document.getElementById('sidebar'),
        sidebarBtn    = document.getElementById('sidebarBtn'),
        contentLocker = document.getElementById('contentLocker'),
        sublist       = 'sidebar-sublist',
        a             = 'active';

    sidebarBtn.onclick = function (e) {
        toggle(e);
    };

    contentLocker.onclick = function(e) {
        if (sidebar.className.indexOf(a) >= 0) {
            toggle(e);
        }
    };

    sidebar.onclick = function(e) {
        // collapse/expand sublist by click to parent item
        if (e.target.tagName === 'A' &&
            e.target.parentNode.children.length > 1 &&
            e.target.parentNode.children[1].className.indexOf(sublist) >= 0) {
            toggleClass(e.target.parentNode.children[1]);
        } else {
            // close sidebar by click to any within tag [A]
            if (e.target.tagName === 'A' && sidebar.className.indexOf(a) >= 0) {
                toggle(e);
            }
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
