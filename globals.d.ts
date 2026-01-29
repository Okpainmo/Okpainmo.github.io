export interface AuthorSocials {
  twitter: string;
  linkedin: string;
  github: string;
}

export interface Post {
  postTitle: string;
  postDate: string; // e.g. "March 25, 2025"
  postIndex: number;
  postCategory: string;
  postBrief: string;
  postThumbnailUrl: string;

  authorPhotoUrl: string;
  authorName: string;
  authorBio: string;
  authorSocials: AuthorSocials;

  postTags: string[];
  postSlug: string;
}
