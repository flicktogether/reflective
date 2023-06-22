export default defineAppConfig({
  docus: {
    title: 'Reflective UI',
    titleTemplate: '%s — Reflective UI',
    description: 'Özəlləşdirilə bilən interfeys kitabxanası.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      discord: {
        label: 'Discord',
        icon: 'ic:baseline-discord',
        href: 'https://discord.gg/Pb8S8bsVrV'
      }, 
      github: 'FlickPlatform/reflective',
      twitter: 'FlickPlatform'
    },
    github: {
      dir: 'web/content',
      branch: 'main',
      repo: 'reflective',
      owner: 'FlickPlatform',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
  }
})