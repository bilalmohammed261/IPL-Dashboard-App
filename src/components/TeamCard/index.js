// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  console.log(id)

  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-title">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

//  </Link>
