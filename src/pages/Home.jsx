/**
 * Layout B — "Split Hero"
 * Inspired by: ProStruct, Solak, Solarva
 * Hero: text left, image right with overlapping stat cards
 * Services: alternating image-text rows
 * Projects: masonry-style grid
 * Why Choose Us: horizontal feature cards
 * Testimonials: large quote spotlight
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  Quotes,
  CheckCircle,
  ShieldCheck,
  UsersThree,
  Trophy,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import siteData from '../data/siteData';
import iconMap from '../data/iconMap';

const statIcons = [Trophy, Star, ShieldCheck, UsersThree];

function Home() {
  const { business, hero, stats, servicesPreview, featuredProjects, whyChooseUs, homeTestimonials, homeCta } = siteData;

  return (
    <PageTransition>
      {/* Hero — full-width blended bg, text left with inline stats */}
      <HeroCarousel
        images={hero.backgroundImages}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        overlay="left"
        className="min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 lg:pt-0 lg:pb-0 w-full">
          <div className="max-w-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 border border-gold-500/30 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-6 sm:mb-8"
            >
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span className="text-gold-400 text-xs sm:text-sm font-medium">{hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6"
            >
              {hero.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-gold-400">{part.text}</span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-lg text-white/60 leading-relaxed mb-8 sm:mb-10 max-w-md"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                {hero.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-secondary text-sm sm:text-base">
                {hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* Inline stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex gap-6 sm:gap-8"
            >
              {stats.slice(0, 3).map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold-400">{stat.number}</div>
                  <div className="text-[10px] sm:text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </HeroCarousel>

      {/* Services — alternating rows */}
      <section className="section-padding bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mt-4 mb-4">
                Comprehensive Construction Services
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-20">
            {servicesPreview.slice(0, 4).map((service, index) => {
              const IconComp = iconMap[service.iconName] || iconMap.Buildings;
              const isEven = index % 2 === 0;
              return (
                <SectionReveal key={service.title} direction={isEven ? 'right' : 'left'}>
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:[direction:rtl]' : ''}`}>
                    <div className={!isEven ? 'md:[direction:ltr]' : ''}>
                      <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                        <IconComp size={28} className="text-gold-600" />
                      </div>
                      <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">
                        0{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2 mb-4">{service.title}</h3>
                      <p className="text-steel-500 leading-relaxed mb-6">{service.desc}</p>
                      <Link to="/services" className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all">
                        Learn More <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div className={`rounded-2xl overflow-hidden aspect-[4/3] bg-earth-100 ${!isEven ? 'md:[direction:ltr]' : ''}`}>
                      {featuredProjects[index] && (
                        <img
                          src={featuredProjects[index].image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-width stats strip */}
      <section className="bg-gold-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComp = statIcons[index] || Trophy;
              return (
                <SectionReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center text-white">
                    <IconComp size={28} className="mx-auto mb-3" weight="fill" />
                    <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects — masonry style */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">Featured Projects</h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors">
                View All <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>

          {/* Masonry: first item tall, rest in grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects[0] && (
              <SectionReveal className="md:row-span-2">
                <Link to="/projects" className="group block relative rounded-2xl overflow-hidden h-full min-h-[400px]">
                  <img src={featuredProjects[0].image} alt={featuredProjects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {featuredProjects[0].category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{featuredProjects[0].title}</h3>
                  </div>
                </Link>
              </SectionReveal>
            )}
            {featuredProjects.slice(1, 3).map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.15}>
                <Link to="/projects" className="group block relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-gold-500/20 text-gold-300 text-xs font-medium px-3 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — horizontal cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-4">
                {whyChooseUs.titleParts.map((part, i) =>
                  part.highlight ? (
                    <span key={i} className="text-gold-600">{part.text}</span>
                  ) : (
                    <React.Fragment key={i}>{part.text}</React.Fragment>
                  )
                )}
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.points.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="bg-navy-900 rounded-2xl p-6 text-center h-full hover:bg-navy-800 transition-colors">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} weight="fill" className="text-gold-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — spotlight style */}
      <section className="section-padding bg-navy-950 text-white">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">What Our Clients Say</h2>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} weight="fill" className={i < business.ratingRounded ? 'text-gold-400' : 'text-gold-400/30'} />
                ))}
                <span className="text-white/60 text-sm ml-3">{business.rating}/5</span>
              </div>
            </div>
          </SectionReveal>

          {/* Large spotlight testimonial */}
          {homeTestimonials[0] && (
            <SectionReveal>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-14 text-center mb-12">
                <Quotes size={48} weight="fill" className="text-gold-500/40 mx-auto mb-6" />
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{homeTestimonials[0].text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                    {homeTestimonials[0].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{homeTestimonials[0].name}</p>
                    <p className="text-white/50 text-sm">{homeTestimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* Smaller testimonials */}
          <div className="grid sm:grid-cols-2 gap-6">
            {homeTestimonials.slice(1, 3).map((item, i) => (
              <SectionReveal key={item.name} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, j) => (
                      <Star key={j} size={14} weight="fill" className="text-gold-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — split with image */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gold-500 py-20 px-8 sm:px-16 flex items-center">
            <SectionReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  {homeCta.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-navy-900">{part.text}</span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>
                <p className="text-white/80 text-lg mb-8">{homeCta.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <Phone size={20} />
                    {homeCta.ctaPrimary}
                  </Link>
                  <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <WhatsappLogo size={20} weight="fill" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
          <div className="hidden lg:block">
            <img src={homeCta.backgroundImage} alt={homeCta.backgroundAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
