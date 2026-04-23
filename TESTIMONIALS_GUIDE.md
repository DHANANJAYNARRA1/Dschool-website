# Testimonials Guide

## How to Add Images and Videos to Testimonials

### Location
Edit the file: `/src/app/components/Testimonials.tsx`

### Adding Image Testimonials

1. Place your image in the `/src/imports/` folder (e.g., `testimonial1.jpg`)

2. Update the testimonial object:
```typescript
{
  quote: "Your testimonial quote here",
  author: "Person Name",
  role: "Their Role",
  image: "testimonial1.jpg",  // Image filename
  video: null,
  type: "image" as const,
}
```

### Adding Video Testimonials

1. For local videos, place in `/src/imports/` folder (e.g., `testimonial1.mp4`)
2. For YouTube/Vimeo, use the embed URL

Update the testimonial object:
```typescript
{
  quote: "Your testimonial quote here",
  author: "Person Name",
  role: "Their Role",
  image: null,
  video: "testimonial1.mp4",  // Or YouTube/Vimeo URL
  type: "video" as const,
}
```

### Text-Only Testimonials

```typescript
{
  quote: "Your testimonial quote here",
  author: "Person Name",
  role: "Their Role",
  image: null,
  video: null,
  type: "text" as const,
}
```

### Example with Real Media

```typescript
const testimonials = [
  {
    quote: "D School transformed my career!",
    author: "Dr. Sarah Johnson",
    role: "Senior Nursing Leader",
    image: "sarah-testimonial.jpg",
    video: null,
    type: "image" as const,
  },
  {
    quote: "Best healthcare training program!",
    author: "John Smith",
    role: "Healthcare Manager",
    image: null,
    video: "https://www.youtube.com/embed/VIDEO_ID",
    type: "video" as const,
  },
];
```

## Supported Formats

- **Images**: JPG, PNG, WEBP
- **Videos**: MP4, WebM, or YouTube/Vimeo embed URLs
