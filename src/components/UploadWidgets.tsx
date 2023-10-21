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

    /**
     * handleOnLoad
     * @description Stores the Cloudinary window instance to a ref when the widget script loads
     */

    function handleOnLoad() {
        if (!cloudinary) {
            cloudinary = window.cloudinary;
        }
        // To help improve load time of the widget on first instance, use requestIdleCallback
        // to trigger widget creation. If requestIdleCallback isn't supported, fall back to
        // setTimeout: https://caniuse.com/requestidlecallback

        function onIdle() {
            if (!widget.current) {
                widget.current = createWidget();
            }
        }

        'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
    }

    /**
     * generateSignature
     * @description Makes a request to an endpoint to sign Cloudinary parameters as part of widget creation
     */

    // function generateSignature(callback, paramsToSign) {
    //     fetch(`/api/sign-cloudinary-params`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             paramsToSign
    //         })
    //     }).then(r => r.json())
    //         .then(({ signature }) => {
    //             callback(signature)
    //         });
    // }

    /**
     * createWidget
     * @description Creates a new instance of the Cloudinary widget and stores in a ref
     */

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
                // The callback is a bit more chatty than failed or success so
                // only trigger when one of those are the case. You can additionally
                // create a separate handler such as onEvent and trigger it on
                // ever occurance
                if ((error || result.event === 'success') && typeof onUpload === 'function') {
                    onUpload(error, result, widget);
                }
            }
        );
    }

    /**
     * open
     * @description When triggered, uses the current widget instance to open the upload modal
     */

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