import { supportsWebKitPresentationMode } from '../utils'
import { canPlay, AUDIO_EXTENSIONS } from '../patterns'

export default [
  {
    key: 'youtube',
    name: 'YouTube',
    canPlay: canPlay.youtube,
    lazyPlayer: /* webpackChunkName: 'reactPlayerYouTube' */'./YouTube'
  },
  {
    key: 'soundcloud',
    name: 'SoundCloud',
    canPlay: canPlay.soundcloud,
    lazyPlayer: /* webpackChunkName: 'reactPlayerSoundCloud' */'./SoundCloud'
  },
  {
    key: 'vimeo',
    name: 'Vimeo',
    canPlay: canPlay.vimeo,
    lazyPlayer: /* webpackChunkName: 'reactPlayerVimeo' */'./Vimeo'
  },
  {
    key: 'facebook',
    name: 'Facebook',
    canPlay: canPlay.facebook,
    lazyPlayer: /* webpackChunkName: 'reactPlayerFacebook' */'./Facebook'
  },
  {
    key: 'streamable',
    name: 'Streamable',
    canPlay: canPlay.streamable,
    lazyPlayer: /* webpackChunkName: 'reactPlayerStreamable' */'./Streamable'
  },
  {
    key: 'wistia',
    name: 'Wistia',
    canPlay: canPlay.wistia,
    lazyPlayer: /* webpackChunkName: 'reactPlayerWistia' */'./Wistia'
  },
  {
    key: 'twitch',
    name: 'Twitch',
    canPlay: canPlay.twitch,
    lazyPlayer: /* webpackChunkName: 'reactPlayerTwitch' */'./Twitch'
  },
  {
    key: 'dailymotion',
    name: 'DailyMotion',
    canPlay: canPlay.dailymotion,
    lazyPlayer: /* webpackChunkName: 'reactPlayerDailyMotion' */'./DailyMotion'
  },
  {
    key: 'mixcloud',
    name: 'Mixcloud',
    canPlay: canPlay.mixcloud,
    lazyPlayer: /* webpackChunkName: 'reactPlayerMixcloud' */'./Mixcloud'
  },
  {
    key: 'vidyard',
    name: 'Vidyard',
    canPlay: canPlay.vidyard,
    lazyPlayer: /* webpackChunkName: 'reactPlayerVidyard' */'./Vidyard'
  },
  {
    key: 'kaltura',
    name: 'Kaltura',
    canPlay: canPlay.kaltura,
    lazyPlayer: /* webpackChunkName: 'reactPlayerKaltura' */'./Kaltura'
  },
  {
    key: 'file',
    name: 'FilePlayer',
    canPlay: canPlay.file,
    canEnablePIP: url => {
      return canPlay.file(url) && (document.pictureInPictureEnabled || supportsWebKitPresentationMode()) && !AUDIO_EXTENSIONS.test(url)
    },
    lazyPlayer: /* webpackChunkName: 'reactPlayerFilePlayer' */'./FilePlayer'
  }
]
