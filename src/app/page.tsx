"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Shenova Shein Store"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Shenova Shein Store"
      description="Discover your unique style with our curated collection of trendy and affordable fashion. Fresh arrivals daily!"
      buttons={[
        {
          text: "Shop New Arrivals",
          href: "#products",
        },
        {
          text: "Explore Collections",
          href: "#products",
        },
      ]}
      buttonAnimation="opacity"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-woman-with-wavy-blonde-hair-new-stylish-dress-shoes-poses-luxurious-apartment_132075-8149.jpg"
      imageAlt="Stylish woman in trendy fashion clothes"
      showDimOverlay={false}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Bringing the Latest Fashion to Your Wardrobe"
      description="Shenova Shein Store is dedicated to providing high-quality, trendy clothing at prices you'll love. We believe everyone deserves to express their style with confidence."
      subdescription="Our passion for fashion drives us to constantly update our inventory with the freshest styles and timeless classics, ensuring you always find something perfect for every occasion."
      icon={Heart}
      imageSrc="http://img.b2bpic.net/free-photo/flat-lay-fabric-thread-arrangement_23-2148897950.jpg"
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Limited stock & slow updates",
          "High prices for new trends",
          "Lack of size inclusivity",
          "Poor customer support",
        ],
      }}
      positiveCard={{
        items: [
          "New arrivals daily, always in style",
          "Affordable pricing, premium quality",
          "Extensive size range for all body types",
          "24/7 customer support via chat & email",
        ],
      }}
      title="Why Choose Shenova Shein Store?"
      description="Experience the difference with a fashion store that prioritizes your style, budget, and satisfaction."
      tag="Our Advantages"
      buttons={[
        {
          text: "See Our Benefits",
          href: "#products",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Elegant Red Evening Dress",
          price: "$49.99",
          imageSrc: "http://img.b2bpic.net/free-photo/seductive-blonde-woman-posing-luxury-red-dress-with-wide-sleeves-fashionable-look-blond-wavy-hairs-expressive-photo-windy-cloth_273443-1730.jpg",
          imageAlt: "Elegant Red Evening Dress",
        },
        {
          id: "2",
          name: "Floral Summer Midi Dress",
          price: "$34.50",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-lovable-woman-looking-through-pink-glasses-smiling_197531-20669.jpg",
          imageAlt: "Floral Summer Midi Dress",
        },
        {
          id: "3",
          name: "Trendy Ribbed Crop Top",
          price: "$18.00",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-gorgeous-young-woman-striped-overall-yellow-sunglasses-posing-with-white-leather-backpack-balcony-modern-glass-building-town_627829-10585.jpg",
          imageAlt: "Trendy Ribbed Crop Top",
        },
        {
          id: "4",
          name: "High-Waisted Office Trousers",
          price: "$39.99",
          imageSrc: "http://img.b2bpic.net/free-photo/male-suit-close-up-holding-coffee-hand_1303-10299.jpg",
          imageAlt: "High-Waisted Office Trousers",
        },
        {
          id: "5",
          name: "Pleated A-Line Mini Skirt",
          price: "$25.00",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-stylish-young-woman_158538-3883.jpg",
          imageAlt: "Pleated A-Line Mini Skirt",
        },
        {
          id: "6",
          name: "Classic Black Stiletto Heels",
          price: "$55.99",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-photo-fashion-model-with-beautiful-face-perfect-body-decollete-short-blue-party-dress-open-arms_273443-3386.jpg",
          imageAlt: "Classic Black Stiletto Heels",
        },
      ]}
      title="Shop Our Latest Collection"
      description="Browse through our handpicked selection of fashion-forward apparel and accessories, updated regularly."
      tag="New Arrivals"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue",
        "Fashionista Magazine",
        "Harper's Bazaar",
        "Elle",
        "Glamour",
        "InStyle",
        "Teen Vogue",
      ]}
      title="Trusted by Fashion Enthusiasts Worldwide"
      description="Our collections are loved and featured by leading fashion publications and influencers."
      speed={40}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Fashion Blogger",
          company: "StyleMaven",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-businesswoman-smiling-communicating-with-her-partners-young-attractive-smiling-woman-speaking-cell-phone-city_549566-549.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "2",
          name: "Michael R.",
          role: "Stylist",
          company: "TrendSetters Agency",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-trousers-fashion-male-posing-street-background-europe-city-sunset-sunglasses_158538-22380.jpg",
          imageAlt: "Michael R.",
        },
        {
          id: "3",
          name: "Emily C.",
          role: "Happy Customer",
          company: "Online Shopper",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/surprised-lady-red-beret-looks-into-shopping-bag-young-woman-with-dark-hair-with-bright-lipstick-striped-stylish-clothes-posing-camera_197531-18739.jpg",
          imageAlt: "Emily C.",
        },
        {
          id: "4",
          name: "David L.",
          role: "Influencer",
          company: "StreetStyle",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-happy-europnean-woman-sunglasses-is-resting-sunny-street-with-palms-looking-aside-portrait-model-woman-with-smile-face-holds-hat-with-hands-wears-sunglasses_291650-2669.jpg",
          imageAlt: "David L.",
        },
        {
          id: "5",
          name: "Jessica M.",
          role: "Fashionista",
          company: "Boutique Lover",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/what-you-think-about-new-jewelry_329181-8033.jpg",
          imageAlt: "Jessica M.",
        },
        {
          id: "6",
          name: "Chris P.",
          role: "Student",
          company: "Fashion Academy",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/content-man-shopping-with-wife-showing-her-something-outdoors_1262-12644.jpg",
          imageAlt: "Chris P.",
        },
      ]}
      kpiItems={[
        {
          value: "10K+",
          label: "Happy Customers",
        },
        {
          value: "500+",
          label: "New Styles Monthly",
        },
        {
          value: "4.9/5",
          label: "Average Rating",
        },
      ]}
      title="Hear From Our Satisfied Customers"
      description="Read what our amazing customers have to say about their Shenova Shein Store experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What is your return policy?",
          content: "We offer a 30-day return policy on all unworn items with tags still attached. Please see our full return policy for details.",
        },
        {
          id: "2",
          title: "How long does shipping take?",
          content: "Standard shipping usually takes 5-7 business days, while express shipping arrives in 2-3 business days. Delivery times may vary.",
        },
        {
          id: "3",
          title: "Do you offer international shipping?",
          content: "Yes, we ship worldwide! International shipping rates and times are calculated at checkout based on your location.",
        },
        {
          id: "4",
          title: "How can I track my order?",
          content: "Once your order is shipped, you will receive a tracking number via email, which you can use to monitor your package's journey.",
        },
        {
          id: "5",
          title: "What payment methods do you accept?",
          content: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and other popular payment gateways. All transactions are secure.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common questions about shopping at Shenova Shein Store."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Subscribe for Exclusive Deals"
      description="Join our newsletter to receive updates on new arrivals, special promotions, and insider fashion tips."
      inputPlaceholder="Enter your email address"
      buttonText="Subscribe Now"
      termsText="By subscribing, you agree to receive marketing emails from Shenova Shein Store. You can unsubscribe at any time."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Shenova Shein Store"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
