import Image from "next/image";
import Link from "next/link";

interface BackgroundProps {
  showTitle?: boolean;
  children?: React.ReactNode;
  formMaxWidth?: string;
}

export default function Background({
  showTitle = false,
  children,
  formMaxWidth = "1170px",
}: BackgroundProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Section */}
      <div className="relative h-[495px] overflow-hidden">
        <Image
          src="/BG.svg"
          alt="Background"
          width={1728}
          height={495}
          priority
          quality={85}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-8 pb-16">
              <div className="flex justify-center">
                <div className="w-full" style={{ maxWidth: formMaxWidth }}>
                  <Link href="/">
                    <Image
                      src="/logo.svg"
                      alt="Tripzy Logo"
                      width={126}
                      height={40}
                      priority
                      className="h-10 w-auto cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Title - Only on homepage */}
            {showTitle && (
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-[40px] font-semibold text-gray-900 mb-3 tracking-wide">
                  Travel Smarter, Not Harder
                </h1>
                <p className="text-base md:text-lg text-gray-500 tracking-normal">
                  Make every trip effortless. Tripzy lets you book rides and
                  plan journeys with ease
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Children Content */}
      {children}
    </div>
  );
}
