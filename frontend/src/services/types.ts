export interface PACKAGETYPE {
  __id: string;
  name: string;
  image: string;
  days: number;
  nights: number;
  Overview: string[] | undefined;
  Highlights?: string[] | undefined;
  Inclusion: string[] | undefined;
  Exclusion: string[] | undefined;
  Itinerary: Itinerary[] | undefined;
  FAQs: Itinerary[] | undefined;
  Price?: number;
}

export type Itinerary = {
  name?: string;
  description?: string;
};

export type User = {
  _id: string;
  fullname: string;
  mobile: string;
  isVerified: boolean;
  CashbackAmount: number;
};

export type UserInput = {
  fullname: string;
  mobile: string;
  password: string;
  isoCode: string;
};

export type LoginInput = {
  mobile: string;
  password: string;
  isoCode: string;
};

export type HotelType = {
  __id: string;
  city: string;
  hotels: HotelData[];
};

export type HotelData = {
  name: string;
  image: string;
  desc: string;
};

export type CarouselImage = {
  image: string;
  content: string;
};

export type ServiceType = {
  __id: string;
  name: string;
  Overview: string;
  image: CarouselImage[];
};

export interface DAYTOUR {
  iamge: CarouselImage[];
  cities: CITIESTYPE[];
}

export type CITIESTYPE = {
  name: string;
  Overview: Itinerary[];
};

export type ADVENTUREDATA = {
  name: string;
  iamge: string;
  desc: string;
};

export type ADVENTURETYPE = {
  iamges: CarouselImage[];
  data: ADVENTUREDATA[];
};

export type BOOKINGTYPE = {
  _id: string;
  PackageName: string;
  PackageDays: number;
  people: number;
  PackagePrice: number;
  startDate: Date;
  user: User;
  paymentStatus: PAYMENTSTATUSTYPE;
  PlaceList?: string[];
  hotel?: string;
  AdventureList?: string[];
};

export type QUERIESTYPE = {
  user: User;
  message: string;
  _id: string;
};

type PAYMENTSTATUSTYPE = {
  order_id: string;
  payment_id: string;
};

export type DETAILTYPES = {
  Users: number;
  Queries: number;
  Verified: number;
  Bookings: number;
  Unpaid: number;
};
