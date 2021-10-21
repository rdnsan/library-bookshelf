import setAttributes from '../../utils/SetAttributes';

const utf = document.createElement('meta');
utf.setAttribute('charset', 'UTF-8');

const edge = document.createElement('meta');
setAttributes(edge, {
  'http-equiv': 'X-UA-Compatible',
  content: 'IE=edge',
});

const viewport = document.createElement('meta');
setAttributes(viewport, {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1.0',
});

const themeColor = document.createElement('meta');
setAttributes(themeColor, {
  name: 'theme-color',
  content: '#6fdcbf',
});

const description = document.createElement('meta');
setAttributes(description, {
  name: 'description',
  content: 'Simple App for Manage Your Bookshelf',
});

const keywords = document.createElement('meta');
setAttributes(keywords, {
  name: 'keywords',
  content: 'book, bookshelf, library, manage bookshelf, library bookshelf',
});

const manifest = document.createElement('link');
setAttributes(manifest, {
  rel: 'manifest',
  href: '/manifest.json',
});

const favicon = document.createElement('link');
setAttributes(favicon, {
  rel: 'icon',
  href: '/static/icons/favicon-128x128.png',
});

const appleIcon = document.createElement('link');
setAttributes(appleIcon, {
  rel: 'apple-touch-icon',
  href: '/static/icons/apple-touch-icon.png',
});

const apiGoogleFonts = document.createElement('link');
setAttributes(apiGoogleFonts, {
  rel: 'preconnect',
  href: 'https://fonts.googleapis.com',
});

const staticGoogleFonts = document.createElement('link');
setAttributes(staticGoogleFonts, {
  rel: 'preconnect',
  href: 'https://fonts.gstatic.com',
  crossorigin: '',
});

const lato = document.createElement('link');
setAttributes(lato, {
  rel: 'stylesheet',
  href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
});

const headContent: (HTMLMetaElement | HTMLLinkElement)[] = [
  viewport,
  themeColor,
  description,
  keywords,
  manifest,
  favicon,
  appleIcon,
  apiGoogleFonts,
  staticGoogleFonts,
  lato,
];

// render
document.head.append(...headContent);
