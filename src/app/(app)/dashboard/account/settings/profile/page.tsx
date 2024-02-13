'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getInitials } from '@/utils/get-initials';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppSelector } from '@/hooks/redux-hooks';
import { ConditionalRenderer } from '@/components/conditional-render';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const inputSkeleton = <Skeleton className="h-9 w-[200px]" />;

export default function ProfileSettings() {
  const { profile } = useAppSelector((state) => state.user);

  return (
    <div className="grid w-full gap-y-4">
      <section>
        <Card className="w-full border-border p-6 shadow-none">
          <div className="flex justify-between">
            <div>
              <div className="grid gap-y-4">
                <h3 className="text-uip-sm font-semibold">Display Picture</h3>
                <p className="max-w-96 text-paragraph-sm text-muted-foreground">
                  A visual first impression, It sparks curiosity, hints at your
                  story, and invites others to connect.
                </p>
              </div>
            </div>

            <div>
              <ConditionalRenderer
                dependence={profile?.image}
                loader={<Skeleton className="h-40 w-40 rounded-full" />}
              >
                <Avatar className="h-40 w-40">
                  <AvatarImage src={profile?.image} />
                  <AvatarFallback>
                    {profile?.name && getInitials(profile.name)}
                  </AvatarFallback>
                </Avatar>
              </ConditionalRenderer>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="w-full border-border p-6 shadow-none">
          <div className="grid gap-y-6 text-muted-foreground">
            <div className="flex justify-between">
              <p className="text-uip-sm">Full Name</p>
              <div>
                <ConditionalRenderer
                  dependence={profile?.name}
                  loader={inputSkeleton}
                >
                  <Input
                    className="w-96"
                    disabled
                    type="text"
                    value={profile?.name}
                  />
                </ConditionalRenderer>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-uip-sm">Email Address</p>
              <div>
                <ConditionalRenderer
                  dependence={profile?.email}
                  loader={inputSkeleton}
                >
                  <Input
                    className="w-96"
                    disabled
                    type="email"
                    value={profile?.email}
                  />
                </ConditionalRenderer>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-uip-sm">Username</p>
              <div>
                <ConditionalRenderer
                  dependence={profile?.user_name}
                  loader={inputSkeleton}
                >
                  <Input
                    className="w-96"
                    disabled
                    type="text"
                    value={profile?.user_name}
                  />
                </ConditionalRenderer>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
