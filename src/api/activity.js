import {ajax} from '../store';


export const create_activity = params => ajax('/web/activity/create_activity',params,'POST');
export const update_activity = params => ajax('/web/activity/update_activity',params,'POST');

export const get_activity = (id) => ajax('/web/activity/get_activity',{id},'GET');



export const get_type = (id) => ajax('/web/activity/get_type',{id},'GET');




//
export const list_province = () => ajax('/web/activity/list_province','','GET');
export const list_type = () => ajax('/web/activity/list_type','','GET');
export const list_activity = (params) => ajax('/web/activity/list_activity',params,'POST');




