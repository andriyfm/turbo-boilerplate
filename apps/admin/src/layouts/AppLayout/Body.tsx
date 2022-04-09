import * as React from 'react'
import Footer from './Footer'

const Body: React.FC = ({ children }) => (
  <div className="flex flex-col h-[calc(100vh-64px)] pr-2 flex-1 overflow-auto bg-gray-50 border-slate-200 scrollbar scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-transparent transition-all">
    <div className="flex-1 p-5">{children}</div>
    <Footer />
  </div>
)

export default Body
