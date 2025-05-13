
export const hospitalInfo = {
  name: "MediCare Hospital",
  tagline: "Your Health, Our Priority",
  logo: "/logo.svg",
  address: "123 Healing Street, Wellness City, WC 12345",
  phone: "+1 (555) 123-4567",
  email: "info@medicarehospital.com",
  socialMedia: {
    facebook: "https://facebook.com/medicarehospital",
    twitter: "https://twitter.com/medicarehospital",
    instagram: "https://instagram.com/medicarehospital",
    linkedin: "https://linkedin.com/company/medicarehospital"
  }
};

export const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Specialized care for heart-related conditions with advanced diagnostic and treatment options.",
    icon: "heart"
  },
  {
    id: 2,
    name: "Neurology",
    description: "Comprehensive treatment for neurological disorders with cutting-edge technology and expert neurologists.",
    icon: "brain"
  },
  {
    id: 3,
    name: "Orthopedics",
    description: "Complete care for bone and joint issues with specialized surgeons and rehabilitation programs.",
    icon: "bone"
  },
  {
    id: 4,
    name: "Pediatrics",
    description: "Compassionate care for children of all ages with child-friendly facilities and specialized pediatricians.",
    icon: "baby"
  },
  {
    id: 5,
    name: "Oncology",
    description: "Comprehensive cancer care with advanced treatment options and supportive services.",
    icon: "activity"
  },
  {
    id: 6,
    name: "Gynecology",
    description: "Complete women's health services provided by experienced gynecologists in a comfortable environment.",
    icon: "user"
  }
];

export const services = [
  {
    id: 1,
    name: "Emergency Care",
    description: "24/7 emergency services with rapid response teams and state-of-the-art equipment.",
    icon: "ambulance"
  },
  {
    id: 2,
    name: "Laboratory Services",
    description: "Comprehensive diagnostic testing with quick and accurate results.",
    icon: "flask"
  },
  {
    id: 3,
    name: "Radiology",
    description: "Advanced imaging services including X-ray, MRI, CT scans, and ultrasound.",
    icon: "x-ray"
  },
  {
    id: 4,
    name: "Surgery",
    description: "State-of-the-art surgical facilities with experienced surgeons across specialties.",
    icon: "scissors"
  },
  {
    id: 5,
    name: "Physical Therapy",
    description: "Comprehensive rehabilitation services to help patients regain mobility and function.",
    icon: "activity"
  },
  {
    id: 6,
    name: "Mental Health",
    description: "Supportive mental health services with experienced psychiatrists and psychologists.",
    icon: "brain"
  }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    education: "MD, Harvard Medical School",
    experience: "15+ years",
    image: "/doctors/doctor1.jpg",
    available: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    education: "MD, Johns Hopkins University",
    experience: "12+ years",
    image: "/doctors/doctor2.jpg",
    available: "Tue, Thu, Sat"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    education: "MD, Stanford University",
    experience: "10+ years",
    image: "/doctors/doctor3.jpg",
    available: "Mon, Tue, Thu"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    education: "MD, Yale University",
    experience: "18+ years",
    image: "/doctors/doctor4.jpg",
    available: "Wed, Fri, Sat"
  }
];

export const branches = [
  {
    id: 1,
    name: "MediCare Main Hospital",
    address: "123 Healing Street, Wellness City, WC 12345",
    phone: "+1 (555) 123-4567",
    email: "main@medicarehospital.com",
    coordinates: { lat: 40.7128, lng: -74.0060 }, // New York coordinates as placeholder
    services: ["Emergency", "Surgery", "Outpatient", "Laboratory"]
  },
  {
    id: 2,
    name: "MediCare Downtown Clinic",
    address: "456 Care Avenue, Wellness City, WC 12345",
    phone: "+1 (555) 234-5678",
    email: "downtown@medicarehospital.com",
    coordinates: { lat: 34.0522, lng: -118.2437 }, // Los Angeles coordinates as placeholder
    services: ["Outpatient", "Laboratory", "Imaging"]
  },
  {
    id: 3,
    name: "MediCare Children's Center",
    address: "789 Hope Road, Wellness City, WC 12345",
    phone: "+1 (555) 345-6789",
    email: "children@medicarehospital.com",
    coordinates: { lat: 41.8781, lng: -87.6298 }, // Chicago coordinates as placeholder
    services: ["Pediatrics", "Vaccination", "Child Development"]
  }
];

export const statistics = {
  patients: "50,000+",
  doctors: "200+",
  beds: "500+",
  satisfaction: "98%",
  awards: "25+",
  experience: "35+ years"
};

export const campaigns = [
  {
    id: 1,
    title: "Free Health Checkup Camp",
    description: "Get a comprehensive health checkup including basic blood tests, BMI, and consultation.",
    date: "June 15-20, 2025",
    image: "/campaigns/checkup.jpg",
    category: "Health Camp"
  },
  {
    id: 2,
    title: "50% Off on Cardiac Screening",
    description: "Special discount on complete cardiac screening package. Limited time offer.",
    date: "July 1-15, 2025",
    image: "/campaigns/cardiac.jpg",
    category: "Discount"
  },
  {
    id: 3,
    title: "Diabetes Awareness Workshop",
    description: "Join our experts for a free workshop on diabetes management and prevention.",
    date: "August 5, 2025",
    image: "/campaigns/diabetes.jpg",
    category: "Workshop"
  }
];

export const jobs = [
  {
    id: 1,
    title: "Senior Cardiologist",
    department: "Cardiology",
    type: "Full-time",
    experience: "Minimum 10 years",
    education: "MD/MS in Cardiology",
    description: "We are seeking an experienced Cardiologist to join our team of healthcare professionals...",
    posted: "2025-05-01",
    deadline: "2025-06-15"
  },
  {
    id: 2,
    title: "Registered Nurse",
    department: "General Ward",
    type: "Full-time",
    experience: "Minimum 2 years",
    education: "BSc in Nursing",
    description: "Looking for compassionate registered nurses to provide quality patient care...",
    posted: "2025-05-05",
    deadline: "2025-06-10"
  },
  {
    id: 3,
    title: "Lab Technician",
    department: "Pathology",
    type: "Full-time",
    experience: "Minimum 3 years",
    education: "Diploma/Degree in Medical Laboratory Technology",
    description: "Seeking skilled lab technicians to perform various diagnostic tests...",
    posted: "2025-05-10",
    deadline: "2025-06-20"
  },
  {
    id: 4,
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    experience: "Minimum 2 years",
    education: "Bachelor's degree in any discipline",
    description: "Looking for an organized and efficient Administrative Assistant to support hospital operations...",
    posted: "2025-05-12",
    deadline: "2025-06-25"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    comment: "The care I received at MediCare Hospital was exceptional. The doctors were knowledgeable and the staff was very attentive.",
    rating: 5,
    date: "2025-03-15"
  },
  {
    id: 2,
    name: "Maria Garcia",
    comment: "I was nervous about my surgery, but the team at MediCare made me feel comfortable and supported throughout the process.",
    rating: 5,
    date: "2025-04-02"
  },
  {
    id: 3,
    name: "Robert Johnson",
    comment: "The pediatric department took great care of my son. The child-friendly environment made his stay much easier.",
    rating: 4,
    date: "2025-04-18"
  }
];
