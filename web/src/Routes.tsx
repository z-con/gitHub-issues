import { Router, Route } from '@redwoodjs/router'

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" page={SearchPage} name="search" />
      <Route path="/issues/:owner/:repo" page={IssuesPage} name="issues" />
    </Router>
  )
}

export default Routes
