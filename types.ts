import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}