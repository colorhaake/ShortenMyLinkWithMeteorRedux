import { call } from '../utils/MeteorHelper'

export const fetchLinks = () => (
  call('links.get')
)

export const addLinks = (url) => (
  call('links.insert', url)
)
