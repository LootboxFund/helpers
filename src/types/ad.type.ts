import { ActivationID, ActivationStatus, MeasurementPartnerType } from './advertiser.type'
import {
  AdEventID,
  AdEventNonce,
  AdID,
  AdSetID,
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
  adId?: AdID
  adSetId?: AdSetID
  sessionId?: SessionID
  campaignId?: CampaignID
  flightId?: FlightID
  action: AdEventAction
  claimId?: ClaimID
  activationEventMmpAlias?: MMPActivationAlias
  activationID?: ActivationID
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
  offerID: OfferID
  count?: number
}
