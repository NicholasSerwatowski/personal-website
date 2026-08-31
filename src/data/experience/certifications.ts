import ARC from "../../assets/experience/certifications/ARC.jpg";
import FirstAid from "../../assets/experience/certifications/FirstAid.png";
import Matlab from "../../assets/experience/certifications/Matlab.png";
import OnRamp from "../../assets/experience/certifications/OnRamp.png";

export interface CertificateImage {
  image: string;
  url?: string;
  description?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  image?: string;
  certificates?: CertificateImage[];
  credentialId?: string;
  expiration?: string;
}

export const certifications: Certification[] = [
  {
    title: "MATLAB Onramp",
    organization: "MathWorks",
    date: "May 27, 2026",
    description:
      ``,
    image: Matlab,

    certificates: [
      {
        image: OnRamp,
        url: "https://matlabacademy.mathworks.com/progress/certificate.pdf?course=gettingstarted&release=v1&language=en&",
        description: "",
      },
    ],

    credentialId: undefined,
    expiration: undefined,
  },

  {
    title: "Adult and Pediatric First Aid/CPR/AED",
    organization: "American Red Cross",
    date: "May 26, 2026",
    description:
      ``,
    image: ARC,

    certificates: [
      {
        image: FirstAid,
        url: "https://www.redcross.org/take-a-class/qrcode?email=nick.serwatowski%40gmail.com&selectedCerts=id-02AK63B%2C&size=wallet",
        description: "",
      },
    ],

    credentialId: "02AK63B",
    expiration: "May 26, 2028",
  },
];