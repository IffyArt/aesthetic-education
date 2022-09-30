const navSectionIds = [
  'news',
  'summary',
  'keynoteSpeech',
  'forum',
  'courseSharing',
  'beautyTour',
  'citizenForum',
].reverse();
const navSections = navSectionIds.map((item) => document.getElementById(item));

window.onscroll = function () {
  const windowScrollHeight = document.documentElement.scrollTop;
  const windowClientHeight = document.documentElement.clientHeight;

  for (const section of navSections) {
    if (section.offsetTop - windowScrollHeight - windowClientHeight <= -100) {
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
