import { useState, FormEvent } from 'react'

import { Form, TextField, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

const SearchPage: React.FC = () => {
  const [input, setInput] = useState('')

  const onSubmit = (data: { repoString: string }) => {
    const [owner, repo] = data.repoString.split('/')
    navigate(routes.issues({ owner, repo }))
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        name="repoString"
        placeholder="Enter owner/repo"
        value={input}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setInput(e.currentTarget.value)
        }
      />
      <Submit>Search</Submit>
    </Form>
  )
}

export default SearchPage
