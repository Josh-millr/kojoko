import { signIn } from '@/app/auth';
import { KojokoIcon } from '@/components/ui/logo/kojoko';
import { SocialButton } from '@/components/ui/social-button';

const authGoogle = async () => {
  'use server';

  await signIn('google');
};
const authGithub = async () => {
  'use server';

  await signIn('github');
};

export default function Auth() {
  return (
    <section className="container">
      <div className="flex place-content-center pb-32 pt-20">
        <div className="grid grid-cols-1 gap-y-12">
          <div className="grid gap-y-8">
            <div className="flex place-content-center">
              <KojokoIcon size={40} />
            </div>
            <div className="grid gap-y-2 text-center">
              <h1 className="text-heading-lg">Log In or Sign Up</h1>
              <p className="text-paragraph-sm text-muted-foreground">
                Create an account or login to view and manage your project.
              </p>
            </div>
          </div>

          <div className="grid gap-y-2">
            <form action={authGoogle}>
              <SocialButton fullWidth type="submit" platform="google">
                Continue with Google
              </SocialButton>
            </form>
            <form action={authGithub}>
              <SocialButton fullWidth type="submit" platform="github">
                Continue with Github
              </SocialButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
