import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Users, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in every procedure, using the latest techniques and technologies.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Compassion",
      description: "We treat every patient with empathy, understanding, and personalized care.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "We're proud to serve the Siliguri community and contribute to healthier, happier smiles.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our practices.",
    },
  ]

  const team = [
    {
      name: "Dr. Ankita Debnath",
      role: "Founder & Lead Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
      bio: "Dr. Ankita founded A-Smiles with a vision to transform dental visits into self-care experiences. With over 10 years of experience, she specializes in cosmetic dentistry and smile makeovers.",
    },
    {
      name: "Dr. Rahul Sharma",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop",
      bio: "Dr. Rahul is our braces and aligners expert, helping patients achieve perfectly straight smiles with the latest orthodontic techniques.",
    },
    {
      name: "Dr. Priya Gupta",
      role: "Periodontist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop",
      bio: "Dr. Priya specializes in gum health and treatments, ensuring the foundation of your smile is healthy and strong.",
    },
  ]

  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />

      <div className="relative bg-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Get to know the story, team, and values behind A-Smiles Dental Clinic
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-teal">Our Story</h2>
            <p className="text-gray-600 mb-4">
              A-Smiles Dental Clinic was founded in 2015 by Dr. Ankita Debnath with a vision to transform dental care in
              Siliguri. What started as a small practice has grown into a premier dental destination known for its
              exceptional care and spa-like atmosphere.
            </p>
            <p className="text-gray-600 mb-4">
              Our philosophy is simple: dental visits shouldn't be dreaded appointments but opportunities for self-care
              and transformation. We've designed every aspect of our clinic to reflect this belief, from our soothing
              environment to our gentle approach to treatment.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve the Siliguri community with comprehensive dental services that blend technical
              excellence with a human touch. Our tagline "Small Fixes. Big Transformations." reflects our belief that
              even minor dental improvements can have a profound impact on your confidence and quality of life.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop"
              alt="A-Smiles Dental Clinic"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-teal">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-md p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-teal">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-teal text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-teal">
            Ready to Experience the A-Smiles Difference?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Book a consultation with our expert team and discover why our patients love their dental visits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-teal hover:bg-teal/90 text-white rounded-full">
                Contact Us
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="border-teal text-teal hover:bg-teal hover:text-white rounded-full"
              >
                View Smile Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
