import { homeData } from "../../content/home";
import HeroBanner from "@/components/blocks/HeroBanner";
import AboutSection from "@/components/blocks/AboutSection";
import CorePillarsTeaser from "@/components/blocks/CorePillarsTeaser";
import SolutionsTeaser from "@/components/blocks/SolutionsTeaser";
import InitiativesGrid from "@/components/blocks/InitiativesGrid";
import ImpactStatsGrid from "@/components/blocks/ImpactStatsGrid";
import GallerySection from "@/components/blocks/GallerySection";
import PartnershipsTeaser from "@/components/blocks/PartnershipsTeaser";

import ContactUsSection from "@/components/blocks/ContactUsSection";
import CTASection from "@/components/blocks/CTASection";

export default function Home() {
  return (
    <>
      <HeroBanner data={homeData.hero} />
      <AboutSection data={homeData.about} />
      <CorePillarsTeaser data={homeData.corePillarsTeaser} />
      <SolutionsTeaser data={homeData.solutionsTeaser} />
      <InitiativesGrid data={homeData.initiatives} />
      
      <ImpactStatsGrid data={homeData.impactStats} />
      
      <GallerySection data={homeData.galleryTeaser} />
      
      <PartnershipsTeaser data={homeData.partnerships} />
      

      
      <ContactUsSection data={homeData.contactTeaser} />
      
      <CTASection data={homeData.cta} />
    </>
  );
}
