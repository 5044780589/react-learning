
import React from 'react'
import ThemeContext from '../theme-context'
/**
 * @必传参数 commmentsLength Number  handleSubmit function
 * @留言输入组件
 * @class CommentBox
 * @extends {React.Component}
 */
class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){

    }
    handleSubmit(event){
        this.props.handleSubmit(this.textInput.value)
        this.textInput.value = ''
        event.preventDefault()//阻止提交后续事件触发
    }
    render(){
        return (
            <ThemeContext.Consumer>
             {
                 theme => {
                    return(
                        <form onSubmit={this.handleSubmit} style={{textAlign:'left',backgroundColor:theme.bgColor,color:theme.color}} className="mb-3">
                            <div style={{textAlign:'left'}} className="form-group">
                                <label>留言内容</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="请输入内容"
                                    ref={(textInput)=>{this.textInput = textInput}}                   
                                >
                                </input>
                                
                            </div>
                            <button className={theme.classnames} type="submit">留言</button>
                            <p style={{float:'right'}}>已有{this.props.commmentsLength}条评论</p>
                        </form>
                    )
                 }
             }   
            </ThemeContext.Consumer>
            
        )
    }
}
export default CommentBox