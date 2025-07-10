export interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
    {
    title: 'Web Development Internship',
    organization: 'Prodify info tech',
    date: 'Jun - Jul 2025',
    credentialUrl: 'https://forage.com/certificate/your-certificate-id'
  },
  {
    title: 'Full Stack Web Development',
    organization: 'Udemy',
    date: 'Dec 2024',
    credentialUrl: 'http://ude.my/UC-634878bd-5440-499e-9c86-296381c55a10'
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    organization: 'Coursera',
    date: 'Dec 2024',
    credentialUrl: 'https://coursera.org/verify/BHDVQ4MVZGAJ '
  },
  {
    title: 'Electronic Arts Software Engineering Virtual Experience Program',
    organization: 'Forage',
    date: 'Dec 2024',
    credentialUrl: 'https://www.linkedin.com/posts/pragadheesh-ra_softwareengineering-c-gamedevelopment-activity-7279745582284365826-weoS?utm_source=share&utm_medium=member_android&rcm=ACoAAEzys8QBXN54Zz-4s-YjxYXTI7bYvrOnZyE '
  },
  {
    title: 'Walmart USA Advanced Software Engineering Virtual Experience Program',
    organization: 'Forage',
    date: 'Dec 2024 '
  }
];