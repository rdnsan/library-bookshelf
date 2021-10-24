/* eslint-disable guard-for-in */
// prettier-ignore
const setAttributes = (element: HTMLMetaElement | HTMLLinkElement, attribute: any): void => {
  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
};

export default setAttributes;
