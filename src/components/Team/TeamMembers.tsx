import { FaRegUserCircle } from 'react-icons/fa';

const people = [
  {
    name: 'Vedeant Tiwari',
    role: 'Founder And CEO',
  },
  {
    name: 'Deepanshu',
    role: 'Co-Founder ',
  },
  {
    name: 'Divyanshu Agarwal',
    role: 'facbooke/google ads specialist',
  },
  {
    name: 'Heer goel',
    role: 'facebook/google ads speacialist',
  },
  {
    name: 'Shruti mahajan',
    role: 'graphic designer',
  },
]

const TeamMembers = () => {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto flex max-w-7xl gap-x-8 gap-y-20 px-6 flex-col">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold  text-orange-500 sm:text-4xl">Meet our leadership</h2>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {/* <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" /> */}
                <FaRegUserCircle size={36} />
                <div>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-lg font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamMembers;