import React, { useState } from 'react';

const NewsletterSubscription = () => {
    const [email, setEmail]= useState("")
    function finish() {
        if (!email) {
            alert("Please enter a valid email address...");
          } else {
            alert("🎉 Thank you for subscribing to us...! 📨");
          }
    }

    return (
        <div className="newsletter py-10 px-6 bg-[#7AA93C] text-white rounded-md text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Get the latest updates delivered straight to your inbox.</p>
            <input
                type="email"
                placeholder="Enter your email"
                className="p-4 rounded-md w-full md:w-1/2 border-none mb-4 text-[#262626]"
                onChange={(e)=> setEmail(e.target.value)}
            />
            <br />
            <button
                onClick={finish}
                className="bg-white text-[#7AA93C] px-6 py-3 rounded-md font-semibold hover:bg-[#262626]">
                Subscribe
            </button>
            
        </div>
    );
};

export default NewsletterSubscription;
