import Image from "next/image";

export default function Home() {
  return (
    <main>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            FasChat - Chat with your friends and more!
          </h1>
          <p className="text-2xl text-gray-400 mb-10">
            Welcome to FasChat, the fun and easy way to connect with your
            friends and family. <br />
            Stay in touch, share stories and laughs, and create lasting memories
            all in one place.
          </p>
          {/* <a href="#github" className="bg-gray-700 hover:bg-indigo-400 text-white font-bold py-3 px-6 rounded-lg mr-4">
            View on Github </a>
          <a href="#learn-more" className="bg-gray-700 hover:bg-indigo-400 text-white font-bold py-3 px-6 rounded-lg" >
            Start Chatting </a> */}

            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View on Github</a>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">Start Chatting</button>
            

          {/* <div className="mt-12">
            <img
              src="placeholder-chat-image.png"
              alt="FasChat Screenshot"
              className="mx-auto rounded-lg shadow-lg"
              width="600"
            />
          </div> */}
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-300 px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Fast & Reliable
              </h3>
              <p className="text-gray-700">
                Experience lightning-fast messaging with our optimized servers.
                Say goodbye to lag and hello to instant communication.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-700">
                Your conversations are encrypted end-to-end, ensuring your
                privacy. We take your security seriously.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Group Chat
              </h3>
              <p className="text-gray-700">
                Stay connected with friends, family, or colleagues in group
                chats. Share updates, plan events, and more.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Cross-Platform
              </h3>
              <p className="text-gray-700">
                Available on iOS, Android, Windows, and macOS. Chat seamlessly
                across all your devices.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                File Sharing
              </h3>
              <p className="text-gray-700">
                Share photos, videos, documents, and other files with ease. No
                more email attachments!
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Customizable Notifications
              </h3>
              <p className="text-gray-700">
                Control your notifications. Choose which chats to be notified
                about and customize your alert sounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-slate-200 px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Pricing</h2>
          <p className="text-xl text-gray-700 mb-8">
            Choose the plan that's right for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Free
              </h3>
              <p className="text-gray-700 mb-6">
                Perfect for individuals and small groups.
              </p>
              <ul className="list-disc text-gray-700 mb-6 ml-6">
                <li>Unlimited messaging</li>
                <li>Basic group chats</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">
                Sign Up
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Pro
              </h3>
              <p className="text-gray-700 mb-6">
                For larger teams and businesses.
              </p>
              <ul className="list-disc text-gray-700 mb-6 ml-6">
                <li>Everything in Free</li>
                <li>Advanced group management</li>
                <li>File sharing up to 1GB</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">
                Buy Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                Enterprise
              </h3>
              <p className="text-gray-700 mb-6">
                Custom solutions for large organizations.
              </p>
              <ul className="list-disc text-gray-700 mb-6 ml-6">
                <li>Everything in Pro</li>
                <li>Dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-16 bg-indigo-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">
            Download FasChat
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Available on all your devices.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100"
            >
              <img
                src="apple-icon.png"
                alt="Download on the App Store"
                width="150"
              />{" "}
            </a>
            <a
              href="#"
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100"
            >
              <img
                src="google-play-icon.png"
                alt="Download on Google Play"
                width="150"
              />
            </a>
            <a
              href="#"
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100"
            >
              <img
                src="windows-icon.png"
                alt="Download for Windows"
                width="150"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Home - FasChat",
  description: "FasChat helps you connect with people of your choice",
};

{
  /* <!DOCTYPE html>
<html lang="en">
<head>
    </head>
<body className="bg-gray-100">

    <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">FasChat</a>
            <div>
                <a href="#features" className="mr-4 text-gray-700 hover:text-indigo-600">Features</a>
                <a href="#pricing" className="mr-4 text-gray-700 hover:text-indigo-600">Pricing</a>
                <a href="#download" className="text-gray-700 hover:text-indigo-600">Download</a>
            </div>
        </div>
    </nav>

    <section className="bg-indigo-100 py-20">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-indigo-800 mb-6 leading-tight">Connect Instantly, Chat Effortlessly</h1>
            <p className="text-xl text-gray-700 mb-10">Experience seamless communication with FasChat. Fast, secure, and packed with features to keep you connected.</p>
            <a href="#download" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg mr-4">Download Now</a>
            <a href="#learn-more" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg">Learn More</a>

            <div className="mt-12">
                <img src="placeholder-chat-image.png" alt="FasChat Screenshot" className="mx-auto rounded-lg shadow-lg" width="600">
            </div>
        </div>
    </section>

    <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Fast & Reliable</h3>
                    <p className="text-gray-700">Experience lightning-fast messaging with our optimized servers.  Say goodbye to lag and hello to instant communication.</p>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Secure & Private</h3>
                    <p className="text-gray-700">Your conversations are encrypted end-to-end, ensuring your privacy. We take your security seriously.</p>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Group Chat</h3>
                    <p className="text-gray-700">Stay connected with friends, family, or colleagues in group chats.  Easily create groups and share updates.</p>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Cross-Platform</h3>
                    <p className="text-gray-700">Available on all your devices - iOS, Android, Web, and Desktop.  Seamlessly switch between devices.</p>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">File Sharing</h3>
                    <p className="text-gray-700">Share photos, videos, documents, and more with ease.  Quickly send and receive files of any size.</p>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Customizable</h3>
                    <p className="text-gray-700">Personalize your chat experience with custom themes and notification settings. Make FasChat your own.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">Pricing</h2>
            <p className="text-xl text-gray-700 mb-10">Choose the plan that's right for you.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Basic</h3>
                    <p className="text-5xl font-bold text-indigo-800">$0</p>
                    <p className="text-gray-700 mb-6">Free forever</p>
                    <ul className="list-disc text-gray-700 mb-6 ml-6">
                        <li>Unlimited messaging</li>
                        <li>Basic security features</li>
                    </ul>
                    <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">Sign Up</a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Premium</h3>
                    <p className="text-5xl font-bold text-indigo-800">$9.99/month</p>
                    <p className="text-gray-700 mb-6">Unlock all features</p>
                    <ul className="list-disc text-gray-700 mb-6 ml-6">
                        <li>Everything in Basic</li>
                        <li>Enhanced security</li>
                        <li>File sharing</li>
                        <li>Priority support</li>
                    </ul>
                    <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">Get Premium</a>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Enterprise</h3>
                    <p className="text-5xl font-bold text-indigo-800">Contact Us</p>
                    <p className="text-gray-700 mb-6">Custom solutions</p>
                    <ul className="list-disc text-gray-700 mb-6 ml-6">
                        <li>Dedicated support</li>
                        <li>Custom integrations</li>
                        <li>Scalable infrastructure</li>
                    </ul>
                    <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">Contact Us</a>
                </div>
            </div>
        </div>
    </section> */
}
