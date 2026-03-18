window.addEventListener('load', function () {
    const navItems = [
        { linkId: 'about-link', iconId: 'about-icon' },
        { linkId: 'edu-link', iconId: 'edu-icon' },
        { linkId: 'work-link', iconId: 'work-icon' },
        { linkId: 'pub-link', iconId: 'pub-icon' },
        { linkId: 'coding-link', iconId: 'coding-icon' },
        { linkId: 'achievements-link', iconId: 'achievements-icon' },
        { linkId: 'research_interest-link', iconId: 'research_interest-icon' },
        { linkId: 'volunteering-link', iconId: 'volunteering-icon' },
        { linkId: 'tech_stack-link', iconId: 'tech_stack-icon' },
        { linkId: 'cert-link', iconId: 'cert-icon' },
        { linkId: 'blog-link', iconId: 'blog-icon' },
        { linkId: 'services-link', iconId: 'services-icon' },
        { linkId: 'misc-link', iconId: 'misc-icon' }
    ].map(function (item) {
        return {
            link: document.getElementById(item.linkId),
            icon: document.getElementById(item.iconId)
        };
    }).filter(function (item) {
        return item.link && item.icon;
    });

    let firstNavPulsePlayed = false;
    let secondNavPulsePlayed = false;
    let navPulseTimeoutId = null;
    let secondNavPulseTimeoutId = null;

    function setBoomerangMode() {
        navItems.forEach(function (item) {
            item.icon.removeAttribute('delay');
            item.icon.removeAttribute('state');
            item.icon.setAttribute('trigger', 'boomerang');
        });
    }

    function animateIcon(icon, duration) {
        if (!icon) {
            return;
        }

        icon.setAttribute('trigger', 'loop');

        window.setTimeout(function () {
            icon.setAttribute('trigger', 'boomerang');
        }, duration || 900);
    }

    function isAboutTabActive() {
        const activeLink = document.querySelector('#nav-tab-id .nav-link.active');
        return activeLink && activeLink.id === 'about-link';
    }

    function getInactiveNavItems() {
        return navItems.filter(function (item) {
            return !item.link.classList.contains('active');
        });
    }

    function playIdleNavPulse(runMode) {
        const isFirstRun = runMode === 'first';

        if ((isFirstRun && firstNavPulsePlayed) || (!isFirstRun && secondNavPulsePlayed)) {
            return;
        }

        if (!isAboutTabActive()) {
            return;
        }

        if (isFirstRun) {
            firstNavPulsePlayed = true;
        } else {
            secondNavPulsePlayed = true;
        }

        const inactiveItems = getInactiveNavItems();
        const stepDelay = isFirstRun ? 155 : 180;
        const iconDuration = isFirstRun ? 1050 : 1150;
        const classDuration = isFirstRun ? 1200 : 1300;

        inactiveItems.forEach(function (item, index) {
            window.setTimeout(function () {
                item.icon.classList.add('nav-icon-attention');
                animateIcon(item.icon, iconDuration);

                window.setTimeout(function () {
                    item.icon.classList.remove('nav-icon-attention');
                }, classDuration);
            }, index * stepDelay);
        });
    }

    function markInteraction() {
        if (navPulseTimeoutId) {
            window.clearTimeout(navPulseTimeoutId);
            navPulseTimeoutId = null;
        }

    }

    window.setTimeout(function () {
        const achievementsIcon = document.getElementById('achievements-icon');

        if (achievementsIcon) {
            achievementsIcon.style.display = 'inline-block';
        }
    }, 1500);

    window.setTimeout(function () {
        setBoomerangMode();
    }, 4300);

    navPulseTimeoutId = window.setTimeout(function () {
        playIdleNavPulse('first');
    }, 8000);

    secondNavPulseTimeoutId = window.setTimeout(function () {
        if (isAboutTabActive()) {
            playIdleNavPulse('second');
        }
    }, 28000);

    navItems.forEach(function (item) {
        item.link.addEventListener('mouseenter', function () {
            markInteraction();
            animateIcon(item.icon, 850);
        });

        item.link.addEventListener('focus', function () {
            markInteraction();
            animateIcon(item.icon, 850);
        });

        item.link.addEventListener('click', function () {
            markInteraction();
            animateIcon(item.icon, 1000);
        });
    });

    ['mousemove', 'scroll', 'keydown', 'touchstart'].forEach(function (eventName) {
        document.addEventListener(eventName, markInteraction, { once: true, passive: true });
    });
});
