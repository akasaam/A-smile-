import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "teeth-whitening-myths",
      title: "5 Common Teeth Whitening Myths Debunked",
      excerpt: "Separate fact from fiction when it comes to teeth whitening procedures and products.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?q=80&w=600&auto=format&fit=crop",
      category: "Cosmetic Dentistry",
    },
    {
      id: "braces-vs-aligners",
      title: "Braces vs. Clear Aligners: Which Is Right For You?",
      excerpt:
        "A comprehensive comparison of traditional braces and modern clear aligners to help you make the right choice.",
      date: "April 22, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
      category: "Orthodontics",
    },
    {
      id: "dental-care-pregnancy",
      title: "Dental Care During Pregnancy: What You Need to Know",
      excerpt:
        "Important information about maintaining oral health during pregnancy and why it matters for both mother and baby.",
      date: "March 10, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1628921919890-6d79dc5592ed?q=80&w=600&auto=format&fit=crop",
      category: "Oral Health",
    },
    {
      id: "foods-healthy-teeth",
      title: "Top 10 Foods That Promote Healthy Teeth and Gums",
      excerpt: "Discover the best foods to include in your diet for optimal oral health and a brighter smile.",
      date: "February 28, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=600&auto=format&fit=crop",
      category: "Nutrition",
    },
    {
      id: "dental-anxiety",
      title: "Overcoming Dental Anxiety: Tips and Techniques",
      excerpt: "Practical strategies to help you manage dental anxiety and make your dental visits more comfortable.",
      date: "January 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop",
      category: "Patient Care",
    },
    {
      id: "smile-makeover-guide",
      title: "The Ultimate Guide to Smile Makeovers",
      excerpt: "Everything you need to know about the smile makeover process, from consultation to final results.",
      date: "December 5, 2022",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=600&auto=format&fit=crop",
      category: "Cosmetic Dentistry",
    },
  ]

  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />

      <div className="relative bg-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dental Health Blog</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Expert insights, tips, and advice for maintaining your oral health and achieving your best smile
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-teal text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-teal text-sm font-medium">
                    Read Article
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-teal">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest dental tips, special offers, and clinic news delivered straight to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-teal hover:bg-teal/90 text-white">Subscribe</Button>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                alt="Newsletter subscription"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
