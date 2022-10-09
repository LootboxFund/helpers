import { ActivationID, ActivationStatus, MeasurementPartnerType } from './advertiser.type'
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
  flightId: FlightID | null | undefined
  userId: UserID | null | undefined
  adId: AdID | null | undefined
  adSetId: AdSetID | null | undefined
  offerId: OfferID | null | undefined
  claimId: ClaimID | null | undefined
  campaignId: CampaignID | null | undefined
  tournamentId: TournamentID | null | undefined
  organizerID: AffiliateID | null | undefined
  promoterID: AffiliateID | null | undefined
  sessionId: SessionID | null | undefined
  eventAction: AdEventAction | null | undefined
  nonce: AdEventNonce | null | undefined
  timeElapsed: number | null | undefined
}
