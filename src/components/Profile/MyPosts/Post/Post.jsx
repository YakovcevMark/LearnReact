import classes from './Post.module.css';

const Post = ({message, likesCount, deletePost, id}) => {
    return (
        <div className={classes.item}>
            <img
                src="https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg"
                alt=""/>
            {message}
            <div>
                <span>like {likesCount}</span>
                <button onClick={() => deletePost(id)}>Delete post</button>
            </div>
        </div>
    )
}

export default Post;