"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, User, Home, Star, Bed, Bath, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Mock agents data
const agents = [
  {
    id: 1,
    name: "Samuel Palmer",
    rating: 3,
    company: "Modern House Real Estate",
    image: "/placeholder.svg?height=150&width=150",
    contact: {
      office: "321 456 9865",
      mobile: "321 456 9874",
      fax: "897 654 5467",
      email: "samuel@houzez.com",
    },
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
      pinterest: "#",
      vimeo: "#",
      skype: "#",
    },
  },
  {
    id: 2,
    name: "Vincent Fuller",
    rating: 4,
    company: "Country House Real Estate",
    image: "/placeholder.svg?height=150&width=150",
    contact: {
      office: "789 456 3210",
      mobile: "321 456 9874",
      fax: "897 654 1258",
      email: "vincent@houzez.com",
    },
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
      pinterest: "#",
      vimeo: "#",
      skype: "#",
    },
  },
  {
    id: 3,
    name: "Brittany Watkins",
    rating: 5,
    company: "All American Real Estate",
    image: "/placeholder.svg?height=150&width=150",
    contact: {
      office: "789 456 3210",
      mobile: "321 456 9874",
      fax: "897 654 1258",
      email: "brittany@houzez.com",
    },
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
      pinterest: "#",
      vimeo: "#",
      skype: "#",
    },
  },
  {
    id: 4,
    name: "Michelle Ramirez",
    rating: 4,
    company: "Modern House Real Estate",
    image: "/placeholder.svg?height=150&width=150",
    contact: {
      office: "789 456 3210",
      mobile: "321 456 9874",
      fax: "897 654 1258",
      email: "michelle@houzez.com",
    },
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
      pinterest: "#",
      vimeo: "#",
      skype: "#",
    },
  },
]

// Mock recent viewed properties
const recentViewed = [
  {
    id: 1,
    title: "Modern Studio",
    beds: 2,
    baths: 1,
    sqft: "780 Sq Ft",
    type: "STUDIO",
    price: "$12,000/mo",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 2,
    title: "Single Family Home",
    beds: 5,
    baths: 3,
    sqft: "3170 Sq Ft",
    type: "SINGLE FAMILY HOME",
    price: "$870,000",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 3,
    title: "Villa With Pool",
    beds: 4,
    baths: 3,
    sqft: "3410 Sq Ft",
    type: "VILLA",
    price: "$990,000",
    image: "/placeholder.svg?height=80&width=120",
  },
]

const socialIcons = [
  { name: "facebook", icon: "📘" },
  { name: "twitter", icon: "🐦" },
  { name: "linkedin", icon: "💼" },
  { name: "instagram", icon: "📷" },
  { name: "youtube", icon: "📺" },
  { name: "pinterest", icon: "📌" },
  { name: "vimeo", icon: "🎬" },
  { name: "skype", icon: "💬" },
]

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sidebarSearchTerm, setSidebarSearchTerm] = useState("")

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e4a72] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold">
                houzez
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-blue-200 flex items-center">
                  HOME <span className="ml-1">▼</span>
                </Link>
                <Link href="/properties" className="hover:text-blue-200 flex items-center">
                  PROPERTIES <span className="ml-1">▼</span>
                </Link>
                <Link href="/properties" className="hover:text-blue-200 flex items-center">
                  PROPERTY <span className="ml-1">▼</span>
                </Link>
                <Link href="/agents" className="hover:text-blue-200 flex items-center text-blue-200">
                  REALTOR <span className="ml-1">▼</span>
                </Link>
                <a href="#" className="hover:text-blue-200 flex items-center">
                  OTHERS <span className="ml-1">▼</span>
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(800) 987 6543</span>
              </div>
              <User className="w-5 h-5" />
              <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-4 py-2">CREATE A LISTING</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter agent name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8">Search Agent</Button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-gray-800">Agents</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Agents</h1>

            {/* Agents List */}
            <div className="space-y-6">
              {filteredAgents.length > 0 ? (
                filteredAgents.map((agent) => (
                  <Card key={agent.id} className="overflow-hidden shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Agent Photo */}
                        <div className="flex-shrink-0">
                          <div className="relative w-32 h-32">
                            <Image
                              src={agent.image || "/placeholder.svg"}
                              alt={agent.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        </div>

                        {/* Agent Details */}
                        <div className="flex-1">
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-gray-800">{agent.name}</h3>
                              <div className="flex items-center">{renderStars(agent.rating)}</div>
                            </div>
                            <p className="text-gray-600 mb-4">
                              Company Agent at <span className="text-[#00bcd4]">{agent.company}</span>
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-gray-700">Office</span>
                                <span className="text-[#00bcd4]">{agent.contact.office}</span>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-gray-700">Mobile</span>
                                <span className="text-[#00bcd4]">{agent.contact.mobile}</span>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-gray-700">Fax</span>
                                <span className="text-[#00bcd4]">{agent.contact.fax}</span>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium text-gray-700">Email</span>
                                <span className="text-[#00bcd4]">{agent.contact.email}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {socialIcons.map((social) => (
                                <a
                                  key={social.name}
                                  href={agent.socialMedia[social.name as keyof typeof agent.socialMedia]}
                                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-sm transition-colors"
                                >
                                  {social.icon}
                                </a>
                              ))}
                            </div>
                            <Link
                              href={`/agent/${agent.id}/listings`}
                              className="text-[#00bcd4] hover:underline font-medium"
                            >
                              View Listings
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No agents found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Find Agent */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Find Agent</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter agent name"
                    value={sidebarSearchTerm}
                    onChange={(e) => setSidebarSearchTerm(e.target.value)}
                  />
                  <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Search Agent</Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Viewed */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Viewed</h3>
                <div className="space-y-4">
                  {recentViewed.map((property) => (
                    <div key={property.id} className="flex gap-3">
                      <div className="relative w-20 h-16 flex-shrink-0">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-1 truncate">{property.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <div className="flex items-center gap-1">
                            <Bed className="w-3 h-3" />
                            <span>{property.beds}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-3 h-3" />
                            <span>{property.baths}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Maximize className="w-3 h-3" />
                            <span>{property.sqft}</span>
                          </div>
                        </div>
                        <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block mb-1">
                          {property.type}
                        </div>
                        <div className="text-sm font-bold text-[#ff6b35]">{property.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e4a72] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Discover Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Discover</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Miami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Los Angeles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    New York
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>774 NE 84th St Miami, FL 33879</p>
                <p>(800) 987 6543</p>
                <p>email@houzez.co</p>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Houzez is a premium WordPress theme for Designers & Real Estate Agents.
              </p>
              <div className="flex">
                <Input placeholder="Enter your email" className="rounded-r-none bg-white text-black" />
                <Button className="rounded-l-none bg-[#00bcd4] hover:bg-[#00acc1]">Submit</Button>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex justify-center space-x-6 mb-6">
              {["Facebook", "Twitter", "Instagram", "LinkedIn", "Google+", "Youtube", "Pinterest", "Yelp"].map(
                (social) => (
                  <a key={social} href="#" className="text-gray-300 hover:text-white">
                    {social}
                  </a>
                ),
              )}
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold mb-4">houzez</div>
              <p className="text-gray-400 text-sm">© Houzez - All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
