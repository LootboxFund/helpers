import { ActivationID, ActivationStatus, MeasurementPartnerType } from './advertiser.type'
import { QuestionAnswerID, QuestionAnswerBatchID, LootboxID } from './base.type'
import {
  AdEventID,
  AdEventNonce,
  AdID,
  AdSetID,
  AdvertiserID,
  AffiliateID,
  CampaignID,
  ClaimID,
  FlightID,
  OfferID,
  SessionID,
  TournamentID,
  UserID,
} from './base.type'

export type MMPActivationAlias = string

export interface AdEvent_Firestore {
  id: AdEventID
  timestamp: number
  adID?: AdID
  adSetID?: AdSetID
  sessionID?: SessionID
  campaignID?: CampaignID
  flightID?: FlightID
  action: AdEventAction
  claimID?: ClaimID
  activationEventMmpAlias?: MMPActivationAlias
  activationID?: ActivationID
  offerID?: OfferID
  advertiserID?: AdvertiserID
  metadata?: EventMetadata
  extraData?: Record<string, any>
  affiliateAttribution?: AdEventAffiliateAttribution
  nonce?: AdEventNonce
}

export type EventMetadata = {
  clickRedirectUrl?: string
  pixelUrl?: string
  timeElapsed?: number
}

export type AdEventAffiliateAttribution = {
  organizerID?: AffiliateID
  promoterID?: AffiliateID
  userID?: UserID
  tournamentID?: TournamentID
}

export enum AdEventAction {
  View = 'View',
  Click = 'Click',
  TimerElapsed = 'TimerElapsed',
  VideoTimestamp = 'VideoTimestamp',
  Activation = 'Activation',
}

export interface AdFlight_Firestore {
  id: FlightID
  userID: UserID
  adID: AdID
  adSetID: AdSetID
  offerID: OfferID
  placement: Placement
  sessionID: SessionID
  claimID?: ClaimID
  campaignID?: CampaignID
  tournamentID?: TournamentID
  organizerID?: AffiliateID
  promoterID?: AffiliateID
  advertiserID: AdvertiserID
  timestamp: number
  pixelUrl: string
  clickUrl: string
  affiliateBaseLink: string
  mmp: MeasurementPartnerType
  destinationUrl: string
}

export enum Placement {
  AfterTicketClaim = 'AfterTicketClaim',
  BeforePayout = 'BeforePayout',
  AfterPayout = 'AfterPayout',
  DailySpin = 'DailySpin',
  TicketCarousel = 'TicketCarousel',
}

export interface Activation_Firestore {
  id: ActivationID
  name: string
  description: string
  pricing: number
  status: ActivationStatus
  mmpAlias: MMPActivationAlias
  mmp: MeasurementPartnerType
  offerID: OfferID
  count?: number
  order: number
  advertiserID: AdvertiserID
}

export enum AspectRatio {
  Square1x1 = 'Square1x1',
  Portrait9x16 = 'Portrait9x16',
  Portrait2x3 = 'Portrait2x3',
  Landscape16x9 = 'Landscape16x9',
  Tablet4x5 = 'Tablet4x5',
}

export interface PixelTrackingParams {
  flightID?: FlightID | null | undefined
  userID?: UserID | null | undefined
  adID?: AdID | null | undefined
  adSetID?: AdSetID | null | undefined
  offerID?: OfferID | null | undefined
  claimID?: ClaimID | null | undefined
  campaignID?: CampaignID | null | undefined
  tournamentID?: TournamentID | null | undefined
  organizerID?: AffiliateID | null | undefined
  promoterID?: AffiliateID | null | undefined
  sessionID?: SessionID | null | undefined
  eventAction?: AdEventAction | null | undefined
  nonce?: AdEventNonce | null | undefined
  timeElapsed?: number | null | undefined
}

export interface AirdropBase {
  offerID: OfferID
  title: string
  oneLiner?: string
  value: string
  instructionsLink?: string
  tournamentID?: TournamentID
  organizerID?: AffiliateID
  advertiserID?: AdvertiserID
  questions: QuestionAnswerID[]
}

export interface QuestionAnswer_Firestore {
  id: QuestionAnswerID
  batch: QuestionAnswerBatchID // index
  airdropMetadata?: {
    offerID: OfferID
    lootboxID?: LootboxID
    tournamentID?: TournamentID
    organizerID?: AffiliateID
    advertiserID?: AdvertiserID
  }
  status: QuestionAnswerStatus
  question: string
  answer?: string
  userID?: UserID
  type: QuestionFieldType
  timestamp: number
}
export enum QuestionAnswerStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}
export enum QuestionFieldType {
  Text = 'Text',
  Number = 'Number',
  Phone = 'Phone',
  Email = 'Email',
  Address = 'Address',
  Date = 'Date',
  Screenshot = 'Screenshot',
}
