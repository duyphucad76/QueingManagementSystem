import { routerForgotPassword, routerResetPassword } from '@view/Auth/ForgotPassword/router';
import { routerLogin } from '@view/Auth/Login/router';
import { routerViewProfile } from '@view/Auth/Profile/router';
import { routerViewAddDevice, routerViewDetailDevice, routerViewDevice, routerViewUpdateDevice } from '@view/Device/router';
import { routerHomepage } from '@view/Homepage/router';
import { routerViewAddProvide, routerViewDetailProvide, routerViewProvideNumber } from '@view/ProvideNumber/router';
import { routerViewReport } from '@view/Report/router';
import { routerViewRoot } from '@view/router';
import { routerViewAddService, routerViewDetailService, routerViewService, routerViewUpdateService } from '@view/Service/router';
import { routerViewAddRole, routerViewSetting, routerViewUpdateRole } from '@view/SettingSystem/router';

import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerViewRoot, routerHomepage, routerViewProfile, routerViewDevice, routerViewService, routerViewAddService,
  routerViewDetailService, routerViewUpdateService,
  routerViewProvideNumber, routerViewAddProvide, routerViewDetailProvide,
  routerViewReport, routerViewSetting, routerViewAddDevice, routerViewDetailDevice, routerViewUpdateDevice, routerViewAddRole, routerViewUpdateRole
];

export const publicPage: IRouter[] = [routerLogin, routerForgotPassword, routerResetPassword];
