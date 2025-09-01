import Link from 'next/link';
import { Rss, Twitter, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl font-bold">PulsePress</h2>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Modern news and insights for the digital age.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/technology" className="text-sm hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="text-sm hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/category/science" className="text-sm hover:text-primary transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="text-sm hover:text-primary transition-colors">
                  Health
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PulsePress. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/rss" className="text-muted-foreground hover:text-primary transition-colors">
              <Rss className="h-5 w-5" />
              <span className="sr-only">RSS Feed</span>
            </Link>
            <Link href="https://twitter.com/pulsepress" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com/pulsepress" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}