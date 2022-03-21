import './style/index.scss'
import { createTheme } from '@acnb/core'
console.log(createTheme);
// import build from './build'
import {
  darkMode,
  colorMode,
  codeCopy,
  codeLinenumbers,
  codeLang,
  codeHighlight,
  commentsAvatars,
  tools,
  catalog,
  imagePreview,
  emoji,
} from '@acnb/plugins'

createTheme()
  .use(colorMode, { enable: true, color: '#323EBE' })
  .use(darkMode, { enable: true })
  .use(codeCopy, { enable: true })
  .use(codeLinenumbers, { enable: true })
  .use(codeLang, { enable: true })
  .use(codeHighlight, { enable: true })
  .use(commentsAvatars, { enable: true })
  .use(catalog, { enable: true })
  .use(imagePreview, { enable: true })
  .use(emoji, { enable: true })
  .use(
    tools,
    { enable: true },
    {
      menuIcon: '',
      scrollContainer: '#mainContent',
      toolbarItems: [
        {
          icon: 'fa-rocket rocket-rotate',
        },
        {
          enable: true,
          icon: 'fa-moon',
        },
        {
          icon: 'fa-thumbs-up',
        },
        {
          icon: 'fa-heart',
        },
        {
          icon: 'fa-star',
        },
        {
          icon: 'fa-comment-dots',
        },
      ],
    }
  )
