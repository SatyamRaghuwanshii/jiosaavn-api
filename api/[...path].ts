import app from '../dist/index.js'

export default {
  fetch(request: Request) {
    return app.fetch(request)
  }
}
