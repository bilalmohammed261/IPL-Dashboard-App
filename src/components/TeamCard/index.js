// Write your code here
import './index.css'
// import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  console.log(id)

  return (
    <li className="team-card">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <p className="team-title">{name}</p>
    </li>
  )
}

export default TeamCard

// <Link to={`/team-matches/${id}`}> </Link>
