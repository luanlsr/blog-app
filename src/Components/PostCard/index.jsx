import './style.css'

export const PostCard = ({cover, title, id, body}) => {
    return (
        <div className='post'>
            <img src={cover} alt={title}/>
            <div className="post-content">
              <h1>{id} - {title}</h1>
              <p>{body}</p>
            </div>
          </div>
    )
}
