import Link from "next/link";
import UserLayout from "../src/components/layout/UserLayout";

export default function Home() {
  const services = [
    {
      image: "https://t4.ftcdn.net/jpg/02/33/27/49/360_F_233274969_05yF6n373UklRywbiScD9ylTF1d6jqnZ.jpg",
      title: 'Dog Walking',
      description: 'Give your dog the exercise they need with our professional dog walking services.',
    },
    {
      image: "https://storage.googleapis.com/petbacker/images/blog/2017/pets-on-holiday.jpg",
      title: 'Pet Boarding',
      description: 'Leave your pets in safe hands with our comfortable and secure pet boarding facilities.',
    },
    {
      image: "https://st.depositphotos.com/1177973/1392/i/450/depositphotos_13924962-stock-photo-grooming-the-yorkshire-terrier-isolated.jpg",
      title: 'Pet Grooming',
      description: 'Keep your pets looking their best with our grooming and spa treatments.',
    },
    {
      image: "https://thumbs.dreamstime.com/b/pet-sitter-29050298.jpg",
      title: 'Pet Sitting',
      description: `Trustworthy pet sitters to care for your pets when you're away from home.`,
    },
    {
      image: "https://thumbs.dreamstime.com/b/pet-sitter-29050298.jpg",
      title: 'Pet Sitting',
      description: `Trustworthy pet sitters to care for your pets when you're away from home.`,
    },
  ];

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
      image: "https://randomuser.me/api/portraits/women/88.jpg",
      comment: 'I couldn’t be happier with the pet care services provided by PetPal. My dog is always excited for his daily walks!',
    },
    {
      name: 'Jane Smith',
      image: "https://randomuser.me/api/portraits/women/80.jpg",
      comment: 'PetPals pet sitting service allowed me to travel worry- free, knowing my cats were in good hands.Highly recommended!',
    },
    {
      name: 'Bob Johnson',
      image: "https://randomuser.me/api/portraits/men/88.jpg",

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
      story: 'After months of waiting, sweet Luna found her perfect family. She now enjoys long walks and endless cuddles!',
    },
    {
      title: 'Maxs Journey to Happiness',
      story: 'Max, the energetic pup, overcame his fears and found love with a compassionate family. Hes now thriving and spreading joy!',
    },
  ];
  return (
    <UserLayout>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:w-8/12 mx-auto flex-col lg:flex-row-reverse">
          <img src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Welcome to PetPal</h1>
            <p className="py-6">
              Your trusted source for all things pets. Whether you have a furry friend, a feathery companion, or a scaly buddy, we're here to provide you with the best pet care information and services.
            </p>
            <Link href="/services" className="btn btn-accent">Checkout Services</Link>
          </div>
        </div>
      </div>


      <section className="p-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center my-3 ">Available Pet Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div className="card h-96 group bg-base-100 shadow-xl image-full">
                <figure><img className="group-hover:scale-125 duration-300" src={service.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-accent font-bold duration-200 btn-outline rounded-full">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/services">
            <button className="btn btn-wide hover:btn-outline block duration-200 mx-auto btn-accent my-4 rounded-full">I want something else</button></Link>
        </div>
      </section>

      <section className="py-8 my-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center my-3 ">Upcoming Events</h2>
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
        <div className="container lg:w-2/3  mx-auto text-center">
          <h2 className="text-2xl font-semibold">About PetPal</h2>
          <p className="mt-4 text-gray-600">
            PetPal is dedicated to providing the best care and services for your beloved pets. We are passionate about ensuring the well-being of all animals and offer a wide range of pet-related services and events.
            From dog walking to pet grooming, and from pet adoption events to educational workshops, we're here to ensure that your pets receive the love and care they deserve. Join our growing community of pet enthusiasts today!

          </p>
          <Link href="/about">
            <button className="btn btn-accent block rounded-full btn-wide mx-auto mt-6">Learn More</button>
          </Link>
        </div>
      </section>

      <section className="py-8 my-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold my-5">Client Reviews</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-4 lg:grid-cols-3">
            {clientReviews.map((review, index) => (
              <div key={index} className="bg-white relative rounded-lg p-5 shadow-md">
                <img src={review.image}  className="absolute h-10 -top-2 w-10 rounded-full ring-1 right-1/2 ring-blue-400 " alt="" />
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
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center my-3 ">Latest News</h2>
          <div className="grid gap-6">
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



      <section className="py-8 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold">Pet Health Tips</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthTips.map((tip, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-800">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold">Pet Adoption Success Stories</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {adoptionStories.map((story, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-800">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </UserLayout>
  );

}