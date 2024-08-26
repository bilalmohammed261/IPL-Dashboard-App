// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachMatch
  const resultText = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-container">
      <img
        className="opp-img"
        src={competingTeamLogo}
        alt={`competing match ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p className>{result}</p>
      <p className={resultText}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
