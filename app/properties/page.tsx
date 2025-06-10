"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, User, Bed, Bath, Maximize, Heart, Camera, ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

// Mock property data
const properties = [
  {
    id: 1,
    title: "Equestrian Villa",
    price: "$1,999,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 4,
    baths: 3,
    sqft: "1200 Sq Ft",
    propertyType: "Villa",
    city: "Miami",
  },
  {
    id: 2,
    title: "Villa with Pool For Sale",
    price: "$3,500,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 5,
    baths: 4,
    sqft: "3450 Sq Ft",
    propertyType: "Villa",
    city: "Los Angeles",
  },
  {
    id: 3,
    title: "Equestrian Villa",
    price: "$1,999,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 4,
    baths: 3,
    sqft: "1200 Sq Ft",
    propertyType: "Villa",
    city: "Miami",
  },
  {
    id: 4,
    title: "Villa For Sale",
    price: "$1,750,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 4,
    baths: 3,
    sqft: "4100 Sq Ft",
    propertyType: "Villa",
    city: "Chicago",
  },
  {
    id: 5,
    title: "Historic Villa",
    price: "$3,700,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 6,
    baths: 5,
    sqft: "2170 Sq Ft",
    propertyType: "Villa",
    city: "New York",
  },
  {
    id: 6,
    title: "Ample Studio At Last Floor",
    price: "$450,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 3,
    baths: 2,
    sqft: "1560 Sq Ft",
    propertyType: "Studio",
    city: "Miami",
  },
  {
    id: 7,
    title: "Comfortable Apartment",
    price: "$4,700/mo",
    type: "FOR RENT",
    image: "/placeholder.svg?height=250&width=400",
    beds: 1,
    baths: 1,
    sqft: "1900 Sq Ft",
    propertyType: "Apartment",
    city: "Los Angeles",
  },
  {
    id: 8,
    title: "Renovated Studio",
    price: "$540,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 4,
    baths: 3,
    sqft: "1200 Sq Ft",
    propertyType: "Studio",
    city: "Chicago",
  },
  {
    id: 9,
    title: "Commercial Central Shop",
    price: "$3,600/mo",
    type: "FOR RENT",
    image: "/placeholder.svg?height=250&width=400",
    beds: 0,
    baths: 0,
    sqft: "2350 Sq Ft",
    propertyType: "Shop",
    city: "New York",
  },
  {
    id: 10,
    title: "Retail Space",
    price: "$1,750/mo",
    type: "FOR RENT",
    image: "/placeholder.svg?height=250&width=400",
    beds: 0,
    baths: 0,
    sqft: "1340 Sq Ft",
    propertyType: "Shop",
    city: "Miami",
  },
  {
    id: 11,
    title: "Small Shop",
    price: "$490,000",
    type: "FOR SALE",
    image: "/placeholder.svg?height=250&width=400",
    beds: 0,
    baths: 0,
    sqft: "1200 Sq Ft",
    propertyType: "Shop",
    city: "Los Angeles",
  },
]

const featuredProperties = [
  {
    id: 1,
    title: "Equestrian Villa",
    price: "$1,999,000",
    image: "/placeholder.svg?height=150&width=200",
    location: "2118 Thornridge Cir. Miami, FL 33179, USA",
    beds: 4,
    baths: 3,
    sqft: "1200 Sq Ft",
    propertyType: "VILLA",
  },
]

export default function PropertiesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("default")
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])

  const propertiesPerPage = 10
  const totalPages = Math.ceil(properties.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const currentProperties = properties.slice(startIndex, startIndex + propertiesPerPage)

  const propertyTypes = [
    "Commercial",
    "Office",
    "Shop",
    "Residential",
    "Apartment",
    "Single Family Home",
    "Studio",
    "Villa",
  ]
  const cities = ["Miami", "Los Angeles", "Chicago", "New York"]

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
                <Link href="/properties" className="hover:text-blue-200 flex items-center text-blue-200">
                  PROPERTIES <span className="ml-1">▼</span>
                </Link>
                <Link href="/properties" className="hover:text-blue-200 flex items-center">
                  PROPERTY <span className="ml-1">▼</span>
                </Link>
                <Link href="/agents" className="hover:text-blue-200 flex items-center">
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
                <span>(305) 555 4555</span>
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
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <Input placeholder="Enter Keyword..." className="w-full" />
            </div>
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Beds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Baths" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1000">$1000+</SelectItem>
                <SelectItem value="2000">$2000+</SelectItem>
                <SelectItem value="3000">$3000+</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Advanced</Button>
            <Button variant="outline">Clear</Button>
            <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8">Search</Button>
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
            <span className="text-gray-800">Grid Default</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Grid Default</h1>
                <p className="text-gray-600">{properties.length} Properties</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Default Order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default Order</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentProperties.map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => (window.location.href = `/property/${property.id}`)}
                >
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${
                        property.type === "FOR RENT" ? "bg-green-500" : "bg-gray-800"
                      }`}
                    >
                      {property.type}
                    </Badge>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="p-2 bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Handle favorite action
                        }}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="p-2 bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Handle camera action
                        }}
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                    <div className="text-2xl font-bold text-[#ff6b35] mb-4">{property.price}</div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      {property.beds > 0 && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          {property.beds}
                        </div>
                      )}
                      {property.baths > 0 && (
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          {property.baths}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Maximize className="w-4 h-4 mr-1" />
                        {property.sqft}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "bg-[#00bcd4] hover:bg-[#00acc1]" : ""}
                  >
                    {page}
                  </Button>
                )
              })}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Featured Listings */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Featured Listings</h3>
                {featuredProperties.map((property) => (
                  <div key={property.id} className="flex space-x-4 mb-4">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={80}
                      height={60}
                      className="w-20 h-15 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{property.title}</h4>
                      <p className="text-xs text-gray-500 mb-1">{property.location}</p>
                      <div className="text-sm font-bold text-[#ff6b35]">{property.price}</div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {property.propertyType}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Property Type Filter */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Property Type</h3>
                <div className="space-y-3">
                  {propertyTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={selectedPropertyTypes.includes(type)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedPropertyTypes([...selectedPropertyTypes, type])
                          } else {
                            setSelectedPropertyTypes(selectedPropertyTypes.filter((t) => t !== type))
                          }
                        }}
                      />
                      <label htmlFor={type} className="text-sm text-blue-600 cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cities Filter */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Cities</h3>
                <div className="space-y-3">
                  {cities.map((city) => (
                    <div key={city}>
                      <button className="text-sm text-blue-600 hover:underline">{city}</button>
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
                <p>+1 305 555 4555</p>
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
                <Button className="rounded-l-none bg-[#00bcd4] hover:bg-[#00acc1]">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex justify-center space-x-6 mb-6">
              {["Facebook", "Twitter", "Instagram", "LinkedIn", "Google+", "YouTube", "Pinterest", "Vimeo"].map(
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
