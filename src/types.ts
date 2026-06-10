export interface Procedure {
  id: string;
  name: string;
  description: string;
  duration: string;
  recovery: string;
  details: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  details: string;
}

export interface Publication {
  source: string;
  title: string;
  date: string;
}

export interface Testimonial {
  patient: string;
  procedure: string;
  quote: string;
  rating: number;
}
