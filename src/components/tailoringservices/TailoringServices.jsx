import PropTypes from 'prop-types';
import Tailor from '../../assets/Tailor.jpg'; // Adjust the path based on your project structure
import stylingConsultation from '../../assets/stylingconsultation.jpg';
import seasonCollections from '../../assets/seasoncollections.png';
import alterationServices from '../../assets/alteration-services.webp';
import personalShopping from '../../assets/personalshopping.webp';
import wardrobeRevamp from '../../assets/wardroberevamp.webp';

const Projects = ({ theme }) => {
  const services = [
    { 
      title: "Custom Tailoring", 
      description: "Book for designs tailored to fit you perfectly.", 
      imageUrl: Tailor// Use the imported image here
    },
    { 
      title: "Styling Consultation", 
      description: "Meet with out fashion experts for the best trend for you.", 
      imageUrl: stylingConsultation// Use the imported image here
    },
     { 
      title: "Seanson Collections", 
      description: "Explore our vase collections of class and quality.", 
      imageUrl: seasonCollections// Use the imported image here
    },
     { 
      title: "Alteration Services", 
      description: "Don't throw away your old clothes, we could make it new again.", 
      imageUrl: alterationServices// Use the imported image here
    },
    { 
      title: "Personal Shopping", 
      description: "Exploring our store is guarantee to meeting your needs.", 
      imageUrl: personalShopping// Use the imported image here
    },
    { 
      title: "waldrope Revamp", 
      description: "Exploring our store for deals on items that are used or unwanted.", 
      imageUrl: wardrobeRevamp// Use the imported image here
    }
  ]


  return (
    <div className={`container-fluid py-12 px-4 ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg rounded-lg transition-transform  transform hover:scale-105 ${theme === 'light' ? 'bg-white border border-gray-300 hover:bg-gray-700 hover:text-gray-200' : 'bg-gray-700 border border-gray-600 hover:bg-gray-200 hover:text-gray-700'}`}
          >
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-40 object-cover rounded-t-lg mb-4" 
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="className={`${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes validation
Projects.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Projects;
