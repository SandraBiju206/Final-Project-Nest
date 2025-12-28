import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
      alt: 'Store',
      title: 'Welcome',
      description: 'Experience the future of retail. Innovated for your lifestyle.',
    },
    {
      src: 'https://redseer.com/wp-content/uploads/2025/03/Ecommerce-3-scaled.jpg',
      alt: 'Shopping',
      title: 'Quality',
      description: 'Premium materials used. Designed for durability. Trusted by thousands.',
    },
    {
      src: 'https://img.freepik.com/free-vector/support-typographic-header-idea-web-page-diagnostic-service-providing-web-site-with-updated-technical-information-flat-vector-illustration_613284-2889.jpg',
      alt: 'Support',
      title: 'Support',
      description: '24/7 Customer Support. Hassle-free returns. Secure payments.',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.carouselImages.length) %
      this.carouselImages.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
