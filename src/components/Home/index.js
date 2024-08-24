// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const data = jsonData.teams
    const updatedTeamsData = data.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: updatedTeamsData})
  }

  render() {
    const {teamsData} = this.state
    // console.log(teamsData)

    return (
      <div className="app-container">
        <div className="logo-title-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">
          {teamsData.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
