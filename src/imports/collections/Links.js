import { Mongo } from 'meteor/mongo'
import validUrl from 'valid-url'
import { check, Match } from 'meteor/check'

Meteor.methods({
  'links.get': () => {
    return Links.find({}).fetch()
  },

  'links.insert': (url) => {
    check(url, Match.Where(url => validUrl.isUri(url)))

    const link = Links.findOne({ url })
    if (link) return link

    // not found, add new one
    const token = Math.random().toString(36).slice(-5)
    const value = {url, token, clicks: 0}
    Links.insert(value)
    return value
  }
})

export const Links = new Mongo.Collection('links')
