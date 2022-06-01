import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export default function Status(props: StatusProps) {

    let message

    if(props.status === 'loading'){
        message = 'Loading...'
    } else if (props.status === 'success'){
        message = 'data fetched successfully!'
    }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}
