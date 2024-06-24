export interface ServiceDescriptionPart {
  text: string;
  bold?: boolean;
}

export interface Service {
  name: string;
  description: ServiceDescriptionPart[];
  link: string;
}
