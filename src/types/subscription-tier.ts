import { FREE_TIER, PRO_TIER } from '@/constants/subscription-tier';

export type SubscriptionTier = typeof FREE_TIER | typeof PRO_TIER;
