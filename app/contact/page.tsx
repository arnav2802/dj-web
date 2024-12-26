'use client';

import React, { useState, FormEvent } from 'react';
import Image from "next/image";
import Link from "next/link";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
      <div className="min-h-screen flex flex-col">
        <div className="w-full fixed top-0 z-50 bg-black">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
              />
            </Link>
          </div>
        </div>

        <main className="flex-grow bg-black overflow-hidden pt-24 pb-4 bg-[url('/images/2.png')] bg-cover bg-center ">
          <div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="bg-transparent backdrop-blur rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="mt-1 block p-1 pl-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full p-1 pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                      Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        required
                        className="mt-1 block w-full  p-1 pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                      Comments/Questions
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        className="mt-1 block w-full p-1 pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <div className="bg-black sticky-bottom">
          <div className="bg-black max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-8">
            <p className="text-sm text-gray-400">
              Versai 2024 • All rights reserved • Versai
            </p>
            <div className="flex space-x-6">
            </div>
          </div>
        </div>

      </div>
  );
}