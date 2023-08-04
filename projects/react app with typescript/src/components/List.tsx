interface Props {
  subs: Array<{
    nick: string,
    avatar: string,
    subMonths: number,
    description?: string
  }>
}

const List = ({subs}: Props) => {
  return (
    <>
      <ul style={{listStyle: "none"}}>
        {
          subs.map((sub) => {
            return (
              <>
                <li key={sub.nick}>
                  <img style={{height: "150px", borderRadius: "200px"}} src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                  <h4>Nick: {sub.nick} (<small>{sub.subMonths}</small>)</h4>
                  <h4>Description: {sub.description?.substring(0, 10)}</h4>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default List