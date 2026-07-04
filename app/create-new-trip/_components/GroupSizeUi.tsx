import React from 'react'

export const SelectTravelesList = [

    {

        id: 1,

        title: 'Just Me',

        desc: 'A sole traveles in exploration',

        icon: '✈️',

        people: '1'

    },

    {

        id: 2,

        title: 'A Couple',

        desc: 'Two traveles in tandem',

        icon: '🥂',

        people: '2 People'

    },

    {

        id: 3,

        title: 'Family',

        desc: 'A group of fun loving adv',

        icon: '🏡',

        people: '3 to 5 People'

    },

    {

        id: 4,

        title: 'Friends',

        desc: 'A bunch of thrill-seekes',

        icon: '⛵',

        people: '5 to 10 People'

    },

]


function GroupSizeUi({onSelectOption}:any) {
  return (
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
  {SelectTravelesList.map((item) => (
    <div
      key={item.id}
      onClick={() =>
        onSelectOption(item.title + " (" + item.people + ")")
      }
      className="border rounded-xl p-4 cursor-pointer hover:border-orange-500 hover:shadow-md transition"
    >
      <div className="text-4xl text-center">
        {item.icon}
      </div>

      <h2 className="font-semibold text-center mt-2">
        {item.title}
      </h2>

      <p className="text-xs text-center text-gray-500">
        {item.desc}
      </p>

      <p className="text-xs mt-2 text-center font-medium text-orange-500">
        {item.people}
      </p>
    </div>
  ))}
</div>
  )
}

export default GroupSizeUi
