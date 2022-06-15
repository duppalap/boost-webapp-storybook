// ----------------------------------------------------------------------

export type SitePOI = {
  pointOfInterestId?: number;
  name: string;
  address: {
    street: string;
    state: string;
    zipCode: string;
    country: string;
    latitude?: string;
    longitude?: string;
  };
};

export type SiteImage = {
  siteImagesId?: number;
  imageName: string;
  imageURL: string;
  subBoostGroupId: string | null;
};
