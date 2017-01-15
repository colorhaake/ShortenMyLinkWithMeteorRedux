import { createActionCreator } from './Common'

export const FetchLinks = createActionCreator('FETCH_LINKS')
export const FetchLinksRes = createActionCreator('FETCH_LINKS_RES')

export const AddLinks = createActionCreator('ADD_LINKS')
export const AddLinksRes = createActionCreator('ADD_LINKS_RES')
export const AddLinksError = createActionCreator('ADD_LINKS_ERROR')
