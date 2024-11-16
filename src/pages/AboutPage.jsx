// AboutPage.jsx
import AboutHero from '../components/abouthero/AboutHero.test';
//import AboutMaterials from '../components/aboutmaterials/AboutMaterials';
//import TailoringProcess from '../components/tailoringprocess/TailoringProcess';
//import MeetTheTailors from '../components/meetthetailors/MeetTheTailors';
//import BeforeAfterShowcase from '../components/beforeaftershowcase/BeforeAfterShowcase';
//import TailoringServices from '../components/tailoringservices/TailoringServices';
//import Testimonials from '../components/testimonials/Testimonials';
//import MeasurementGuide from '../measurementguide/MeasurementGuide';
//import ContactCTA from '../components/contactcta/ContactCTA';
//import TailoringVisualizer from '../components/tailoringvisualizer/TailoringVisualizer';


const AboutPage = () => {
 
  return (
    <div className="backdrop-blur-md bg-gradient-to-b from-blue-950 to-black">
      {/* Hero Section */}
      <AboutHero className="backdrop-blur-md bg-gradient-to-t from-blue-950 to-black" />

      {/* Materials and Fabric Quality
      <section className="px-4">
        <AboutMaterials />
      </section> */} 

      {/* Our Tailoring Process 
      <section className="px-4">
        <TailoringProcess />
      </section>*/}

      {/* Meet the Tailors
      <section className="px-4">
        <MeetTheTailors />
      </section>*/}

      {/* Before and After Showcase 
      <section className="px-4">
        <BeforeAfterShowcase />
      </section>*/}

      {/* Tailoring Services 
      <section className="px-4">
        <TailoringServices />
      </section>*/}

      {/* Client Testimonials
      <section className="px-4">
        <Testimonials />
      </section>*/}

      
      {/* Personalized Measurement Guide
      
        <MeasurementGuide />*/}
     

      {/* Contact CTA 
      <section className="px-4 text-center">
        <ContactCTA />
      </section>*/}

      {/* Custom Tailoring Visualizer
      <section className="px-4">
        <TailoringVisualizer />
      </section> */}
    </div>
  );
};

export default AboutPage;
