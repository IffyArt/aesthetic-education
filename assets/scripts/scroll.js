const navSectionIds = [
  'news',
  'summary',
  'keynoteSpeech',
  'forum',
  'courseSharing',
  'beautyTour',
  'citizenForum',
  'traffic',
];
const windowClientHeight = document.documentElement.clientHeight;
const navSections = navSectionIds.map((item) => document.getElementById(item));
const navbarLinks = document.querySelectorAll('.navbar__links>li>a');
const navSectionsPosition = [
  ...navSections.map((item) => item.offsetTop - 200),
  document.querySelector('.footer').offsetTop,
];
let currentLink = 1;

window.onscroll = function () {
  const windowScrollTop = document.documentElement.scrollTop;
  const indexNumber = navSectionsPosition.findIndex(
    (item) => item > windowScrollTop,
  );

  if (!(indexNumber > 0)) return;
  if (currentLink !== indexNumber) {
    navbarLinks[currentLink - 1].classList.remove('active');
    currentLink = indexNumber;
  } else {
    navbarLinks[currentLink - 1].classList.add('active');
  }
};
