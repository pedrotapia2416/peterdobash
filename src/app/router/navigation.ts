export const navigationEventName = 'pdb:navigation';

export const navigateTo = (href: string) => {
  const url = new URL(href, window.location.href);
  const currentUrl = new URL(window.location.href);
  const pathChanged = url.pathname !== currentUrl.pathname || url.search !== currentUrl.search;

  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event(navigationEventName));

  if (url.hash) {
    document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (pathChanged) {
    window.scrollTo({ top: 0 });
  }
};
