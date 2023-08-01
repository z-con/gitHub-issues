import { useEffect, useState } from 'react'

import { useParams } from '@redwoodjs/router'

interface Issue {
  id: number
  title: string
  body: string
}

interface RouteParams {
  owner: string
  repo: string
}

const IssuesPage: React.FC = () => {
  const { owner, repo } = useParams<RouteParams>()
  const [issues, setIssues] = useState<Issue[] | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
      .then((response) => response.json())
      .then((data: Issue[]) => setIssues(data))
  }, [owner, repo])

  return (
    <div>
      {issues ? (
        issues.map((issue: Issue) => (
          <div key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.body}</p>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default IssuesPage
