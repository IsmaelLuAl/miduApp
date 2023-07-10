import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {

  const formatUsername = (userName) => `@${userName}`
  
  return (
    <>
      <section className='App'>
        <TwitterFollowCard formatUsername={formatUsername} isFollowing userName='iluna' name='Ismael Luna'/>
        <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} name='Algo'/>
        <TwitterFollowCard formatUsername={formatUsername} isFollowing={false} userName='xray'>
          Xeno Ray
        </TwitterFollowCard>
        <TwitterFollowCard formatUsername={formatUsername} isFollowing userName='mikela'>
          Mikela
        </TwitterFollowCard>
      </section>
    </>
  )
}

export default App