export interface UserDB {
  name: string;
  job: string;
  age: number;
  gender: string;
  location: string;
  image: string;
  about: string;
  bio: string;
  motivation: string[];
  goals: string[];
  skills: skill[];
  personality: string[];
  media: social[];
}
export interface skill {
  skill: number;
}
export interface social {
  social: string;
}
