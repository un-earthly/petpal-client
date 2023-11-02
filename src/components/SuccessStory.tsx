import React from 'react';
interface Props {
    imageSrc?: string
    text: string
    name?: string
}
function SuccessStory({ imageSrc ="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg", text, name="luna" }: Props) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="max-w-sm mx-auto text-center">
                    <img
                        src={imageSrc}
                        alt="Profile"
                        className="inline-block w-40 h-40 rounded object-cover text-gray-400 mb-8"
                    />
                    <p className="leading-relaxed text-lg">{text}</p>
                    <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-8 mb-6"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        {name}
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default SuccessStory;
