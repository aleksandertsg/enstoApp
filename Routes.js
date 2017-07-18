'use-strict'
import HomeScreen from './Views/HomeScreen'
import App from './App'

export default class Routes {
  get (route, args) {
    if ('undefined' == typeof this[route]) {
      console.warn('No route')
      return false
    } else {
      return this[route].call(this, args)
    }
  }

  home () {
    return {
      name: 'HomeScreen',
      title: 'HOME',
      hideNavigationBar: true
    }
  }

  app () {
    return {
      name: 'App',
      title: 'App page',
      hideNavigationBar: true
    }
  }
}