import React from 'react'
import { BackgroundImage } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: BackgroundImage.displayName,
    name: '<div>: картинка размером с экран',
    code: render(
      <BackgroundImage image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg" />
    ),
  },
]

export { BackgroundImage } from '@ProtoSetUI/set-ui'
