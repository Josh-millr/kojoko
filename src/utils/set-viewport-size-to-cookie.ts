import Cookies from 'js-cookie';

import { serialize } from './serialize';

export const setViewportSizeToCookie = (width: number, height: number) => {
  Cookies.set('viewport-size', serialize({ width, height }));
};
