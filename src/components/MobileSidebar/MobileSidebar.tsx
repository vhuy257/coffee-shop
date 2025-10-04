'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '@/constant/constant';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="mobile-sidebar-overlay"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="mobile-sidebar-header">
          <Link href="/" className="flex items-center">
            <Image 
              src={`${basePath}/logo-dark.png`} 
              alt="Basilico Coffee" 
              width={80} 
              height={80}
            />
          </Link>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-sidebar-nav">
          <ul className="py-4">
            {/* Home */}
            <li className="border-b border-gray-100">
              <div className="px-4 py-3">
                <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-600 transition-colors">
                  <span className="font-medium">Home</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-2" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Home 2
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Menu */}
            <li className="border-b border-gray-100">
              <Link 
                href="/menu" 
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
              >
                Menu
              </Link>
            </li>

            {/* Reservation */}
            <li className="border-b border-gray-100">
              <Link 
                href="/reservation" 
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
              >
                Reservation
              </Link>
            </li>

            {/* Pages */}
            <li className="border-b border-gray-100">
              <div className="px-4 py-3">
                <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-600 transition-colors">
                  <span className="font-medium">Pages</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/about" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/offer" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Offer
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/event" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Private Event
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-single" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Shop Single
                    </Link>
                  </li>
                  <li>
                    <Link href="/404" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      404
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Blog */}
            <li className="border-b border-gray-100">
              <div className="px-4 py-3">
                <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-600 transition-colors">
                  <span className="font-medium">Blog</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/blog" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single" className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                      Blog Single
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Contact */}
            <li className="border-b border-gray-100">
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="mobile-sidebar-footer">
          <div className="space-y-3">
            <div className="mobile-sidebar-info">
              <div className="mobile-sidebar-info-icon">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="mobile-sidebar-info-content">
                <p>Email</p>
                <p>customer_support@example.com</p>
              </div>
            </div>
            
            <div className="mobile-sidebar-info">
              <div className="mobile-sidebar-info-icon">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="mobile-sidebar-info-content">
                <p>Address</p>
                <p>62 Big Tree St, Livonia, New York 14487, USA</p>
              </div>
            </div>

            <div className="mobile-sidebar-info">
              <div className="mobile-sidebar-info-icon">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="mobile-sidebar-info-content">
                <p>Phone</p>
                <p>(734) 665-1852</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mobile-sidebar-social">
            <p className="mobile-sidebar-social-title">Follow Us</p>
            <div className="mobile-sidebar-social-links">
              <a href="#" className="mobile-sidebar-social-link">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="mobile-sidebar-social-link">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="mobile-sidebar-social-link">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="mobile-sidebar-social-link">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
