import { BUTTONS, EVENTS } from '../const/const'

export function navigate (href) {
  window.history.pushState(null, null, href)
  // Evento personalizado para avisar que hemos cambiado de URL
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export const Link = ({ target, to, ...props }) => {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.PRIMARY // left click
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (
    <>
      <a onClick={handleClick} href={to} target={target} {...props} />
    </>
  )
}
