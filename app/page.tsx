"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, User, Bed, Bath, Maximize, Heart, Camera, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HouzezHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=500&width=1200",
      specs: "5 Beds - 3 Baths - 3450 Sq Ft",
      title: "Complex",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
      price: "$5600",
    },
    {
      image: "/placeholder.svg?height=500&width=1200",
      specs: "4 Beds - 2 Baths - 2800 Sq Ft",
      title: "Modern Villa",
      description:
        "Stunning modern villa with panoramic views and luxury amenities. Perfect for families seeking comfort and style.",
      price: "$4200",
    },
    {
      image: "/placeholder.svg?height=500&width=1200",
      specs: "3 Beds - 2 Baths - 2200 Sq Ft",
      title: "Downtown Loft",
      description:
        "Contemporary loft in the heart of downtown. Walking distance to restaurants, shopping, and entertainment.",
      price: "$3800",
    },
    {
      image: "/placeholder.svg?height=500&width=1200",
      specs: "6 Beds - 4 Baths - 4200 Sq Ft",
      title: "Luxury Estate",
      description:
        "Magnificent luxury estate with premium finishes and expansive grounds. The epitome of elegant living.",
      price: "$8500",
    },
    {
      image: "/placeholder.svg?height=500&width=1200",
      specs: "2 Beds - 1 Bath - 1200 Sq Ft",
      title: "Cozy Apartment",
      description:
        "Charming apartment with modern updates and great natural light. Perfect starter home in a quiet neighborhood.",
      price: "$2400",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e4a72] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold">houzez</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-blue-200 flex items-center">
                  HOME <span className="ml-1">▼</span>
                </a>
                <Link href="/properties" className="hover:text-blue-200 flex items-center">
                  PROPERTIES <span className="ml-1">▼</span>
                </Link>
                <a href="#" className="hover:text-blue-200 flex items-center">
                  PROPERTY <span className="ml-1">▼</span>
                </a>
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

      {/* Hero Section - Working Slider */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Slider Content */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative">
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="text-sm mb-2">{slide.specs}</div>
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-4 max-w-md">{slide.description}</p>
                <div className="text-3xl font-bold">{slide.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Our Best Deals</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis molestie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Property Card 1 */}
            <Card
              className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/property/1")}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Light And Modern Apartment"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500">FOR RENT</Badge>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2"
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
                    className="p-2"
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
                <h3 className="font-semibold text-lg mb-2">Light And Modern Apartment</h3>
                <div className="text-2xl font-bold text-[#ff6b35] mb-4">$4,500/mo</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />4
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />2
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    1200 Sq Ft
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 2 */}
            <Card
              className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/property/2")}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Design Apartment"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500">FOR RENT</Badge>
                <Badge className="absolute top-4 right-16 bg-red-500">HOT OFFER</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Design Apartment</h3>
                <div className="text-2xl font-bold text-[#ff6b35] mb-4">$375,000</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />3
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />2
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    2560 Sq Ft
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 3 */}
            <Card
              className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/property/3")}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="New Apartment Nice View"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500">FOR RENT</Badge>
                <Badge className="absolute top-4 right-16 bg-gray-800">FOR SALE</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">New Apartment Nice View</h3>
                <div className="text-2xl font-bold text-[#ff6b35] mb-4">$1,200/mo</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />3
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />1
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    1789 Sq Ft
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 4 */}
            <Card
              className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/property/4")}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Complex"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gray-800">FOR SALE</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Complex</h3>
                <div className="text-2xl font-bold text-[#ff6b35] mb-4">$5,600/mo</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />5
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />3
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    3450 Sq Ft
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 5 */}
            <Card
              className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/property/5")}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Green View Design"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gray-800">FOR SALE</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Green View Design</h3>
                <div className="text-2xl font-bold text-[#ff6b35] mb-4">$3,500/mo</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />1
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />1
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    1760 Sq Ft
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 6 */}
            <Card
              className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => (window.location.href = "/property/6")}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Modern Loft Apartment"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gray-800">FOR SALE</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Modern Loft Apartment</h3>
                <div className="text-2xl font-bold text-[#ff6b35] mb-4">$3,750/mo</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />1
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />1
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    1678 Sq Ft
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" className="px-8 py-2">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="relative min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Design Custom Real Estate
                <br />
                Inquiry Forms
              </h2>
              <p className="text-lg mb-8">
                Design custom lead capture forms that integrate with the
                <br />
                Houzez CRM
              </p>
            </div>

            <Card className="p-8 bg-white">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="sell">Sell</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Information</label>
                  <Input placeholder="I'm a" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="miami">Miami</SelectItem>
                        <SelectItem value="orlando">Orlando</SelectItem>
                        <SelectItem value="tampa">Tampa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Zip Code</label>
                    <Input />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Property</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Max price</label>
                    <Input />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Minimum size (Sq Ft)</label>
                    <Input />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of beds</label>
                    <Input />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of baths</label>
                    <Input />
                  </div>
                </div>

                <Button className="w-full bg-[#00bcd4] hover:bg-[#00acc1] text-white py-3">Submit</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore Our Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Properties</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis molestie</p>
          </div>

          <div className="flex overflow-x-auto space-x-6 pb-4">
            {[
              { title: "Apartment", count: "17 Properties" },
              { title: "Family Home", count: "21 Properties" },
              { title: "Studio", count: "12 Properties" },
              { title: "Villa", count: "8 Properties" },
              { title: "Office", count: "15 Properties" },
              { title: "Shop", count: "9 Properties" },
            ].map((property, index) => (
              <Card key={index} className="min-w-[280px] overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=280"
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm text-gray-200">{property.count}</div>
                    <h3 className="text-xl font-bold">{property.title}</h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-4 right-4 bg-white/20 border-white/30 text-white hover:bg-white hover:text-black"
                  >
                    VIEW DETAILS →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Houzez Section */}
      <section className="py-16 bg-[#1e4a72] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-4">
                Why Houzez Is
                <br />
                The Perfect
                <br />
                Choice?
              </h2>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#00bcd4] mb-4">01.</div>
                <h3 className="text-xl font-semibold mb-3">Easy To Get Started</h3>
                <p className="text-gray-300 text-sm">
                  Easily create your real estate website without any previous experience.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-[#00bcd4] mb-4">02.</div>
                <h3 className="text-xl font-semibold mb-3">Pre-Built Websites</h3>
                <p className="text-gray-300 text-sm">
                  Get started by choosing from one of our pre-built page templates to create your website.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-[#00bcd4] mb-4">03.</div>
                <h3 className="text-xl font-semibold mb-3">Highly Customizable</h3>
                <p className="text-gray-300 text-sm">
                  Customize your website to your expectations by using all of the theme options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Real Estate Agents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Real Estate Agents</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis molestie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Shawn Barber",
                role: "Company Agent - All American Real Estate",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Samuel Palmer",
                role: "Company Agent - Modern House Real Estate",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Vincent Fuller",
                role: "Company Agent - Modern House Real Estate",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Brittany Watkins",
                role: "Company Agent - Country House Real Estate",
                image: "/placeholder.svg?height=150&width=150",
              },
            ].map((agent, index) => (
              <Card key={index} className="text-center p-6 shadow-lg">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{agent.role}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus porta dolor eget risus consectetur,
                  non.
                </p>
                <Button variant="link" className="text-[#00bcd4] p-0">
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Read From Our Blog */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Read From Our Blog</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis molestie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "How To Quickly Improve The Real Estate Market",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Learn The Truth About Real Estate Industry",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Quick Tips About Business Development",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "14 Common Misconceptions About Business Development",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">by Mike Moore</span>
                    <span>5 days ago</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {[1, 2, 3, 4, 5].map((logo) => (
              <div key={logo} className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">LOGO {logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
