import Image from "next/image";
import SearchForm from "./components/SearchForm";

export default function Home() {
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
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-8 pb-16">
              <Image
                src="/logo.svg"
                alt="Tripzy Logo"
                width={126}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </div>

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-[40px] font-semibold text-gray-900 mb-3 tracking-wide">
                Travel Smarter, Not Harder
              </h1>
              <p className="text-base md:text-lg text-gray-500 tracking-normal">
                Make every trip effortless. Tripzy lets you book rides and plan
                journeys with ease
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="relative z-20" style={{ marginTop: "-160px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-[1170px]">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </div>
    </div>
  );
}
