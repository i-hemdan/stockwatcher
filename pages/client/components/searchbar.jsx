import {React} from 'react'

export const SearchBar = ({onSearchClick}) => {
    return (
      <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input type="text" name="search" id="search" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Add a symbol"/>
        <div className="absolute inset-y-0 right-6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
    )
}