export interface SkillType {
    domain: string;
    skills: string[];
  };
  
export interface LanguageType {
    name: string;
    level: string;
  };
  
export interface EducationType {
    institution: string;
    degree: string;
    startYear: string;
    endYear: string;
  };
  
export interface ProfileType {
    name: string;
    rating: number;
    reviews: number;
    projectsCompleted: number;
    successRate: number;
    responseTime: number;
    location: string;
    role: string;
    imageUrl: string;
    skills: SkillType[];
    about: string;
    languages: LanguageType[];
    education: EducationType[];
  };

export interface propsType {
    profile: ProfileType;
  }
  