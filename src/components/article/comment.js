import React from 'react'

import { Icon, Input, Button} from 'antd';
import './comment.scss'
import connect from "react-redux/es/connect/connect";
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            isOverflow: false,
            maxText: 999,
            isCommentInputHide: true,
        };
    }

    commentChange = ({target: {value}}) => {
        this.setState({commentText: value}, () => {
            this.props.onChange(this.state.commentText);
        });
    };


    createCommentHandle = () => {
        this.props.createComment();
        this.setState({commentText: ''});
    };

    readyComment=()=>{
        if(this.props.userInfo===void 0){
            this.props.dispatch({type: 'common/loginHandle',result:true});
            return;
        }
        this.setState({isCommentInputHide: false});
    };

    render() {
        let {value,userInfo} =this.props;
        return (
            <div className='Comment__container'>
                <h3 onClick={() => {
                    this.readyComment()
                }} className='comment__btn' style={{display: this.state.isCommentInputHide ? 'block' : 'none'}}>
                    我要写下我的评论
                    <Icon className='editComment__icon' type="edit"/>
                </h3>
                <div className="comment" style={{display: this.state.isCommentInputHide ? 'none' : 'block'}}>
                    <Input.TextArea value={value} maxLength={this.state.maxText}
                                    onChange={this.commentChange} className='comment__area'/>
                    <div className="comment__handle">
                        <p className='comment__hint'>还能输入{this.state.maxText - value.length}个字符</p>
                        <Button style={{display: value.length === 0 ? 'none' : 'block'}}
                                onClick={() => {

                                    this.setState({commentText: ''},()=>{
                                        this.props.onChange(this.state.commentText);
                                    });
                                }}
                                className='comment__close'>取消回复</Button>
                        <Button onClick={this.createCommentHandle} type="danger">发表评论</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
        return {userInfo: state.sessionRender.userInfo}//在这里将render的值赋值给props,之后this.props就可以获得userInfo,
    }
)(Comment) // 高阶函数，第一次执行返回一个函数，需要再次执行以完成整个流程。