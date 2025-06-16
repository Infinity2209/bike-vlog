export default function Head() {
    return (
        <>
            <title>My Web Application</title>
            <meta name="description" content="A web application with animations and effects" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="index, follow" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#317EFB" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "My Web Application",
                        "url": "https://yourdomain.com",
                    }),
                }}
            />
        </>
    );
}
