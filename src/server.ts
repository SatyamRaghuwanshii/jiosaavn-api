import {
  AlbumController,
  ArtistController,
  SearchController,
  SongController
} from '#modules/index'

import { PlaylistController } from '#modules/playlists/controllers'
import { ContentController } from '#modules/content/controllers'

import { App } from './app'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController(),
  new ContentController()
]).getApp()

export default app
