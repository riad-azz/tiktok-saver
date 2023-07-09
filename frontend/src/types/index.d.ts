export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImageUrl: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type VideoInfo = {
  filename: string;
  duration: number;
  is_watermarked: boolean;
  video_link: string;
  thumbnail: string;
};
