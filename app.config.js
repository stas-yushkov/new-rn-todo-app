import 'dotenv/config';

export default {
  'expo': {
    'name': 'new-rn-todo-app',
    'slug': 'new-rn-todo-app',
    'version': '1.0.0',
    'orientation': 'default',
    'icon': './assets/images/icon.png',
    'userInterfaceStyle': 'automatic',
    'splash': {
      'image': './assets/images/splash.png',
      'resizeMode': 'contain',
      'backgroundColor': '#282C34',
    },
    'extra': {
      'DB_URL_BASE': process.env.DB_URL_BASE || null,
    },
    'updates': {
      'fallbackToCacheTimeout': 0
    },
    'assetBundlePatterns': ['**/*'],
    'ios': {
      'supportsTablet': true
    },
    'android': {
      'adaptiveIcon': {
        'foregroundImage': './assets/images/adaptive-icon.png',
        'backgroundColor': '#FFFFFF'
      }
    },
    'web': {
      'favicon': './assets/images/favicon.png'
    }
  }
}
