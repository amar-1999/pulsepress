import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { getAllAuthors } from '@/lib/api';
import { Twitter, Globe, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PulsePress',
  description: 'Learn about PulsePress, our mission, and the team behind the platform.',
};

export default async function AboutPage() {
  const authors = await getAllAuthors();

  return (
    <div className="container py-12">
      {/* About the platform */}
      <section className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
          About PulsePress
        </h1>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-6 leading-relaxed">
            PulsePress is a modern platform delivering insightful news and in-depth articles about technology, business, science, and health.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Founded in 2025, our mission is to provide readers with high-quality, well-researched content that informs, educates, and inspires. We believe in the power of knowledge and the importance of staying informed in our rapidly changing world.
          </p>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Our values */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold mb-8 text-center">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="font-serif">Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We prioritize accuracy, depth, and clarity in all our content, ensuring readers receive reliable information they can trust.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="font-serif">Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Complex topics deserve clear explanations. We make information accessible to everyone, regardless of their background.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="font-serif">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We embrace new technologies and approaches, constantly seeking better ways to deliver content and enhance the reader experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team section */}
      <section>
        <h2 className="font-serif text-3xl font-bold mb-8 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Card key={author.id}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={120}
                    height={120}
                    className="rounded-[50%] w-[120px] h-[120px] transition-transform object-cover shadow-md"
                  />
                </div>
                <CardTitle className="text-center font-serif">{author.name}</CardTitle>
                {author.twitter && (
                  <CardDescription className="text-center flex justify-center gap-1 items-center">
                    <Twitter className="h-3.5 w-3.5" />
                    @{author.twitter}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {author.bio}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                {author.twitter && (
                  <a
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                )}
                <a
                  href={`mailto:${author.name.toLowerCase().replace(' ', '.')}@pulsepress.com`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}