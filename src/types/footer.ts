export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}
