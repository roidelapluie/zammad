// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/tickets/:internalId(\\d+)',
    name: 'TicketDetailView',
    props: true,
    component: () => import('./views/TicketDetailView.vue'),
    meta: {
      title: __('Ticket'), // TODO needs to be the ticket title/number (should be done inside of the route component?)
      requiresAuth: true,
      requiredPermission: ['ticket.agent', 'ticket.customer'],
      level: 3,
    },
  },
  {
    path: '/tickets/:internalId(\\d+)/information',
    component: () => import('./views/TicketInformationView.vue'),
    name: 'TicketInformationView',
    props: true,
    children: [
      {
        path: '',
        name: 'TicketInformationDetails',
        component: () => import('./views/TicketInformationDetails.vue'),
        meta: {
          requiresAuth: true,
          requiredPermission: [],
        },
      },
      {
        path: 'customer',
        name: 'TicketInformationCustomer',
        props: (route) => ({ internalId: Number(route.params.internalId) }),
        component: () => import('./views/TicketInformationCustomer.vue'),
        meta: {
          requiresAuth: true,
          requiredPermission: [],
        },
      },
      {
        path: 'organization',
        name: 'TicketInformationOrganization',
        component: () => import('./views/TicketInformationOrganization.vue'),
        meta: {
          requiresAuth: true,
          requiredPermission: [],
        },
      },
    ],
    meta: {
      title: __('Ticket information'),
      requiresAuth: true,
      requiredPermission: ['ticket.agent', 'ticket.customer'],
      hasHeader: true,
      level: 4,
    },
  },
  {
    path: '/tickets/view/:overviewLink?',
    name: 'TicketOverview',
    props: true,
    component: () => import('./views/TicketOverview.vue'),
    meta: {
      title: __('Tickets'),
      requiresAuth: true,
      requiredPermission: ['ticket.agent', 'ticket.customer'],
      hasBottomNavigation: true,
      level: 2,
    },
  },
  {
    path: '/tickets/create',
    name: 'TicketCreate',
    props: true,
    component: () => import('./views/TicketCreate.vue'),
    meta: {
      title: __('Ticket Create'),
      requiresAuth: true,
      requiredPermission: ['ticket.agent', 'ticket.customer'],
      level: 2,
    },
  },
]

export default routes
