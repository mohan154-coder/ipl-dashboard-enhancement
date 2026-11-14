import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const updated = data.teams.map(eachteam => ({
      id: eachteam.id,
      name: eachteam.name,
      teamImageUrl: eachteam.team_image_url,
    }))

    this.setState({
      teamsList: updated,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeams = () => {
    const {teamsList} = this.state

    return (
      <ul className="team-card-list">
        {teamsList.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="ipl-dashboard-heading-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeams()}
      </div>
    )
  }
}

export default Home
