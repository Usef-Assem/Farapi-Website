'use client'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PhoneIcon() {
  return (
                <div className="w-10 h-10 relative flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "#002733" }} />
                </div>
  )
}

export default PhoneIcon
