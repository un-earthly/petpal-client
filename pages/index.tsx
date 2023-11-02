import Link from "next/link";
import UserLayout from "../src/layout/UserLayout";
import Image from "next/image";
import ServiceCard from "@/src/components/ServiceCard";
import { servicesData } from "./data.js"
import Tip from "@/src/components/Tip";
import SuccessStory from "@/src/components/SuccessStory";

export default function Home() {


  const upcomingServices = [
    {
      title: "Cat Potty Training",
      description: "cats a hell of a kind, theyre cute but can be a great threat if not correctly trained where to potty."
    },
    {
      title: 'Dog Obedience Training',
      description: 'Dogs obidience can be a real pain. but we petpal got you covered',
    },
  ]

  const upcomingEvents = [
    {
      title: 'Pet Adoption Event',
      date: 'October 25, 2023',
      location: 'Local Pet Shelter',
    },
    {
      title: 'Pet Wellness Workshop',
      date: 'November 10, 2023',
      location: 'PetPal Community Center',
    },
    {
      title: 'Pet Wellness Workshop',
      date: 'November 10, 2023',
      location: 'PetPal Community Center',
    },

  ]


  const clientReviews = [
    {
      name: 'linda sneakers',
      image: "/user-1.jpg",
      comment: 'I couldn’t be happier with the pet care services provided by PetPal. My dog is always excited for his daily walks!',
    },
    {
      name: 'Jane Smith',
      image: "/user-1.jpg",
      comment: 'PetPals pet sitting service allowed me to travel worry- free, knowing my cats were in good hands.Highly recommended!',
    },
    {
      name: 'Bob Johnson',
      image: "/user-3.jpg",

      comment: 'The grooming services at PetPal keep my dog looking amazing. The staff is friendly and professional.',
    },
  ];
  const latestNews = [
    {
      title: 'New Dog Training Workshops Announced',
      date: 'October 15, 2023',
      content: 'We are excited to announce our upcoming dog training workshops designed to help your furry friends become well-behaved and happy companions.',
    },
    {
      title: 'Pet Adoption Event Huge Success',
      date: 'October 5, 2023',
      content: 'Our recent pet adoption event was a massive success, with many pets finding loving forever homes. Thanks to our amazing community for their support!',
    },
    {
      title: 'Tips for Keeping Your Pets Safe in Winter',
      date: 'September 25, 2023',
      content: 'As winter approaches, here are some essential tips to ensure your pets stay safe, warm, and healthy during the colder months.',
    },
  ];

  const healthTips = [
    'Regular exercise is crucial for your pet’s physical and mental well-being.',
    'Maintain a balanced diet and avoid overfeeding to prevent obesity in your pets.',
    'Schedule regular check-ups with your veterinarian to ensure your pets overall health.',
    'Keep your pets living area clean and free of any hazards or harmful substances.',
  ];
  const adoptionStories = [
    {
      title: 'Luna Finds a Forever Home',
      imageSrc: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg",
      story: 'After months of waiting, sweet Luna found her perfect family. She now enjoys long walks and endless cuddles!',
    },
    {
      title: 'Maxs Journey to Happiness',
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZIDWC2pVoEzfi6YBDjohzbq1pjrtQ1vK_rwJ478&s",
      story: 'Max, the energetic pup, overcame his fears and found love with a compassionate family. Hes now thriving and spreading joy!',
    },
  ];
  return (
    <UserLayout>
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between lg:max-w-[1280px] p-4">
          <Image alt={"banner"} height={500} width={500} src="/banner-image.jpg" className="rounded-lg shadow-2xl" />
          <div className="lg:max-w-xl mr-20">
            <h1 className="text-5xl font-bold">Welcome to PetPal</h1>
            <p className="py-6">
              Your trusted source for all things pets. Whether you have a furry friend, a feathery companion, or a scaly buddy, were here to provide you with the best pet care information and services.
            </p>
            <Link href="/services" className="btn btn-accent">Explore Services</Link>
          </div>
        </div>
      </div>


      <section className="p-8">
        <div className="lg:max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-semibold text-center my-10 ">Available Pet Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <ServiceCard service={service} key={index} />
            ))}
          </div>
          <Link href="/services">
            <button className="btn btn-wide hover:btn-outline block duration-200 mx-auto btn-accent my-10 rounded-full">I want something else</button></Link>
        </div>
      </section>

      <section className="py-20 my-10 bg-gray-100">
        <div className="lg:max-w-[1280px]  mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10 ">Upcoming Events</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {upcomingEvents.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">Date: {service.date}</p>
                <p className="text-gray-600">Location: {service.location}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="lg:max-w-[1280px]  mx-auto text-center">
          <h2 className="text-2xl font-semibold">About PetPal</h2>
          <p className="mt-4 text-gray-600">
            PetPal is dedicated to providing the best care and services for your beloved pets. We are passionate about ensuring the well-being of all animals and offer a wide range of pet-related services and events.
            From dog walking to pet grooming, and from pet adoption events to educational workshops, were here to ensure that your pets receive the love and care they deserve. Join our growing community of pet enthusiasts today!

          </p>
          <Link href="/about">
            <button className="btn btn-accent block rounded-full btn-wide mx-auto mt-6">Learn More</button>
          </Link>
        </div>
      </section>

      <section className="py-20 my-10 bg-gray-100">
        <div className="lg:max-w-[1280px] mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-10">Client Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md">
                <Image height={50} width={50} src={review.image} className="mx-auto h-10 -top-2 w-10 rounded-full ring-1 right-1/2 ring-blue-400" alt="" />
                <div className="my-5">
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-gray-800 mt-2">- {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-8 my-10">
        <div className="lg:max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-semibold text-center">Latest News</h2>
          <div className="grid gap-6 my-10 space-y-10">
            {latestNews.map((news, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-600 mt-2">Date: {news.date}</p>
                <p className="text-gray-600 mt-2">{news.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 bg-base-200">
        <div className="lg:max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-semibold text-center">Pet Health Tips</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthTips.map((tip, index) => (
              <Tip key={index} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 my-10 bg-base-100">
        <div className="lg:max-w-[1280px] mx-auto text-center">
          <h2 className="text-2xl font-semibold">Pet Adoption Success Stories</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {adoptionStories.map((story, index) => (
              // <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              //   <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
              //   <p className="text-gray-800">{story.story}</p>
              // </div>
              <SuccessStory imageSrc={story.imageSrc} text={story.story} name={story.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto text-gray-600 bg-gray-100 body-font">
        <div className="lg:max-w-[1280px] px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:max-w-xl md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-4xl text-gray-900">
              Welcome to Pet Services Hub
            </h1>
            <p className="leading-relaxed mt-4">
              Your one-stop destination for pet care, exciting pet events, and volunteer opportunities to make a difference in the lives of our furry friends.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Join Our Community</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="btn btn-accent btn-md rounded">
              Get Started
            </button>
            <p className="text-xs text-gray-500 mt-3">Join us in making a positive impact on pets in need!</p>
          </div>
        </div>
      </section>

    </UserLayout>
  );

}