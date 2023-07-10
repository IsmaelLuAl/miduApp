import PropTypes from 'prop-types';

TwitterFollowCard.propTypes = {
  userName: PropTypes.string,
  name: PropTypes.string,
  isFollowing: PropTypes.bool,
  formatUsername: PropTypes.func,
  children: PropTypes.any
}

function TwitterFollowCard({ formatUsername, userName = 'unknown', name, isFollowing, children }) {
  return (
    <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>

          <img alt="Twitter Avatar" src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar'/>
          <div className='tw-followCard-info'>
              <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{formatUsername(userName)}</span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button'>
            Seguir
          </button>
        </aside>
      </article>
    </>
  )
}

export default TwitterFollowCard