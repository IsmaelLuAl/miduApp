import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {

  const users = [
    {
      userName: 'iluna',
      name: 'Ismael Luna',
      isFollowing: false
    },
    {
      userName: 'xray',
      name: 'Xeno Ray',
      isFollowing: false
    },
    {
      userName: 'mikela',
      name: 'Mikela',
      isFollowing: true
    }
  ]

  return (
    <>
      <section className='App'>
        {
          users.map(user => {
            const { userName, name, isFollowing } = user

            return (
              <TwitterFollowCard key = {userName} isFollowing={isFollowing} userName={userName}>
                {name}
              </TwitterFollowCard>
            )
          })
        }
      </section>
    </>
  )
}

export default App