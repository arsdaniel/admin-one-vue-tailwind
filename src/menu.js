import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiFoodOutline 
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },{
    to: '/products',
    label: 'Products',
    icon: mdiFoodOutline
  },
  {
    to: '/tables',
    label: 'Tables',
    icon: mdiTable
  },
  {
    to: '/forms',
    label: 'Forms',
    icon: mdiSquareEditOutline
  },
  {
    to: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide
  },
  {
    to: '/responsive',
    label: 'Responsive',
    icon: mdiResponsive
  },
  {
    to: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle
  },
  {
    to: '/login',
    label: 'Login',
    icon: mdiLock
  },
  {
    to: '/error',
    label: 'Error',
    icon: mdiAlertCircle
  },
  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One'
      },
      {
        label: 'Item Two'
      }
    ]
  }
]
