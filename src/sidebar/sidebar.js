function sideBar(o) {

    var sidebar       = document.getElementById(o.sideBar),
        sidebarBtn    = document.getElementById(o.collapseButton),
        contentLocker = document.getElementById(o.contentLocker),
        sublist       = 'sidebar-sublist',
        a             = 'active',
        pro           = o.pro ? o.pro : false,
        state         = o.state ? o.state : false,
        body          = document.querySelector('body').classList,
        nf            = document.querySelector('.navbar-fixed');

    // var nf = document.querySelector('.navbar-fixed');
    // if (nf) {
    //     nf.classList.add('body-push-dyn');
    // }

    if (pro) {
        sidebarBtn.classList.add('sidebar-btn-view');
        if (!state) {
            var sC = false; // page onload
            toogleClassPro();
        } else {
            sidebar.classList.add('sidebar-dyn');
            body.add('body-push');
            body.add('body-push-dyn');
            if (nf) {
                nf.classList.add('body-push');
                nf.classList.add('body-push-dyn');
            }
        }
    } else {
        body.add('body-push');
        if (nf) {
            nf.classList.add('body-push');
        }
    }

    sidebarBtn.onclick = function (e) {
        e.preventDefault();
        toggle();
    };

    contentLocker.onclick = function() {
        if (sidebar.className.indexOf(a) >= 0) {
            toggle();
        }
    };


    sidebar.onclick = function(e) {
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
                toggle();
            }
        }
    };

    function toggle() {
        if (pro && window.innerWidth > 600) {
            toogleClassPro();
        } else {
            sidebar.classList.add('visible');
            toggleClass(contentLocker);
            toggleClass(sidebar);
            toggleClass(sidebarBtn);
        }
    }

    function toggleClass(el) {
        if (el.className.split(' ').indexOf(a) < 0) {
            el.classList.add(a);
        } else {
            el.classList.remove(a);
        }
    }

    function toogleClassPro() {
        if (sidebar.className.split(' ').indexOf('sidebar-hidden') < 0) {
            sidebar.classList.add('sidebar-hidden');
            if (sC) {
                sidebar.classList.add('sidebar-dyn');
            }

            body.add('body-push-hidden');
            body.add('body-push-dyn');
            if (nf) {
                nf.classList.add('body-push-hidden');
                nf.classList.add('body-push-dyn');
            }
        } else {
            sidebar.classList.remove('sidebar-hidden');
            sidebar.classList.add('sidebar-dyn');

            body.remove('body-push-hidden');
            body.add('body-push');
            if (nf) {
                nf.classList.remove('body-push-hidden');
                nf.classList.add('body-push');
            }
        }

        sC = true;
    }

}
