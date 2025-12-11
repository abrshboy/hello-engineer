import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Ruler, 
  HardHat, 
  Home, 
  Building2, 
  Zap, 
  Box, 
  ClipboardCheck, 
  Users, 
  Star,
  CheckCircle2,
  ShieldCheck,
  Search,
  MessageSquare,
  Trophy
} from 'lucide-react';

interface LandingPageProps {
  session: Session | null;
}

export const LandingPage: React.FC<LandingPageProps> = ({ session }) => {
  const navigate = useNavigate();

  const services = [
    { icon: Ruler, title: 'Architecture Design', desc: 'Innovative blueprints and spatial planning for modern living.' },
    { icon: HardHat, title: 'Civil Engineering', desc: 'Infrastructure design and execution by verified experts.' },
    { icon: Building2, title: 'Structural Analysis', desc: 'Ensuring safety and stability for buildings of all sizes.' },
    { icon: Home, title: 'Interior Design', desc: 'Transforming spaces with aesthetic and functional designs.' },
    { icon: Zap, title: 'MEP Engineering', desc: 'Mechanical, Electrical, and Plumbing systems planning.' },
    { icon: Box, title: '3D Modeling', desc: 'Photorealistic renderings to visualize your project before build.' },
    { icon: ClipboardCheck, title: 'Project Supervision', desc: 'On-site monitoring to ensure quality and timeline adherence.' },
    { icon: Users, title: 'Consultation', desc: 'Expert advice on feasibility, costs, and regulations.' },
  ];

  // Fixed list of experts for the marquee
  const experts = [
    { id: 1, name: "Sarah Jenkins", role: "Senior Architect", exp: "12 Years", rating: 4.9, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 2, name: "David Chen", role: "Civil Engineer", exp: "8 Years", rating: 4.8, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 3, name: "Elena Rodriguez", role: "Interior Designer", exp: "5 Years", rating: 5.0, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 4, name: "Michael Ross", role: "Structural Eng.", exp: "15 Years", rating: 4.9, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 5, name: "Priya Patel", role: "Sustainability Consultant", exp: "7 Years", rating: 4.7, img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=200&h=200" },
    { id: 6, name: "James Wilson", role: "Landscape Architect", exp: "10 Years", rating: 4.8, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar session={session} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Trusted by 2,000+ satisfied clients</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Connect With Trusted <span className="text-indigo-600">Engineers & Architects</span>, Instantly.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Find verified professionals for architecture, civil engineering, interior design, and structural planning. Bring your vision to life with Hello Engineer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/signup')}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1"
                >
                  Find Expert <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                   onClick={() => handleNavClick('how-it-works')}
                   className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
                >
                  How it Works
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Verified Pros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative lg:ml-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
                  alt="Engineering Collaboration" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <p className="font-bold">150+ Verified Experts</p>
                      <p className="text-xs text-slate-300">Ready to start your project</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full -z-10 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-1">50+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Architects</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-1">25+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Civil Engineers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-1">100+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects Done</div>
            </div>
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-1">2k+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How Hello Engineer Works</h2>
            <p className="text-lg text-slate-600">
              Simple steps to connect with the best professionals in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border-8 border-white shadow-sm mb-6">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Find an Expert</h3>
              <p className="text-slate-600 leading-relaxed">
                Browse our curated list of verified engineers and architects based on your project needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border-8 border-white shadow-sm mb-6">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Connect & Plan</h3>
              <p className="text-slate-600 leading-relaxed">
                Message professionals directly, discuss your vision, and get quotes for your project.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border-8 border-white shadow-sm mb-6">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Build with Confidence</h3>
              <p className="text-slate-600 leading-relaxed">
                Hire your expert and start building. Secure payments and verified quality at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">
              Comprehensive engineering and architectural solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-sm font-medium text-indigo-600 group-hover:translate-x-1 inline-block transition-transform">
                  Learn more &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section (Infinite Loop) */}
      <section id="experts" className="py-20 lg:py-28 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Top Specialists</h2>
            <p className="text-lg text-slate-600">
              Work with the best in the field. Verified expertise you can trust.
            </p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full">
          {/* Gradient Masks for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white z-10 hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white z-10 hidden md:block"></div>

          <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused] py-4">
             {/* Render the list twice to create the seamless loop effect */}
             {[...experts, ...experts].map((expert, idx) => (
               <div 
                  key={`${expert.id}-${idx}`} 
                  className="w-72 bg-white rounded-xl border border-slate-200 p-5 flex-shrink-0 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={expert.img} 
                      alt={expert.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{expert.name}</h3>
                      <p className="text-indigo-600 text-sm font-medium">{expert.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-600 border-t border-slate-100 pt-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Box className="w-4 h-4" />
                      <span>{expert.exp}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{expert.rating}</span>
                    </div>
                  </div>

                  <button className="w-full py-2 rounded-lg bg-slate-50 text-slate-900 font-medium text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
                    View Profile
                  </button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 lg:py-28 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Building the Future, Together.</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Hello Engineer was founded with a simple mission: to bridge the gap between visionary clients and the engineering talent capable of executing those visions.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We screen every professional on our platform to ensure they meet the highest standards of safety, creativity, and reliability. Whether you are building a skyscraper or renovating a kitchen, we have the expert for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-400 mb-1">100%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Verified Pros</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400 mb-1">24/7</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400 mb-1">0%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Commission Fees</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Construction Site Meeting" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-tr-3xl hidden lg:block">
                <HardHat className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of clients and professionals building the future together. 
            Sign up today to find your perfect match.
          </p>
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors text-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};