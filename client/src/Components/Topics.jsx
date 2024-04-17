import { Link } from 'react-router-dom';

const buttons = [
  { text: 'FOOD', link: '/food' },
  { text: 'DRINKS', link: '/drinks' },
  { text: 'PARTIES', link: '/parties' },
  { text: 'TOURISM', link: '/tourism' },
  { text: 'MUSEUMS', link: '/museums' },
  { text: 'ENZO', link: '/enzo' },
  { text: 'ENZO', link: '/enzo' },
  { text: 'ENZO', link: '/enzo' }
];

function Topics() {
  return (
    <div className="flex flex-row text-sm justify-center items-center gap-10 lg:gap-20 lg:text-xl">
      {buttons.map((button, index) => (
        <Link key={index} to={button.link}>
          <button>{button.text}</button>
        </Link>
      ))}
    </div>
    
  )
}

export default Topics