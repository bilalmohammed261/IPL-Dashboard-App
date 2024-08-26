// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: [],
    imageUrl: '',
    lastMatch: {},
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await data.json()
    // console.log(jsonData)

    const updatedData = {
      teamBannerUrl: jsonData.team_banner_url,
      latestMatchDetails: {
        competingTeam: jsonData.latest_match_details.competing_team,
        competingTeamLogo: jsonData.latest_match_details.competing_team_logo,
        date: jsonData.latest_match_details.date,
        firstInnings: jsonData.latest_match_details.first_innings,
        id: jsonData.latest_match_details.id,
        manOfTheMatch: jsonData.latest_match_details.man_of_the_match,
        matchStatus: jsonData.latest_match_details.match_status,
        result: jsonData.latest_match_details.result,
        secondInnings: jsonData.latest_match_details.second_innings,
        umpires: jsonData.latest_match_details.umpires,
        venue: jsonData.latest_match_details.venue,
      },
      recentMatches: jsonData.recent_matches.map(eachMatch => ({
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        date: eachMatch.date,
        firstInnings: eachMatch.first_innings,
        id: eachMatch.id,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        secondInnings: eachMatch.second_innings,
        umpires: eachMatch.umpires,
        venue: eachMatch.venue,
      })),
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    this.setState({
      isLoading: false,
      imageUrl: teamBannerUrl,
      lastMatch: latestMatchDetails,
      teamMatchesData: recentMatches,
    })
  }

  renderLoadingPage = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  displayTeamData = () => {
    const {imageUrl, lastMatch, teamMatchesData} = this.state
    return (
      <div>
        <img src={imageUrl} alt="team banner" />

        <p className="latest">Latest Matches</p>
        <LatestMatch lastMatch={lastMatch} />
        <ul className="match-results-container">
          {teamMatchesData.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    //  console.log(isLoading, teamMatchesData)
    return (
      <div className="team-details-container">
        {isLoading ? this.renderLoadingPage() : this.displayTeamData()}
      </div>
    )
  }
}

export default TeamMatches
