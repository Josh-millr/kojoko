import { KojokoIcon } from '@/components/ui/logo/kojoko';
// import { RegistrationCompletionForm } from './_components/registration-completion-form';

export default function AccountSetup() {
  return (
    <section className="container flex place-content-center pt-20 pb-32">
      <div className="grid gap-y-12 sm:gap-y-16 max-w-[400px] mx-auto">
        <div className="grid gap-y-10">
          <div className="flex place-content-center">
            <KojokoIcon size={32} />
          </div>
          <div className="grid gap-y-2 text-center">
            <h1 className="text-heading-lg">Complete your registration</h1>
            <p className="text-paragraph-sm text-muted-foreground">
              Complete your account registration to get full access to the
              platforms capabilities.
            </p>
          </div>
        </div>
        {/* <RegistrationCompletionForm /> */}
      </div>
    </section>
  );
}
