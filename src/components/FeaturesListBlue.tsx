const ICON_BG = "#7DD9A0";
const ICON_STROKE = "#FFFFFF";

const items = [
  {
    title: "Expertise",
    subtitle: "A seasoned team with deep industry knowledge.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    subtitle: "Leveraging the latest technology trends to drive growth.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c.7.6 1 1.2 1 2h6c0-.8.3-1.4 1-2a7 7 0 0 0-4-12z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    subtitle: "Consistent, high-quality service that you can trust.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 11v2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H7" />
        <path d="M17 11v2h-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1" />
        <path d="M9 12l2 2 2-2" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    subtitle: "Solutions designed with your business in mind.",
    icon: (
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ICON_STROKE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M12 14v2" />
        <path d="M8 18l4-2 4 2" />
        <path d="M7 12l-2 2 2 2" />
        <path d="M17 12l2 2-2 2" />
      </svg>
    ),
  },
];

export default function FeaturesListBlue() {
  return (
    <section
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: "#0081E0" }}
    >
      <div className="mx-auto max-w-2xl">
        <ul className="space-y-0">
          {items.map((item, index) => (
            <li key={item.title}>
              <div className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white"
                  style={{ backgroundColor: ICON_BG }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1 pb-6">
                  <h3 className="text-lg font-bold text-white sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-white sm:text-[16px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              {index !== items.length - 1 && (
                <div className="ml-14 mt-6 mb-6 h-px w-full bg-white" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
