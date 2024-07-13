// interfaces for content types
export interface Image {
  id?: number;
  url?: string;
  alt: string;
  link?: string; 
  name?: string;
  source?: string;
}

export interface Card {
  id?: number;
  title: string;
  subtitle: string;
  illustration: Image;
  backgroundColor: string;
  textColor: string;
}

export interface Button {
  name: string;
  href: string;
}

export interface Content {
  color?: { backgroundColor: string, textColor: string };
  logo: Image;
  hero: {
      image: string;
      title: string;
      subtitle: string;
      additionalInfo: {
          subtitle: string;
          avatars: Image[];
      };
      buttons: Button[];
  };
  features: Card[];
}
