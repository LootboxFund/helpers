/**
 * --------- How Advertiser Treasury Works ----------
 *
 * Advertisers have a treasury from which affiliate revenue is deducted from
 * The treasury can only be in USDC
 *
 * Each Conquest sets its own max spend for the amount of money it can spend
 * This will not take away from the treasury balance
 * Thus multiple conquests can share the same treasury balance, and there is a risk that one Conquest takes up the entire budget
 *
 * Each Offer sets its own max spend too
 * Multiple offers can share the same treasury balance, and there is a risk that the funds dry out
 *
 * Events cannot set their own max spend because they have multiple offers from multiple advertisers
 *
 * It is possible for affiliate activations to bill more than the treasury balance
 * This is because sometimes the advertiser still wants the activations and will still pay
 * However they just need time to get the funds in
 */

import { FlightID, OfferID, TournamentID, UserID } from './base.type'

export enum OfferStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Planned = 'Planned',
  Archived = 'Archived',
}

export enum ActivationStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Planned = 'Planned',
  Archived = 'Archived',
}

export type ConquestID = string & { readonly _: unique symbol }
export enum ConquestStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Planned = 'Planned',
  Archived = 'Archived',
}

export type AffiliateBaseLink = string

export enum MeasurementPartnerType {
  Appsflyer = 'Appsflyer',
  GoogleTagManager = 'GoogleTagManager',
  ServerToServer = 'ServerToServer',
  Manual = 'Manual',
  None = 'None',
  LootboxAppAdView = 'LootboxAppAdView',
  LootboxAppAnswerQuestions = 'LootboxAppAnswerQuestions',
  LootboxAppWebsiteVisit = 'LootboxAppWebsiteVisit',
}

export const mmpTable = {
  [MeasurementPartnerType.Appsflyer]: {
    title: 'AppsFlyer',
    description: 'AppsFlyer',
    learnMore: 'https://www.appsflyer.com/',
  },
  [MeasurementPartnerType.GoogleTagManager]: {
    title: 'Google Tag Manager',
    description: 'Google Tag Manager',
    learnMore: 'https://tagmanager.google.com/',
  },
  [MeasurementPartnerType.Manual]: {
    title: 'Manual',
    description: 'Manual',
    learnMore: 'https://lootbox.fund/',
  },
  [MeasurementPartnerType.ServerToServer]: {
    title: 'ServerToServer',
    description: 'ServerToServer',
    learnMore: 'https://lootbox.fund/',
  },
  [MeasurementPartnerType.LootboxAppAdView]: {
    title: 'Lootbox App - Ad View',
    description: 'Lootbox App - Ad View',
    learnMore: 'https://lootbox.fund/',
  },
  [MeasurementPartnerType.LootboxAppAnswerQuestions]: {
    title: 'Lootbox App - Answer Questions',
    description: 'Lootbox App - Answer Questions',
    learnMore: 'https://lootbox.fund/',
  },
  [MeasurementPartnerType.LootboxAppWebsiteVisit]: {
    title: 'Lootbox App - Website Visit',
    description: 'Lootbox App - Website Visit',
    learnMore: 'https://lootbox.fund/',
  },
}

export const tableActivationIngestorRoutes = {
  [MeasurementPartnerType.Manual]: {
    path: '/manual',
    method: 'POST',
  },
  [MeasurementPartnerType.Appsflyer]: {
    path: '/appsflyer',
    method: 'GET',
  },
  [MeasurementPartnerType.ServerToServer]: {
    path: '/server-to-server',
    method: 'POST',
  },
  [MeasurementPartnerType.LootboxAppAdView]: {
    path: '/lootbox-app',
    method: 'POST',
  },
  [MeasurementPartnerType.LootboxAppAnswerQuestions]: {
    path: '/lootbox-app',
    method: 'POST',
  },
  [MeasurementPartnerType.LootboxAppWebsiteVisit]: {
    path: '/lootbox-app',
    method: 'POST',
  },
}
export interface ActivationIngestorRoute_LootboxAppActivation_Body {
  flightID: FlightID
  activationID: ActivationID
  mmpAlias: string
}
export interface ActivationIngestorRoute_Manual_Body {
  activationID: ActivationID
  userID?: UserID
  userEmail?: string
  userPhone?: string
  offerID?: OfferID
  tournamentID?: TournamentID
  activationEventMmpAlias?: string
}

export type AdTargetTagID = string & { readonly _: unique symbol }
export enum AdTargetTagType {
  Geography = 'Geography',
  Interest = 'Interest',
  Device = 'Device',
  Os = 'Os',
  Income = 'Income',
}
export interface AdTargetTag {
  id: AdTargetTagID
  slug: string
  title: string
  description: string
  type: AdTargetTagType
}

export type ActivationID = string & { readonly _: unique symbol }
export type ActivationPricingID = string & { readonly _: unique symbol }
