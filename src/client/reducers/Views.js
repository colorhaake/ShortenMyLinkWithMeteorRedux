import { handleFetchLinks } from './Links'

export const handleShortenHistoryViewReady = (state = [], action) => {
  return handleFetchLinks(state, action)
}

