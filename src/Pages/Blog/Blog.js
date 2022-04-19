import React from 'react';

const Blog = () => {
    return (
        <div  className='container'>
            <h1 className='mb-5 mt-5 bg-dark text-white p-3  rounded'>There are some question and answer are given here ...</h1>
            <div className='bg-secondary p-3 rounded mb-2 '>
                <h3> Q: Difference between authorization and authentication ?</h3>
                <p> Ans: Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an equivalent context with an equivalent tool, they’re utterly distinct from one another.

                  In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, persons or users authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.</p>

            </div>
            <div className='bg-secondary p-3 mb-2 rounded'>
                <h3> Q: Why I am using firebase ? </h3>
                <p> Ans:First off, it's important to remember that we have a few completely free services, like Authentication, and Cloud or In-App Messaging. These services, although often missed, boost Firebase's already tremendous value by a fair bit. You get them completely free no matter the plan, so if you'd use only those few services, you might get away with paying nothing.

Secondly, the cost for services like Firestore, Realtime Database (RTDB), and Cloud Functions depends heavily on your usage.

The first two serve the same purpose (realtime database), with Firestore being newer and coming with some additional perks. However, differences in storage models aside, it's the pricing that matters the most. Firestore can handle more concurrent connections and writes per second, but additionally, apart from "usual" storage and data transfer costs, it charges for the number of reads and writes. RTDB on the other hand can handle a bit less (with low free plan limitation of only 100 concurrent connections presumably for the initial push to using Firestore), and charges only for the stored data and GB transferred (only a bit higher than Firestore). Thus, depending on your use-cases and scalability requirements, you might be better off going with the older RTDB than the shiny new Firestore.

The same goes for Cloud Functions - the pricing depends heavily on your usage. With some initial planning, you might be able to pay less, while not missing out on functionality.

And lastly, some Firebase products like Hosting can still be replaced by other services, while still using the other Firebase products. In this case, the first service that comes to mind is Vercel, which might allow you to pay nothing, but again - depending on your use-cases.</p>

<h3>Q: What are the other option for the authentication </h3>
<p>Ans: Auth0, MongoDB, Passport, Okta these are the alternative way to autgetication instead of firebase .</p>
            </div>


            <div className='bg-secondary mb-2 p-3 rounded'>
                <h3> Q:What other service does firebase provide other than authentication ?</h3>
                <p>Ans:Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. </p>
            </div>
        </div>
    );
};

export default Blog;