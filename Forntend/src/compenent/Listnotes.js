import Navbar from './Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

const people = [
    {
      name: 'Leslie Alexander',

    },
    {
      name: 'Michael Foster',
  
    },
    {
      name: 'Dries Vincent',
    
    },
    {
      name: 'Lindsay Walton',
    },
    {
      name: 'Lindsay Walton',
    }, {
      name: 'Lindsay Walton',
    }, {
      name: 'Lindsay Walton',
    }, {
      name: 'Lindsay Walton',
    },
    
  ]
  
  export default function Example() {
    
    return (
      <>
      <Navbar/>
  
        <div className="main">
          <div className="addbtn flex justify-center bg-gradient-to-r from-black to-indigo-900">
              <button className="border-solid text-white p-3 m-2 w-40 font-semibold rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black" >
              <i className="m-2  fas fa-plus"></i>
                Add new note
                </button>
            </div>    

      <ul role="list" className="divide-y divide-gray-100  h-screen  overflow-x-hidden hide-scrollbar bg-slate-900">
        {people.map((person) => (
          <li key={person.email} className="border-solid p-3 m-2 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto m-2 ">
                <p className="text-sm font-semibold  leading-6 text-white">{person.name}</p>
               
              </div>
            </div>
        
          </li>
        ))}
      </ul>
     </div>
        </>
    )
  }
  