import { Text, Heading, Card, Badge } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start">
      <div className="max-w-4xl px-8 py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="mb-4">
            <Badge size="2" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              Open to opportunities
            </Badge>
            <div className="flex flex-col gap-4">
              <Heading size="8" weight="bold" className="text-gray-900 mb-6 leading-tight">
                Howdy! I'm Ty Sanders
              </Heading>
              <Text size="5" className="text-gray-600 leading-relaxed mb-8">
                I'm a recently graduated computer engineer from Texas A&M University –– <em className="text-blue-600 font-semibold">whoop!</em>
              </Text>
            </div>
            <Text size="4" className="text-gray-600 leading-relaxed">
              I'm passionate about building highly performant systems that serve high-level experiences.
            </Text>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link 
              href="mailto:tysandersdev@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <EnvelopeClosedIcon className="w-4 h-4" />
              <Text size="2" weight="medium">Get in Touch</Text>
            </Link>
            <Link 
              href="https://github.com/tysanders-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <GitHubLogoIcon className="w-4 h-4" />
              <Text size="2" weight="medium">GitHub</Text>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/tyasanders/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <LinkedInLogoIcon className="w-4 h-4" />
              <Text size="2" weight="medium">LinkedIn</Text>
            </Link>
          </div>
        </div>

        {/* Skills & Interests Grid */}
        <div className="grid gap-8 mb-16">
          {/* Engineering */}
          <Card className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div >
                <Heading size="4" weight="bold" className="text-gray-900 mb-2">
                 About Me
                </Heading>
                <Text size="3" className="text-gray-600 leading-relaxed">
                  When I'm not coding, I put my electrical engineering side to use in designing super small low-energy PCBs 
                  (4-layer with SoC, signal demands, used UWB).
                  I'm a classically trained cellist and a barely trained pianist. I enjoy cooking, especially savory meals, and I'm currently working through Kenji Lopez-Alt's 
                  excellent cookbook <em>The Food Lab</em> in my free time.
                </Text>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/projects" className="group">
            <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <Heading size="4" weight="bold" className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Projects
                </Heading>
                <Text size="3" className="text-gray-600">
                  Explore my engineering projects
                </Text>
              </div>
            </Card>
          </Link>

          <Link href="/blog" className="group">
            <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <Heading size="4" weight="bold" className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Blog
                </Heading>
                <Text size="3" className="text-gray-600">
                  Read my thoughts and insights
                </Text>
              </div>
            </Card>
          </Link>

          <Link href="/contact" className="group">
            <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <Heading size="4" weight="bold" className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Contact
                </Heading>
                <Text size="3" className="text-gray-600">
                  Let's work together
                </Text>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
