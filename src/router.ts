// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/search`
  | `/show/:id/:season/episodes`
  | `/show/:id/seasons`

export type Params = {
  '/show/:id/:season/episodes': { id: string; season: string }
  '/show/:id/seasons': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
