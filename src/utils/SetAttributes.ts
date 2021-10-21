/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// prettier-ignore
const setAttributes = (element: HTMLMetaElement | HTMLLinkElement, attribute: any) => {
  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
};

export default setAttributes;
