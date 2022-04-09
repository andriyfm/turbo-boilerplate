import * as React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchBar: React.FC = () => (
  <div className="flex items-center w-full px-3 py-2 border rounded-full gap-x-3 text-slate-800 border-slate-200 bg-slate-50">
    <HiOutlineSearch className="text-lg text-slate-800" />
    <input
      type="text"
      placeholder="Search something..."
      className="w-full p-0 text-sm bg-transparent border-0 focus:ring-0 focus:outline-none"
    />
  </div>
)

export default React.memo(SearchBar)
