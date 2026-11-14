import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-section">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-team-details">
          <p className="latest-match-team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          className="latest-match-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <div className="latest-match-innings-details">
          <h1 className="latest-match-label">First Innings</h1>
          <p className="latest-match-value">{firstInnings}</p>
          <h1 className="latest-match-label">Second Innings</h1>
          <p className="latest-match-value">{secondInnings}</p>
          <h1 className="latest-match-label">Man Of The Match</h1>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <h1 className="latest-match-label">Umpires</h1>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
