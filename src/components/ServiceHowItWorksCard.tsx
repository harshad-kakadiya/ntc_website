import Image from "next/image";
import type { StaticImageData } from "next/image";

type Step = {
  title: string;
  desc: string;
};

type ServiceHowItWorksCardProps = {
  heading: string;
  subheading?: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  steps: Step[];
};

export default function ServiceHowItWorksCard({
  heading,
  subheading,
  imageSrc,
  imageAlt = "Service image",
  steps,
}: ServiceHowItWorksCardProps) {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] bg-[#008fe5] px-8 py-10 sm:px-12 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {heading}
              </h2>

              {subheading && (
                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  {subheading}
                </p>
              )}

              <div className="mt-8 rounded-[22px] bg-white/10 p-2 ring-1 ring-white/15">
                <div className="overflow-hidden rounded-[18px] bg-white">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={760}
                    height={520}
                    className="h-[260px] w-full object-cover sm:h-[300px]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#31d07f] ring-2 ring-white/25">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="text-base font-semibold text-white sm:text-lg">
                      {step.title}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-white/75 sm:text-base">
                      {step.desc}
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="mt-5 h-px w-full bg-white/15" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
