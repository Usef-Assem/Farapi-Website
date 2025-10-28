import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function EmailIcon() {
  return (
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "#002733" }} />
                </div>
  )
}

export default EmailIcon
