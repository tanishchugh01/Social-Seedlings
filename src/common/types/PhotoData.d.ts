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
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: any[]; // You can define a more specific type for this array if possible
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[]; // You can define a more specific type for this array if possible
  sponsorship: null;
  topic_submissions: {
    health: {
      status: string;
      approved_on: string;
    }| any;
    interiors: {
      status: string;
      approved_on: string;
    }| any;
  }| null |{};
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: null;
    portfolio_url: string | null;
    bio: string;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string | null;
      twitter_username: null;
      paypal_email: null;
    };
  };
  exif: {
    make: null | string;
    model: null | string;
    name: null | string;
    exposure_time: null | string;
    aperture: null | string;
    focal_length: null | string;
    iso: null | string;
  };
  location: {
    name: null | string;
    city: null | string;
    country: null | string;
    position: {
      latitude: null | number;
      longitude: null | number;
    };
  };
  views: number;
  downloads: number;
}