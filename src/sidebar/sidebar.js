function sideBar(o) {

    var sidebar       = document.getElementById(o.sideBar),
        sidebarBtn    = document.getElementById(o.collapseButton),
        contentLocker = document.getElementById(o.contentLocker),
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
        // console.log(e.target.parentNode.nextElementSibling.className)
        // collapse/expand sublist by click to parent item
        if ( // if [a] contains another elements
            e.target.parentNode.tagName === 'A' &&
            e.target.parentNode.nextElementSibling &&
            e.target.parentNode.nextElementSibling.className.indexOf(sublist) >= 0
        ) {
            e.preventDefault();
            toggleClass(e.target.parentNode.nextElementSibling);
        } else if ( // if only text-link
            e.target.tagName === 'A' &&
            e.target.parentNode.children.length > 1 &&
            e.target.parentNode.children[1].className.indexOf(sublist) >= 0
        ) {
            e.preventDefault();
            toggleClass(e.target.parentNode.children[1]);
        } else {
            // close sidebar by click to any within tag [A]
            if ((e.target.tagName === 'A' || e.target.parentNode.tagName === 'A') &&
                sidebar.className.indexOf(a) >= 0) {
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

}
