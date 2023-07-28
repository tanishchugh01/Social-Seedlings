export interface PhotoData {
  id: string;
  created_at: string;
  updated_at: string;
  width: number | null;
  height: number | null;
  color: string | null;
  blur_hash: string | null;
  likes: number;
  liked_by_user: boolean;
  description: string | null;
  user: {
    id: string;
    username: string | null;
    name: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string | null;
    twitter_username: string | null;
    profile_image: {
      small: string | null;
      medium: string | null;
      large: string | null;
    };
    links: {
      self: string | null;
      html: string | null;
      photos: string | null;
      likes: string | null;
      portfolio: string | null;
    };
  };
  current_user_collections: {
    id: number;
    title: string | null;
    published_at: string | null;
    last_collected_at: string | null;
    updated_at: string | null;
    cover_photo: any;
    user: any;
  }[];
  urls: {
    raw: string | null;
    full: string | null;
    regular: string | null;
    small: string | null;
    thumb: string | null;
  };
  links: {
    self: string | null;
    html: string | null;
    download: string | null;
    download_location: string | null;
  };
}
