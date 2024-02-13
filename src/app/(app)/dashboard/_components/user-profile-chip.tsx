import { memo } from 'react';

import { Badge } from '@/components/ui/badge';
import type { SubscriptionTier } from '@/types/subscription-tier';

interface UserProfileChipProps {
  name: string;
  email: string;
  subscriptionType: SubscriptionTier;
}

function Component(props: UserProfileChipProps) {
  const { subscriptionType, email, name } = props;

  return (
    <div className="flex items-center justify-between p-3">
      <div>
        <p className="text-uip-sm font-medium">{name}</p>
        <p className="text-uip-sm text-muted-foreground">{email}</p>
      </div>
      <Badge className="h-fit uppercase" variant="secondary">
        {subscriptionType}
      </Badge>
    </div>
  );
}

export const UserProfileChip = memo(Component);
