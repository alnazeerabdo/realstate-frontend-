"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  User,
  Bed,
  Bath,
  Maximize,
  Home,
  Car,
  Calendar,
  MapPin,
  Share2,
  Heart,
  Printer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useParams, useRouter } from "next/navigation"

// Mock property data
const propertyData = {
  id: "H243",
  title: "Design Apartment",
  price: "$876,000",
  address: "Quincy St, Brooklyn, NY, USA",
  sqft: "2560 Sq Ft",
  beds: 3,
  baths: 2,
  garage: 1,
  yearBuilt: 2016,
  propertyType: "Apartment",
  status: "For Sale",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
  
  Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.`,
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800&text=Kitchen",
    "/placeholder.svg?height=600&width=800&text=Bedroom",
    "/placeholder.svg?height=600&width=800&text=Bathroom",
    "/placeholder.svg?height=600&width=800&text=Living+Room",
    "/placeholder.svg?height=600&width=800&text=Exterior",
  ],
  addressDetails: {
    address: "Quincy St",
    city: "New York",
    state: "New York",
    zipCode: "10013",
    area: "Brooklyn",
    country: "United States",
  },
  additionalDetails: {
    deposit: "20%",
    lastRemodel: "1987",
    additionalRooms: "Guest Bath",
    poolSize: "300 Sq Ft",
    amenities: "Clubhouse",
    equipment: "Grill - Gas",
  },
  energyClass: {
    energeticClass: "A+",
    globalEnergyPerformanceIndex: "92.42 kWh / m²a",
    renewableEnergyPerformanceIndex: "00.00 kWh / m²a",
    energyPerformanceOfBuilding: "98",
    epcCurrentRating: "67",
    epcPotentialRating: "76",
  },
  agent: {
    name: "Samuel Palmer",
    image: "/placeholder.svg?height=100&width=100",
    phone: "(305) 555-4555",
    email: "samuel@example.com",
  },
  updatedAt: "January 13, 2023 at 2:24 pm",
}

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const propertyId = params.id

  const [activeTab, setActiveTab] = useState("overview")
  const [currentImage, setCurrentImage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [property, setProperty] = useState(propertyData)
  const [message, setMessage] = useState(`Hello, I am interested in [Design Apartment]`)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [propertyId])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const selectImage = (index: number) => {
    setCurrentImage(index)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1e4a72]"></div>
      </div>
    )
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
                <Link href="/properties" className="hover:text-blue-200 flex items-center text-blue-200">
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>{">"}</span>
            <Link href="/properties" className="hover:text-blue-600">
              Apartment
            </Link>
            <span>{">"}</span>
            <span className="text-gray-800">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{property.address}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <div className="text-3xl font-bold text-gray-800">{property.price}</div>
            <div className="text-gray-600">{property.sqft}</div>
          </div>
        </div>

        {/* Action Tabs */}
        <div className="mt-6">
          <div className="border-b">
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "overview"
                    ? "text-[#00bcd4] border-b-2 border-[#00bcd4]"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                OVERVIEW
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "details"
                    ? "text-[#00bcd4] border-b-2 border-[#00bcd4]"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("details")}
              >
                DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            {/* Property Gallery */}
            <div className="relative mb-6">
              <div className="relative h-[500px] overflow-hidden rounded-md">
                <Image
                  src={property.images[currentImage] || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Printer className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex overflow-x-auto space-x-2 mt-2">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-24 h-16 flex-shrink-0 cursor-pointer ${
                      currentImage === index ? "ring-2 ring-[#00bcd4]" : ""
                    }`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Overview */}
            {activeTab === "overview" && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Bed className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{property.beds}</div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Bath className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{property.baths}</div>
                      <div className="text-sm text-gray-500">Bathrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Car className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{property.garage}</div>
                      <div className="text-sm text-gray-500">Garage</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Maximize className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{property.sqft}</div>
                      <div className="text-sm text-gray-500">Area Size</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Calendar className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{property.yearBuilt}</div>
                      <div className="text-sm text-gray-500">Year Built</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <Home className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{property.propertyType}</div>
                      <div className="text-sm text-gray-500">Property Type</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <div className="text-gray-700 whitespace-pre-line">{property.description}</div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Address</h2>
                  <div className="flex justify-between items-center mb-4">
                    <div></div>
                    <Button className="bg-[#00bcd4] hover:bg-[#00acc1] text-white">Open on Google Maps</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-gray-600">Address:</div>
                      <div>{property.addressDetails.address}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">City:</div>
                      <div>{property.addressDetails.city}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">State/County:</div>
                      <div>{property.addressDetails.state}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">Zip/Postal Code:</div>
                      <div>{property.addressDetails.zipCode}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">Area:</div>
                      <div>{property.addressDetails.area}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">Country:</div>
                      <div>{property.addressDetails.country}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Property Details */}
            {activeTab === "details" && (
              <div>
                <div className="mb-8">
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="mr-2">
                      <Calendar className="w-4 h-4 inline-block" />
                    </span>
                    Updated on {property.updatedAt}
                  </div>

                  <div className="bg-blue-50 p-6 rounded-md mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-medium text-gray-600">Property ID</div>
                        <div>{property.id}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Price</div>
                        <div>{property.price}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Property Size</div>
                        <div>{property.sqft}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Bedrooms</div>
                        <div>{property.beds}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Bathrooms</div>
                        <div>{property.baths}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Garage</div>
                        <div>{property.garage}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Garage Size</div>
                        <div>200 Sq Ft</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Year Built</div>
                        <div>{property.yearBuilt}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Property Type</div>
                        <div>{property.propertyType}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Property Status</div>
                        <div>{property.status}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-medium text-gray-600">Deposit</div>
                        <div>{property.additionalDetails.deposit}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Pool Size</div>
                        <div>{property.additionalDetails.poolSize}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Last remodel year</div>
                        <div>{property.additionalDetails.lastRemodel}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Amenities</div>
                        <div>{property.additionalDetails.amenities}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Additional Rooms:</div>
                        <div>{property.additionalDetails.additionalRooms}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Equipment</div>
                        <div>{property.additionalDetails.equipment}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Energy Class</h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="font-medium text-gray-600">Energetic class:</div>
                        <div>{property.energyClass.energeticClass}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Global Energy Performance Index:</div>
                        <div>{property.energyClass.globalEnergyPerformanceIndex}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Renewable energy performance index:</div>
                        <div>{property.energyClass.renewableEnergyPerformanceIndex}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">Energy performance of the building:</div>
                        <div>{property.energyClass.energyPerformanceOfBuilding}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">EPC Current Rating:</div>
                        <div>{property.energyClass.epcCurrentRating}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-600">EPC Potential Rating:</div>
                        <div>{property.energyClass.epcPotentialRating}</div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-2">92.42 kWh / m²a | Energy class A+</div>
                    <div className="h-6 w-full bg-gray-200 rounded-md overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-green-500 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          A+
                        </div>
                        <div className="bg-green-400 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          A
                        </div>
                        <div className="bg-lime-400 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          B
                        </div>
                        <div className="bg-yellow-400 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          C
                        </div>
                        <div className="bg-yellow-500 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          D
                        </div>
                        <div className="bg-orange-500 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          E
                        </div>
                        <div className="bg-red-500 w-1/7 h-full flex items-center justify-center text-white text-xs">
                          F
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{property.agent.name}</div>
                    <Link href="#" className="text-[#00bcd4] text-sm">
                      View Listings
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Input placeholder="Name" />
                  </div>
                  <div>
                    <Input placeholder="Phone" />
                  </div>
                  <div>
                    <Input placeholder="Email" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">I want to buy</SelectItem>
                        <SelectItem value="rent">I want to rent</SelectItem>
                        <SelectItem value="info">I need more information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-xs text-gray-600">
                    By submitting this form I agree to{" "}
                    <Link href="#" className="text-[#00bcd4]">
                      Terms of Use
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Send Message</Button>
                    <Button variant="outline">Call</Button>
                  </div>
                  <Button variant="outline" className="w-full">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline-block"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                        <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                      </svg>
                    </span>
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e4a72] text-white mt-12">
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
