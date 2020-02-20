import {ajax} from '../store';
import config from '../config'


export const login = (params) => ajax('/web/session/login',params,'POST');
export const userInfo = () => ajax('/web/session/userInfo','','GET');
export const captcha = () => ajax('/web/session/captcha','','GET');












