import React from 'react'
import {Icon, Avatar} from 'antd';

import './commentList.scss'


export default class CommentList extends React.Component {
    render() {
        const {data,pageSize}=this.props;
        return (
            <div className='CommentList__container'>
                <div className="CommentList">
                    {
                        data.map((comment,index)=>(
                            <div key={index} className="comment__item">
                                <div className='header'>
                                    <Avatar size={40} icon="user"/>
                                    <span className='author'>{comment.nick}</span>
                                </div>
                                <p className='content'>
                                    {comment.content}
                                </p>
                                <div className="footer">
                                    <div className='like'>
                                        <Icon type="like" theme={'filled'}/>
                                        <span className='like__number'>10</span>
                                    </div>
                                    <span className='time'>{comment.create_time}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/*{data.length<pageSize?<p className='remind'>没有更多评论了</p>:null}*/}
                {/*{data.length===pageSize?<p className='remind'>查看更多评论</p>:null}*/}

            </div>
        );
    }
}
