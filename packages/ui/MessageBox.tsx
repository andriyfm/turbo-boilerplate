import * as React from 'react'

interface Props {
  text: string
}

const MessageBox: React.FC<Props> = ({ text }) => (
  <div
    role="textbox"
    className="px-6 py-4 text-sm text-white bg-black rounded-md"
  >
    {text}
  </div>
)

export default MessageBox
