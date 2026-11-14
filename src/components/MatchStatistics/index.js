import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const MatchStatistics = props => {
  const {latestMatchDetails, recentMatches} = props

  const allMatches = [latestMatchDetails, ...recentMatches]

  const getStatusCount = status =>
    allMatches.filter(each => each.matchStatus === status).length

  const wonCount = getStatusCount('Won')
  const lostCount = getStatusCount('Lost')
  const drawnCount = getStatusCount('Drawn')

  const statisticsData = [
    {name: 'Won', value: wonCount, color: '#18ed66'},
    {name: 'Lost', value: lostCount, color: '#e31a1a'},
    {name: 'Drawn', value: drawnCount, color: '#f7db00'},
  ]

  return (
    <div className="match-statistics-container">
      <h1 className="match-statistics-heading">Match Statistics</h1>

      <div className="match-statistics-chart">
        <PieChart width={280} height={300}>
          <Pie
            data={statisticsData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {statisticsData.map(eachItem => (
              <Cell key={eachItem.name} fill={eachItem.color} />
            ))}
          </Pie>

          <Legend />
        </PieChart>
      </div>
    </div>
  )
}

export default MatchStatistics
