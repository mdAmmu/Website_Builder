"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const suggestions = [
  {
    label: 'Dashboard',
    prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
    icon: LayoutDashboard
  },
  {
    label: 'SignUp Form',
    prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
    icon: Key
  },
  {
    label: 'Hero',
    prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect, subtitle, CTA, small social proof and an image.',
    icon: HomeIcon
  },
  {
    label: 'User Profile Card',
    prompt: 'Create a modern user profile card component for a social media website',
    icon: User
  }
]

export default function Home() {

  const [userInput, setUserInput] = useState<string>();

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
        <Button>
          Get Started <ArrowRight />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">What should we design?</h1>
        <p className="text-gray-500 mb-8">
          Generate, edit and explore designs with AI. Export to code.
        </p>

        {/* Input Box */}
        <div className="w-full max-w-xl bg-gray-50 border rounded-2xl p-4 shadow-sm mb-6">
          <textarea
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className="w-full h-24 p-3 border-none outline-none bg-transparent resize-none text-gray-800"
            placeholder="Describe your page design"
          ></textarea>
          <div className="flex justify-between">
            <Button variant={'outline'}><ImagePlus /></Button>
            <Button><ArrowUp /></Button>
          </div>
        </div>

        {/* Example Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {suggestions.map((suggestion,index) => (
            <Button key={index} variant={'outline'}
              onClick={() => setUserInput(suggestion.prompt)}>
              <suggestion.icon/>{suggestion.label}
            </Button>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
