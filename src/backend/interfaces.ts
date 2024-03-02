export interface DashboardReview {
    average_stars: number;
    num_reviews: number;
}

// This is for the card view in the dashboard
export interface DashboardView {
    title: string
    id: number
    image: string // placeholder for local image
    cuisine: string
    location: string
    reviews: DashboardReview
}

export interface Data {
    restaurants: Restaurant[],
    dashboardView: DashboardView[]
}

export interface Restaurant {
    id: number,
    title: string;
    logo: string,
    cuisine: string;
    location: string;
    operatingHours: string[];
    phone: string;
    website: string;
    description: string
    reviews: Review[]
}

export interface Review {
    reviewTitle: string;
    reviewer: string;
    date: Date;
    rating: number;
    likes: number;

    // Might change into categories?!
    quality: number;
    price: number;
    service: number;
  
    // categories: {
    //   // Can be represented as stars/dots on front end
    //   // Out of 5
    //   quality: number;
    //   price: number;
    //   service: number;
    // };
  
    reviewText: string;
    // images: string[]; // Assuming images will be stored as URLs
}