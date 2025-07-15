import { Text, TextField, TextArea, Button, Card, Flex, Heading } from "@radix-ui/themes";
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 space-y-4">
              <Heading size="5">Send a Message</Heading>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Text as="label" size="2" weight="medium" className="text-gray-700">
                    Name
                  </Text>
                  <TextField.Root placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <Text as="label" size="2" weight="medium" className="text-gray-700">
                    Email
                  </Text>
                  <TextField.Root placeholder="your.email@example.com" type="email" />
                </div>
                
                <div className="space-y-2">
                  <Text as="label" size="2" weight="medium" className="text-gray-700">
                    Subject
                  </Text>
                  <TextField.Root placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Text as="label" size="2" weight="medium" className="text-gray-700">
                    Message
                  </Text>
                  <TextArea placeholder="Tell me more..." rows={5} />
                </div>
                
                <Button size="3" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <Card className="p-6 space-y-8">
              <div className="flex flex-col gap-4">
                <Heading size="5">Contact Information</Heading>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <EnvelopeClosedIcon className="w-5 h-5 text-gray-600" />
                    <div className="flex flex-col">
                      <Text size="2" weight="medium" className="text-gray-700">Email</Text>
                      <Text size="3" className="text-gray-600">ty.sanders@example.com</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <GitHubLogoIcon className="w-5 h-5 text-gray-600" />
                    <div className="flex flex-col">
                      <Text size="2" weight="medium" className="text-gray-700">GitHub</Text>
                      <Text size="3" className="text-gray-600">github.com/tysanders</Text>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <LinkedInLogoIcon className="w-5 h-5 text-gray-600" />
                    <div className="flex flex-col">
                      <Text size="2" weight="medium" className="text-gray-700">LinkedIn</Text>
                      <Text size="3" className="text-gray-600">linkedin.com/in/tysanders</Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Text size="2" className="text-gray-500">
                  I typically respond within 24 hours during weekdays. 
                  For urgent matters, please include "URGENT" in your subject line.
                </Text>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
} 