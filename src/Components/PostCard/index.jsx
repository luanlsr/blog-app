import './style.css'

export const PostCard = ({post}) => {
    return (
        <div className='post'>
            <img src={post.cover} alt={post.title}/>
            <div className="post-content">
              <h1>{post.id} - {post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
    )
}
