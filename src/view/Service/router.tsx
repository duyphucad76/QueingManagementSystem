import { service } from '@assets/svg';
import { IRouter } from '@routers/interface';
import React from 'react';
import { ReactSVG } from 'react-svg';

export const routerViewService: IRouter = {
  path: '/service',
  name: 'common.service',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <ReactSVG className="icon-has-fill-has-stroke" src={service} />,
    'exact': true,
    activePath: /service/i,
    'hideInNavbar': false,
  },
};

export const routerViewAddService: IRouter = {
  path: "/service/add",
  name: "service.add",
  loader: import("./component/addService"),
  exact: true
}

export const routerViewDetailService: IRouter = {
  path: '/service/:serviceId',
  name: "service.detail",
  loader: import('./component/detailService'),
  exact: true
}

export const routerViewUpdateService: IRouter = {
  path: '/service/update/:serviceId',
  name: "service.update",
  loader: import('./component/updateService'),
  exact: true
}