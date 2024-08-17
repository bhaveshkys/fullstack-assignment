import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8">
        <div className="grid grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Abstract</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Branches
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-sm font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Podcast
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm">info@abstract.com</p>
              <div className="mt-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Abstract Logo"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm mt-8 text-center">
          <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </footer>
  )
}

export default Footer