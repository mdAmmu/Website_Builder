"use client"
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User } from 'lucide-react';
import React, { useState } from 'react'

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

const Hero = () => {
    const [userInput, setUserInput] = useState<string>();
  return (
    <div>
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
            <SignInButton mode="modal" forceRedirectUrl={'/workspace'}>
              <Button disabled={!userInput}><ArrowUp /></Button>
            </SignInButton>
            
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
  )
}

export default Hero