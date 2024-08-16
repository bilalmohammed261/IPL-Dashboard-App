// Write your code here
import {Component} from 'react'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: [],
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
  }

  render() {
    const {teamMatchesData, isLoading} = this.state
    console.log(isLoading, teamMatchesData)
    return <h1>Team matches</h1>
  }
}

export default TeamMatches
