'use client'
import Link from 'next/link'
import { useState } from 'react'
import { siteCategories } from '@/app/constants/categories'

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              DealHunter
            </Link>
            
            <div className="hidden md:flex space-x-6">
              {Object.entries(siteCategories).map(([key, category]) => (
                <div 
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link 
                    href={`/${key}`}
                    className="text-gray-700 hover:text-blue-600 py-2"
                  >
                    {category.name}
                  </Link>
                  
                  {openMenu === key && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/${key}/${sub.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Submit Deal
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}