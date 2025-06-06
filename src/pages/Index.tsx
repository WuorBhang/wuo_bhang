'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ChevronUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

// Main section loaded immediately
import HeroSection from '@/components/sections/HeroSection';

// Lazy-loaded sections for performance
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const CareerSection = lazy(() => import('@/components/sections/CareerSection'));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const EducationSection = lazy(() => import('@/components/sections/EducationSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'));
const BlogSection = lazy(() => import('@/components/sections/BlogSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));
const RatingSection = lazy(() => import('@/components/sections/RatingSection'));
const NewsletterSection = lazy(() => import('@/components/sections/NewsletterSection'));

// Skeleton placeholder during lazy loading
const SectionSkeleton = () => (
  <div className="w-full py-8 sm:py-16">
    <Skeleton className="w-[80%] h-8 mx-auto mb-4" />
    <Skeleton className="w-[60%] h-6 mx-auto mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
      <Skeleton className="h-[150px] sm:h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[150px] sm:h-[200px] w-full rounded-xl" />
    </div>
  </div>
);

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lowEndDevice, setLowEndDevice] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const checkDevicePerformance = () => {
      // @ts-ignore: Some browsers support deviceMemory
      if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        setLowEndDevice(true);
        return;
      }

      // Basic CPU speed fallback test
      const start = performance.now();
      let sum = 0;
      for (let i = 0; i < 1_000_000; i++) {
        sum += i;
      }
      const end = performance.now();
      if (end - start > 100) {
        setLowEndDevice(true);
      }
    };

    checkDevicePerformance();

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 300);
      });
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial hash check
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollAreaProps = {
    className: 'h-screen w-full',
    type: lowEndDevice ? 'auto' as const : 'hover' as const,
  };

  return (
    <ScrollArea {...scrollAreaProps}>
      <div
        className={`flex flex-col min-h-screen w-full overflow-hidden transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />

        <main className="flex-1 w-full">
          <HeroSection />

          <Suspense fallback={<SectionSkeleton />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <CareerSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <SkillsSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <EducationSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <BlogSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <TestimonialsSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <ContactSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <NewsletterSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <RatingSection />
          </Suspense>
        </main>

        <Footer />

        <button
          onClick={scrollToTop}
          className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-24 p-2 sm:p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-40 ${
            showScrollTop
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronUp size={isMobile ? 22 : 18} />
        </button>

        <WhatsAppButton
          phoneNumber="254700797210"
          message="Hi Wuor Bhang👋! I saw your amazing✨ portfolio and I'm interested in working together🤝 on a project. When would be a good time to chat?"
        />
      </div>
    </ScrollArea>
  );
};

export default Index;
