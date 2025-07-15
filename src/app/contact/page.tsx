import { Text, Card, Heading } from "@radix-ui/themes";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <>
      <div className="contentWrapper flex justify-start min-h-screen">
        <div className="content flex flex-col max-w-3xl px-8 py-16 gap-8">
          <div className="space-y-4">
            <Heading size="8" className="text-gray-900">
              Get in Touch
            </Heading>
            <Text size="4" className="text-gray-600">
              I'm always interested in hearing about new opportunities and interesting projects!
            </Text>
          </div>

          {/* Contact Information */}
          <Card className="p-8 space-y-8">
            <div className="flex flex-col gap-4">
              <Heading size="5">Contact Information</Heading>
              
              <div className="space-y-6">
                <a 
                  href="mailto:tysandersdev@gmail.com"
                  className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <EnvelopeClosedIcon className="w-6 h-6 text-gray-600" />
                  <div className="flex flex-col">
                    <Text size="2" weight="medium" className="text-gray-700">Email</Text>
                    <Text size="4" className="text-gray-600 hover:text-blue-600 transition-colors">
                      tysandersdev@gmail.com
                    </Text>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/tysanders-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <GitHubLogoIcon className="w-6 h-6 text-gray-600" />
                  <div className="flex flex-col">
                    <Text size="2" weight="medium" className="text-gray-700">GitHub</Text>
                    <Text size="4" className="text-gray-600 hover:text-blue-600 transition-colors">
                      github.com/tysanders-repo
                    </Text>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/tyasanders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <LinkedInLogoIcon className="w-6 h-6 text-gray-600" />
                  <div className="flex flex-col">
                    <Text size="2" weight="medium" className="text-gray-700">LinkedIn</Text>
                    <Text size="4" className="text-gray-600 hover:text-blue-600 transition-colors">
                      linkedin.com/in/tyasanders
                    </Text>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Text size="3" className="text-gray-600 leading-relaxed">
                Feel free to reach out via email or connect with me on GitHub and LinkedIn. 
                I typically respond within 24 hours during weekdays.
              </Text>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
} 