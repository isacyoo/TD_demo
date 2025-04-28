import ALink from "@/components/common/ALink"

export const accordionContent = [
    { title: "How does the system work?", content: <div className="flex flex-col gap-4 text-sm text-primary/80 font-light">
        <p>The system uses custom Deep Learning Computer Vision algorithms to analyse video clips created upon entries.</p>
        <p>The video clips are created, processed and analysed asynchronously by leveraging the AWS infrastructure.</p>
        <p>To see the overall architecture of the system, please visit <ALink href="/architecture">Architecture</ALink></p>
    </div> },
    { title: "Have you got an API reference?", content: <div className="flex flex-col gap-4 text-sm text-primary/80 font-light">
        <p>Yes! We do have API reference, which you can find <ALink href="/api-reference">here</ALink>. In order to try out the APIs:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>First create a demo environment using <ALink href="/demo">Demo</ALink> page</li>
            <li>Go to <strong>{"<DEMO_URL>/settings/api"}</strong> and issue a new API key</li>
            <li>You will be given a Bearer token, which you can use with API clients like cURL and Postman</li>
        </ol>
    </div> },
    { title: "Could you explain some of the jargons?", content: <div className="flex flex-col gap-4 text-sm text-primary/80 font-light">
        <p>Sure! Here are some of the jargons used in the system:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Tailgating:</strong> A security breach where an unauthorized person {"(regardless of whether they are legitimate member or employee)"} follows an authorized person into a restricted area.</li>
            <li><strong>Location:</strong>  A specific area or place where the system is deployed, such as a building or facility. For instance, if a facility has multiple entrances, each entrance becomes a location.</li>
            <li><strong>Video:</strong> A video clip of a member and potentially a tailgator entering the facility.</li>
            <li><strong>Entry:</strong> A collection of videos when a person enters the facility. A member scanning their access card will create an entry. The number of videos in an entry will be equal to the number of cameras associated with the location.</li>
            <li><strong>Event:</strong> A collection of entries. The number of entries in an event will be equal to the number of people who scanned their card. An event will be marked as tailgating if the number of people detected exceeds the number of people scanned in an event. </li>
        </ul>
    </div> },
    { title: "Is there a demo I can try?", content: <div className="flex flex-col gap-4 text-sm text-primary/80 font-light">
        <p>Yes! You can try out the demo by clicking on the <ALink href="/demo">Demo</ALink> page. The demo is a fully functional version of the system, but you will be required to present an access key to create a demo environment.</p>
        <p>Hwan should have provided you with the access key {"(which also means you are an awesome human being)"}, so feel free to play around with it. It will be available for an hour, but you can always create a new one if you liked it!</p>
    </div> }
]