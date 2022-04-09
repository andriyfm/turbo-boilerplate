import React from 'react'
import {
  HiOutlineBan,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineChat,
  HiOutlineChatAlt2,
  HiOutlineClipboardList,
  HiOutlineDesktopComputer,
  HiOutlineDocumentReport,
  HiOutlineDocumentText,
  HiOutlineExclamation,
  HiOutlineGlobe,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineNewspaper,
  HiOutlinePaperClip,
  HiOutlinePresentationChartLine,
  HiOutlinePuzzle,
  HiOutlineShoppingBag,
  HiOutlineTemplate,
  HiOutlineTrendingUp,
} from 'react-icons/hi'

export interface INav {
  title: string
  icon?: React.ReactNode
  href?: string
  children?: INav[]
}

export const dashboardNavs: INav[] = [
  {
    title: 'Default',
    href: '/',
    icon: <HiOutlinePuzzle />,
  },
  {
    title: 'analitycs',
    href: '/analitycs',
    icon: <HiOutlineTrendingUp />,
  },
  {
    title: 'Sales',
    href: '/sales',
    icon: <HiOutlinePresentationChartLine />,
  },
]

export const appNavs: INav[] = [
  {
    title: 'mail',
    href: '/mail',
    icon: <HiOutlineMail />,
  },
  {
    title: 'chat',
    href: '/chat',
    icon: <HiOutlineChat />,
  },
  {
    title: 'calender',
    href: '/calender',
    icon: <HiOutlineCalendar />,
  },
  {
    title: 'projects',
    href: '',
    icon: <HiOutlineLightBulb />,
    children: [
      { title: 'list', href: '/list' },
      { title: 'scrumboard', href: '/scrumboard' },
    ],
  },
  {
    title: 'e-commerce',
    href: '',
    icon: <HiOutlineShoppingBag />,
    children: [
      { title: 'products', href: '/products' },
      { title: 'new product', href: '/new-product' },
      { title: 'edit product', href: '/edit-product' },
      { title: 'orders', href: '/orders' },
    ],
  },
]

export const compnentsNavs: INav[] = [
  {
    title: 'general',
    icon: <HiOutlineExclamation />,
    children: [
      {
        title: 'button',
        href: '/general/button',
      },
      {
        title: 'icon',
        href: '/general/icon',
      },
      {
        title: 'typography',
        href: '/general/typography',
      },
    ],
  },
  {
    title: 'layout',
    icon: <HiOutlineTemplate />,
    children: [
      {
        title: 'grid',
        href: '/layouts/grid',
      },
      {
        title: 'layout',
        href: '/layouts/layout',
      },
    ],
  },
  {
    title: 'navigation',
    icon: <HiOutlineGlobe />,
    children: [
      {
        title: 'afix',
        href: '/navigations/afix',
      },
      {
        title: 'breadcrumb',
        href: '/navigations/breadcrumb',
      },
      {
        title: 'dropdown',
        href: '/navigations/dropdown',
      },
      {
        title: 'menu',
        href: '/navigations/menu',
      },
      {
        title: 'pagination',
        href: '/navigations/pagination',
      },
      {
        title: 'page header',
        href: '/navigations/page-header',
      },
      {
        title: 'steps',
        href: '/navigations/steps',
      },
    ],
  },
  {
    title: 'data entry',
    icon: <HiOutlineClipboardList />,
    children: [
      {
        title: 'auto complete',
        href: '/entries/auto-complete',
      },
      {
        title: 'checkbox',
        href: '/entries/checkbox',
      },
      {
        title: 'cascader',
        href: '/entries/cascader',
      },
      {
        title: 'data picker',
        href: '/entries/data-picker',
      },
      {
        title: 'input number',
        href: '/entries/input-number',
      },
      {
        title: 'input',
        href: '/entries/input',
      },
      {
        title: 'mentions',
        href: '/entries/mentions',
      },
      {
        title: 'rate',
        href: '/entries/rate',
      },
      {
        title: 'radio',
        href: '/entries/radio',
      },
      {
        title: 'switch',
        href: '/entries/switch',
      },
      {
        title: 'slider',
        href: '/entries/slider',
      },
      {
        title: 'select',
        href: '/entries/select',
      },
      {
        title: 'tree select',
        href: '/entries/tree-select',
      },
      {
        title: 'transfer',
        href: '/entries/transfer',
      },
      {
        title: 'time picker',
        href: '/entries/time-picker',
      },
      {
        title: 'upload',
        href: '/entries/upload',
      },
    ],
  },
  {
    title: 'data display',
    icon: <HiOutlineDesktopComputer />,
    children: [
      {
        title: 'avatar',
        href: '/displays/avatar',
      },
      {
        title: 'badge',
        href: '/displays/badge',
      },
      {
        title: 'comment',
        href: '/displays/comment',
      },
      {
        title: 'collapse',
        href: '/displays/collapse',
      },
      {
        title: 'card',
        href: '/displays/card',
      },
      {
        title: 'calendar',
        href: '/displays/calendar',
      },
      {
        title: 'descriptions',
        href: '/displays/descriptions',
      },
      {
        title: 'empty',
        href: '/displays/empty',
      },
      {
        title: 'list',
        href: '/displays/list',
      },
      {
        title: 'popover',
        href: '/displays/popover',
      },
      {
        title: 'statistic',
        href: '/displays/statistic',
      },
      {
        title: 'tree',
        href: '/displays/tree',
      },
      {
        title: 'tooltip',
        href: '/displays/tooltip',
      },
      {
        title: 'timeline',
        href: '/displays/timeline',
      },
      {
        title: 'tag',
        href: '/displays/tag',
      },
      {
        title: 'tabs',
        href: '/displays/tabs',
      },
      {
        title: 'table',
        href: '/displays/table',
      },
    ],
  },
  {
    title: 'feedback',
    icon: <HiOutlineChatAlt2 />,
    children: [
      {
        title: 'alert',
        href: '/feedback/alert',
      },
      {
        title: 'drawer',
        href: '/feedback/drawer',
      },
      {
        title: 'modal',
        href: '/feedback/modal',
      },
      {
        title: 'message',
        href: '/feedback/message',
      },
      {
        title: 'notification',
        href: '/feedback/notification',
      },
      {
        title: 'progress',
        href: '/feedback/progress',
      },
      {
        title: 'popconfirm',
        href: '/feedback/popconfirm',
      },
      {
        title: 'result',
        href: '/feedback/result',
      },
      {
        title: 'spin',
        href: '/feedback/spin',
      },
      {
        title: 'skeleton',
        href: '/feedback/skeleton',
      },
    ],
  },
  {
    title: 'others',
    icon: <HiOutlinePaperClip />,
    children: [
      {
        title: 'anchor',
        href: '/others/anchor',
      },
      {
        title: 'backtop',
        href: '/others/backtop',
      },
      {
        title: 'config provider',
        href: '/others/config-provider',
      },
      {
        title: 'divider',
        href: '/others/divider',
      },
    ],
  },
  {
    title: 'charts',
    icon: <HiOutlineChartBar />,
    children: [
      {
        title: 'apex chart',
        href: '/charts/apex-ch',
      },
      {
        title: 'ChartJs',
        href: '/charts/chartjs',
      },
    ],
  },
  {
    title: 'maps',
    icon: <HiOutlineGlobeAlt />,
    children: [
      {
        title: 'google maps',
        href: '/maps/google-maps',
      },
      {
        title: 'mapbox',
        href: '/maps/mapbox',
      },
      {
        title: 'simple-maps',
        href: '/maps/simple-maps',
      },
    ],
  },
]

export const pagesNavs: INav[] = [
  {
    title: 'pages',
    href: '',
    icon: <HiOutlineNewspaper />,
    children: [
      {
        title: 'profile',
        href: '/pages/profile',
      },
      {
        title: 'user list',
        href: '/pages/user list',
      },
      {
        title: 'invoice',
        href: '/pages/invoice',
      },
      {
        title: 'pricing',
        href: '/pages/pricing',
      },
      {
        title: 'FAQ',
        href: '/pages/faq',
      },
      {
        title: 'setting',
        href: '/pages/setting',
      },
    ],
  },
  {
    title: 'authentication',
    href: '',
    icon: <HiOutlineLockClosed />,
    children: [
      {
        title: 'login',
        href: '/authentications/login',
      },
      {
        title: 'login 2',
        href: '/authentications/login-2',
      },
      {
        title: 'register',
        href: '/authentications/register',
      },
      {
        title: 'register 2',
        href: '/authentications/register-2',
      },
      {
        title: 'forgot-password',
        href: '/authentications/forgot-password',
      },
    ],
  },
  {
    title: 'error',
    href: '',
    icon: <HiOutlineBan />,
    children: [
      {
        title: 'error page',
        href: '/errors/error-page',
      },
      {
        title: 'error page 2',
        href: '/errors/error-page-2',
      },
    ],
  },
]

export const docsNavs: INav[] = [
  {
    title: 'documentation',
    href: '/docs/documentation',
    icon: <HiOutlineDocumentText />,
  },
  {
    title: 'changelog',
    href: '/docs/changelog',
    icon: <HiOutlineDocumentReport />,
  },
]
