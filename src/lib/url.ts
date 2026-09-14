// One place to handle GitHub Pages subdirectories and future root-domain hosting.
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
