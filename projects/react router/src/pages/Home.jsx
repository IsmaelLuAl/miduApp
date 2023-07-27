import { Link } from '../components/Link'

export function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is a example page for React Router</p>
      <Link to='/about'>Go About</Link>
    </>
  )
}
