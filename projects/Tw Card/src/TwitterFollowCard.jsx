import PropTypes from 'prop-types';
import { useState } from 'react';

TwitterFollowCard.propTypes = {
  userName: PropTypes.string,
  name: PropTypes.string,
  formatUsername: PropTypes.func,
  children: PropTypes.any,
  initialIsFollowing: PropTypes.bool
}

function TwitterFollowCard({ userName = 'unknown', children, initialIsFollowing }) {

  const [isFollowing, setFollowState] = useState(initialIsFollowing)

  const textFollow = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button' 

  const handleClick = () => {
    setFollowState(!isFollowing)
  }

  return (
    <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>

          <img alt="Twitter Avatar" src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar'/>
          <div className='tw-followCard-info'>
              <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{textFollow}</span>
            <span className='tw-followCard-unfollow'>Unfollow</span>
          </button>
        </aside>
      </article>
    </>
  )
}

export default TwitterFollowCard