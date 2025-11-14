"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import Background from "../components/Background";

function SearchResults() {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dep = searchParams.get("dep");
  const ret = searchParams.get("ret");
  const pax = searchParams.get("pax");

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return dayjs(dateStr).format("DD/MM/YYYY");
  };

  return (
    <Background formMaxWidth="1170px">
      {/* Search Result Form */}
      <div className="relative z-20" style={{ marginTop: "-320px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full" style={{ maxWidth: "1170px" }}>
              <div
                className="bg-white rounded-xl shadow-lg px-22 py-20"
                style={{ minHeight: "700px" }}
              >
                <div className="space-y-12">
                  <div className="tracking-wider">
                    <span className="text-xl font-semibold text-gray-800 min-w-[140px] mr-2">
                      From:
                    </span>
                    <span className="text-xl font-semibold text-gray-900">
                      {from || "-"}
                    </span>
                  </div>

                  <div className="tracking-wider">
                    <span className="text-xl font-semibold text-gray-800 min-w-[140px] mr-2">
                      To:
                    </span>
                    <span className="text-xl font-semibold text-gray-900">
                      {to || "-"}
                    </span>
                  </div>

                  <div className="tracking-wider">
                    <span className="text-xl font-semibold text-gray-800 min-w-[140px] mr-2">
                      Departure date:
                    </span>
                    <span className="text-xl font-semibold text-gray-900">
                      {formatDate(dep) || "-"}
                    </span>
                  </div>

                  {ret && (
                    <div className="tracking-wider">
                      <span className="text-xl font-semibold text-gray-800 min-w-[140px] mr-2">
                        Return date:
                      </span>
                      <span className="text-xl font-semibold text-gray-900">
                        {formatDate(ret)}
                      </span>
                    </div>
                  )}

                  <div className="tracking-wider">
                    <span className="text-xl font-semibold text-gray-800 min-w-[140px] mr-2">
                      No. of passenger:
                    </span>
                    <span className="text-xl font-semibold text-gray-900">
                      {pax || "-"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <Background formMaxWidth="1170px">
          <div className="relative z-20" style={{ marginTop: "-320px" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="w-full" style={{ maxWidth: "1170px" }}>
                  <div
                    className="bg-white rounded-xl shadow-lg px-22 py-20"
                    style={{ minHeight: "700px" }}
                  >
                    <div className="space-y-12">
                      <div className="tracking-wider">
                        <span className="text-xl font-semibold text-gray-800">
                          Loading...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Background>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
