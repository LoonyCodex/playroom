import React from 'react'
import { Cover, H1, Time } from '@ProtoSetUI/set-ui'
import render from 'react-element-to-jsx-string'

export default [
  {
    group: Cover.displayName,
    name: '<section>: Обложка',
    code: `
      <${Cover.displayName} image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg">
        <H1>Центрированный заголовок</H1>
      </${Cover.displayName}>
    `,
  },
  {
    group: Cover.displayName,
    name: '<section>: Обложка с датой',
    code: `
      <${Cover.displayName} image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg">
        <Time>04.12.1995</Time>
        <H1>Центрированный заголовок</H1>
      </${Cover.displayName}>
    `,
  },
]

export { Cover } from '@ProtoSetUI/set-ui'
