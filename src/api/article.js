import {ajax} from '../store';
import config from '../config'


export const index_article = () => ajax('/web/article/index_article','','GET');

export const category_article = params => ajax('/web/article/category_article',params,'GET');
export const endorse_article = id => ajax('/web/article/endorse_article',{id},'GET');
export const create_collect = article_id => ajax('/web/article/create_collect',{article_id},'GET');
export const delete_collect = article_id => ajax('/web/article/delete_collect',{article_id},'GET');

export const get_article = id => ajax('/web/article/get_article',{id},'GET');
export const create_commonet = params => ajax('/web/article/create_comment',params,'POST');
export const list_comment = params => ajax('/web/article/list_comment',params,'GET');


export const list_category = () => ajax('/web/article/list_category','','GET');
export const most_click = () => ajax('/web/article/most_click','','GET');

//articleDetail
export const justify_article = params => ajax('/web/article/justify_article',params,'GET');




