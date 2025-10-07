"use client"
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRight} from "lucide-react";
import Link from "next/link";
import Hero from "./_components/Hero";


export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-800 rounded"></div>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-black">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:text-black">
            Contact us
          </a>
        </nav>
        <div>
          <Link href={'/workspace'}>
            <SignInButton mode="modal" forceRedirectUrl={'/workspace'}>
              <Button>
                Get Started <ArrowRight />
              </Button>
            </SignInButton>
          </Link>
          
        </div>
      </header>

      {/* Main Content */}
      <Hero/>
    </div>
    </>
  );
}
