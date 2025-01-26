"use client"

import React from 'react'

const ExpandableText = ({ text }: { text: string }) => {
  const limit = 255
  const [isExpanded, setIsExpanded] = React.useState(false)

  if(text.length <= limit) {
    return (
      <article>{text}</article>
    )
  }
  return (
    <div>
      {isExpanded ? <article>{text}</article> : <article>{text.substring(0, limit)}</article>}
      <button className='btn' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default ExpandableText