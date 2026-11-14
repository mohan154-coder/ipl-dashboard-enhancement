import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <div className="team-image-name-container">
          <img className="team-image" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
