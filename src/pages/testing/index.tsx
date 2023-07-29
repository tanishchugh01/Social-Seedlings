import SinglePost from "@/common/components/SinglePost";

export default function Testing() {
  const obj = {
    id: "LxtvuMkmpY8",
    slug: "a-close-up-of-a-green-and-white-wallpaper-LxtvuMkmpY8",
    created_at: "2023-07-02T20:33:43Z",
    updated_at: "2023-07-27T13:42:07Z",
    promoted_at: "2023-07-13T18:40:02Z",
    width: 3024,
    height: 4032,
    color: "#597326",
    blur_hash: "L9Ja$3?HIUR%^+ayWARj00WBt7WU",
    description: null,
    alt_description: "a close up of a green and white wallpaper",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1688329991949-bf54b4f09057?ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1688329991949-bf54b4f09057?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1688329991949-bf54b4f09057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1688329991949-bf54b4f09057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1688329991949-bf54b4f09057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1688329991949-bf54b4f09057",
    },
    links: {
      self: "https://api.unsplash.com/photos/a-close-up-of-a-green-and-white-wallpaper-LxtvuMkmpY8",
      html: "https://unsplash.com/photos/a-close-up-of-a-green-and-white-wallpaper-LxtvuMkmpY8",
      download:
        "https://unsplash.com/photos/LxtvuMkmpY8/download?ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8",
      download_location:
        "https://api.unsplash.com/photos/LxtvuMkmpY8/download?ixid=M3w0ODEwMjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA1MDI2OTh8",
    },
    likes: 46,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "7tllYko_I4k",
      updated_at: "2023-07-27T21:57:51Z",
      username: "edelputte",
      name: "Eduard Delputte",
      first_name: "Eduard",
      last_name: "Delputte",
      twitter_username: "edelputte",
      portfolio_url: null,
      bio: "Instagram: @edelputte",
      location: "Ghent",
      links: {
        self: "https://api.unsplash.com/users/edelputte",
        html: "https://unsplash.com/@edelputte",
        photos: "https://api.unsplash.com/users/edelputte/photos",
        likes: "https://api.unsplash.com/users/edelputte/likes",
        portfolio: "https://api.unsplash.com/users/edelputte/portfolio",
        following: "https://api.unsplash.com/users/edelputte/following",
        followers: "https://api.unsplash.com/users/edelputte/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1677069964372-c1cac372f7e5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1677069964372-c1cac372f7e5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1677069964372-c1cac372f7e5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "edelputte",
      total_collections: 0,
      total_likes: 178,
      total_photos: 230,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "edelputte",
        portfolio_url: null,
        twitter_username: "edelputte",
        paypal_email: null,
      },
    },
    exif: {
      make: "DJI",
      model: "FC3582",
      name: "DJI, FC3582",
      exposure_time: "1/100",
      aperture: "1.7",
      focal_length: "6.7",
      iso: 100,
    },
    location: {
      name: "Geluwe, Wervik, Belgium",
      city: "Wervik",
      country: "Belgium",
      position: {
        latitude: 50.809986,
        longitude: 3.076705,
      },
    },
    views: 255991,
    downloads: 2029,
  };
  
  return <SinglePost photoData={obj} />;
}
