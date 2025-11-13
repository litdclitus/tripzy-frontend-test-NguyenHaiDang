"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Card, Tag, Button } from "antd";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dep = searchParams.get("dep");
  const ret = searchParams.get("ret");
  const pax = searchParams.get("pax");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative bg-linear-to-r from-[#00B4DB] to-[#0083B0] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              alt="Tripzy Logo"
              width={126}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Search Results */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Search Results</h1>

          <div className="space-y-3">
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <span className="text-gray-600 text-sm">Mode:</span>
                <Tag color="blue" className="ml-2">
                  {mode}
                </Tag>
              </div>
              <div>
                <span className="text-gray-600 text-sm">From:</span>
                <Tag color="cyan" className="ml-2">
                  {from}
                </Tag>
              </div>
              <div>
                <span className="text-gray-600 text-sm">To:</span>
                <Tag color="cyan" className="ml-2">
                  {to}
                </Tag>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Departure:</span>
                <Tag color="green" className="ml-2">
                  {dep}
                </Tag>
              </div>
              {ret && (
                <div>
                  <span className="text-gray-600 text-sm">Return:</span>
                  <Tag color="green" className="ml-2">
                    {ret}
                  </Tag>
                </div>
              )}
              <div>
                <span className="text-gray-600 text-sm">Passengers:</span>
                <Tag color="orange" className="ml-2">
                  {pax}
                </Tag>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-white rounded-lg p-12 text-center shadow-md">
          <h2 className="text-xl text-gray-600 mb-4">
            Search functionality coming soon...
          </h2>
          <p className="text-gray-500 mb-6">
            This page will display the search results for your query.
          </p>
          <Link href="/">
            <Button type="primary" size="large">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
