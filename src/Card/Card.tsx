import React from 'react';
//wqaverdwr
import './Card.css';

export interface CardProps {
  img: { src: string; alt: string };
  title: string;
  children: any;
}

export function Card({ img, title, children }: CardProps) {
  return (
    <article data-card>
      <img data-card-img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
