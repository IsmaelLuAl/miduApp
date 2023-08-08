import { Sub } from "../types"

interface Props {
  subs: Array<Sub>
}

const List = ({subs}: Props) => {
  const renderList = (): Array<JSX.Element> => {
    return subs.map((sub) => {
        return (
          <>
            <li key={sub.nick}>
              <img style={{height: "150px", borderRadius: "200px"}} src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>Nick: {sub.nick} (<small>{sub.subMonth}</small>)</h4>
              <h4>Description: {sub.description?.substring(0, 10)}</h4>
            </li>
          </>
        )
      })
    }


  return (
    <>
      <ul style={{listStyle: "none"}}>
        {renderList()}
      </ul>
    </>
  )
}

export default List