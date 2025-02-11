export interface FreelancerProfile {
    // Personal Information
    name : string;
    location: string;
    about: string;
    role : string;
    
    // Professional Details
    skills: string[];
    yearsOfExperience: number;
    
    // Education
    education: {
      degree: string;
      institution: string;
      startYear : string;
      endYear : string;
    }[];
    
    // Work Experience
    experience: {
      title: string;
      company: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    
    // Rate and Availability
    hourlyRate: number;
    availability: 'full-time' | 'part-time' | 'contract';
  }

  export interface ClientProfile {
    // Personal Information
    name : string;
    companyName: string;
    position: string;
    location: string;
    
    // Company Details
    industry: string;
    companySize: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
    website: string;
    
    // Project Details
    projectDescription: string;
    projectType: 'one-time' | 'ongoing' | 'not-sure';
    estimatedDuration: string;
    requiredSkills: string[];
    
    // Budget and Timeline
    budget: {
      min: number;
      max: number;
    };
    startDate: string;
    
    // Communication Preferences
    preferredCommunication: 'email' | 'phone' | 'slack' | 'teams' | 'other';
    timezone: string;
    workingHours: {
      start: string;
      end: string;
    };
  }