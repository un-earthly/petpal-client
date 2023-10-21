import Script from 'next/script';
import { useEffect, useRef } from "react";

let cloudinary: any;

const UploadWidget = ({ children, onUpload }: any) => {
    const widget = useRef<any>();

    useEffect(() => {

        return () => {
            widget.current?.destroy();
            widget.current = undefined;
        }
    }, [])


    function handleOnLoad() {
        if (!cloudinary) {
            cloudinary = window.cloudinary;
        }
        function onIdle() {
            if (!widget.current) {
                widget.current = createWidget();
            }
        }

        'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
    }

    function createWidget() {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

        if (!cloudName || !apiKey) {
            console.warn(`Kindly ensure you have the cloudName and apiKey 
      setup in your .env file at the root of your project.`)
        }

        const options = {
            cloudName,
            apiKey,
            uploadPreset: "uan8emz8"
        }
        console.log(cloudinary)
        return cloudinary?.createUploadWidget(options,
            function (error: any, result: any) {
                if ((error || result.event === 'success') && typeof onUpload === 'function') {
                    onUpload(error, result, widget);
                }
            }
        );
    }
    function open() {
        if (!widget.current) {
            widget.current = createWidget();
        }

        widget.current && widget.current.open();
    }

    return (
        <>
            {children({ cloudinary, widget, open })}
            <Script id="cloudinary" src="https://widget.cloudinary.com/v2.0/global/all.js" onLoad={handleOnLoad} />
        </>
    )
}

export default UploadWidget;