import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props
  return (
    <div>
      <h2>{props.isLoggedIn ?
          ` welcome ${props.name} you have 
          ${messageCount} 
          unread messages`: 'welcome guest'}
      </h2>
    </div>
  )
}
