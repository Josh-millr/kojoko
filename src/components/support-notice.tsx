import Image from 'next/image';

export function SupportNotice() {
  return (
    <section className="container flex place-content-center pt-24 md:pt-40">
      <div className="grid gap-y-10">
        <div className="flex place-content-center">
          <Image
            alt=""
            height={116}
            width={116}
            src="/icon/no-cell-phone-icon.svg"
          />
        </div>
        <div className="grid gap-y-2 text-center">
          <h1 className="text-heading-sm">Unsupported Screen Size :(</h1>
          <p className="max-w-[480px] text-paragraph-sm">
            Heads up! The requested webpage is best viewed on a desktop screen.
            For optimal experience, please switch to a computer or laptop.
          </p>
        </div>
      </div>
    </section>
  );
}
