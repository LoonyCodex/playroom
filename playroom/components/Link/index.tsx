import React from 'react'
import { Link } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Link.displayName,
    name: '<a>: Ссылка',
    code: render(<Link href="https://reka.market">Ссылка</Link>),
  },
]

export { Link } from '@ProtoSetUI/set-ui'
