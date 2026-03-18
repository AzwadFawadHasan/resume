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

    let navPulsePlayed = false;
    let navPulseTimeoutId = null;
    let userHasInteracted = false;

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

    function playIdleNavPulse() {
        if (navPulsePlayed) {
            return;
        }

        navPulsePlayed = true;

        navItems.forEach(function (item, index) {
            window.setTimeout(function () {
                item.icon.classList.add('nav-icon-attention');
                animateIcon(item.icon, 950);

                window.setTimeout(function () {
                    item.icon.classList.remove('nav-icon-attention');
                }, 1050);
            }, index * 120);
        });
    }

    function markInteraction() {
        userHasInteracted = true;

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
        if (!userHasInteracted) {
            playIdleNavPulse();
        }
    }, 8000);

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
