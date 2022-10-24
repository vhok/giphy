import './Avatar.scss'

export const Avatar = ({ children, user }) => {
  return <div className='avatar__container'>
    {children}
    {user ? <img className='avatar__image' src={user.avatar_url} alt={user.description} /> : null}
  </div>
}