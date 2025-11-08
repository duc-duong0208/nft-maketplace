// src/types/index.ts

export interface NFT {
  id: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  items: NFT[];
  banner?: string;
}

export interface CategoryIcon {
  icon: string;
  label: string;
  link: string;
  color?: string;
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  wallet?: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}