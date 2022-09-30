const navSectionIds = [
  'news',
  'summary',
  'keynoteSpeech',
  'forum',
  'courseSharing',
  'beautyTour',
  'citizenForum',
];
const navSections = navSectionIds.map((item) => document.getElementById(item));

window.onscroll = function () {
  const windowScrollHeight = document.documentElement.scrollTop;

  for (const section of navSections) {
    if (
      windowScrollHeight >= section.offsetTop &&
      windowScrollHeight <= section.offsetTop + section.offsetHeight
    ) {
      const navItems = document.querySelectorAll('.navbar > ul > li');
      navItems.forEach((item) => {
        const anchor = item.querySelector('a');
        if (anchor.getAttribute('href') === `#${section.id}`) {
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      });
      return;
    }
  }
};
