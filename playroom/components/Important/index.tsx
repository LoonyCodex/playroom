import React from 'react'
import { Important } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Important.displayName,
    name: '<strong>: Текст сильной значимости',
    code: render(<Important>Текст сильной значимости</Important>),
  },
]

export { Important } from '@ProtoSetUI/set-ui'
