export interface UserData {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string | null;
  bio: string | null; // Can be null
  location: string | null; // Can be null
  total_likes: number;
  total_photos: number;
  total_collections: number;
  followed_by_user: boolean;
  followers_count: number;
  following_count: number;
  downloads: number;
  social: {
    instagram_username: string;
    portfolio_url: string | null; // Can be null
    twitter_username: string | null; // Can be null
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  badge: {
    title: string;
    primary: boolean;
    slug: string;
    link: string;
  } | null; // Can be null
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}
