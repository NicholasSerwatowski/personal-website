import cwruImage from "../../assets/cwru.jpg";

export interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
  certificate?: string;
  credentialId?: string;
  verificationUrl?: string;
  expiration?: string;
}

export const certifications: Certification[] = [
  {
    title: "Example Certification",
    organization: "Example Organization",
    date: "June 2026",
    description:
      "Description of the certification and the skills or knowledge it demonstrates.",
    image: cwruImage,
    certificate: cwruImage,
    credentialId: undefined,
    verificationUrl: undefined,
    expiration: undefined,
  },
];