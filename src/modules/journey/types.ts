export type JourneyReference = {
  name: string;
  tags: string[];
  image: string;
};

export type JourneyMapStep = {
  id: string;
  title: string;
  body: string;
};

export type JourneyTechnicalItem = {
  label: string;
  value: string;
};

export type JourneyGalleryItem = {
  image: string;
  label: string;
};

export type JourneyListen = {
  soundcloudLabel: string;
  duration: string;
  youtubeLabel: string;
  image: string;
};

export type JourneyNavigationLink = {
  id: string;
  title: string;
  href: string;
};

export type JourneyDetailConfig = {
  id: string;
  slug: string;
  titleLines: string[];
  subtitle: string[];
  heroImage: string;
  concept: {
    meta: string;
    paragraphs: string[];
  };
  map: JourneyMapStep[];
  references: JourneyReference[];
  listen: JourneyListen;
  technical: JourneyTechnicalItem[];
  gallery: JourneyGalleryItem[];
  previous: JourneyNavigationLink;
  next: JourneyNavigationLink;
};
