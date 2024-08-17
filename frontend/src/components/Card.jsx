import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className="bg-[#edf2f7]  rounded-lg shadow-sm py-4 border-2 ">
          <h3 className="text-lg font-semibold mb-2 border-b-2 px-6 ">{title}</h3>
          <p className="text-base text-gray-600 px-6 pb-6">
            {description}
          </p>
        </div>
  )
}
export default Card