import { IRouter } from '@routers/interface';

export const routerViewProfile: IRouter = {
  path: '/profile',
  name: 'common.profile',
  loader: import('./profileTest'),
  exact: true,
};
