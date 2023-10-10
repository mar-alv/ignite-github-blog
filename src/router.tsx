import { Route, Routes } from 'react-router-dom'
import { HomePage, IssuePage } from '@pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/issue/:userNickname/:issueId" element={<IssuePage />} />
    </Routes>
  )
}
