import UserLayout from '@/src/layout/UserLayout';
import Head from 'next/head';

const About = () => {
    return (
        <UserLayout>
            <div>
                <Head>
                    <title>About Us - Pet Pal</title>
                </Head>

                <div
                    className="bg-cover bg-center h-96"
                    style={{ backgroundImage: 'url("https://previews.123rf.com/images/orfeev/orfeev1608/orfeev160800046/64634906-pet-doodles.jpg")' }}
                >
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                        <h1 className="text-4xl text-white font-extrabold text-center">
                            About PetPal
                        </h1>
                    </div>
                </div>

                <div className="container mx-auto p-6">
                    <section className="mb-8 max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700">
                            At PetCare, we are dedicated to providing the best pet care services
                            to ensure the health and happiness of your beloved pets. We
                            understand that pets are family, and we treat them as such.
                        </p>
                    </section>
                  
                    <section className="mb-8 my-20 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <img
                                    src="https://everydaydogmagazine.com/wp-content/uploads/2020/02/dog-events-2020-1.jpg"
                                    alt="Gallery Image 1"
                                    className="rounded-lg w-full"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://www.bettercitiesforpets.com/wp-content/uploads/2018/05/waste-station-1-1024x614.jpg"
                                    alt="Gallery Image 2"
                                    className="rounded-lg w-full"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://www.rover.com/blog/wp-content/uploads/2016/07/pawsapalooze.jpg"
                                    alt="Gallery Image 3"
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 max-w-6xl my-20 mx-auto">
                        <h2 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                [1, 2, 3].map(() => {
                                    return <div className="card card-side bg-base-100 shadow-xl">
                                        <figure><img src="https://randomuser.me/api/portraits/women/27.jpg" alt="Movie" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">New movie is released!</h2>
                                            <p>Click the button to watch on Jetflix app.</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
      </UserLayout>
    );
};

export default About;
