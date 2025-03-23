'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface SubscribeModalProps {
isOpen: boolean;
onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
const modalRef = useRef<HTMLDivElement | null>(null);

const [formData, setFormData] = useState({
    email: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🚀 TODO: Connect this to your API or Mailchimp handler
    console.log('Form submitted:', formData);
    onClose();
};

useEffect(() => {
    if (isOpen) {
    document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = '';
    }
    return () => {
    document.body.style.overflow = '';
    };
}, [isOpen]);

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
    }
    };

    if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    };
}, [isOpen, onClose]);

if (!isOpen) return null;

return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 overflow-y-auto py-8">
    <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
        <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 transition hover:text-black"
        aria-label="Close modal"
        >
        <X className="h-5 w-5" />
        </button>

        <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Help us shape the future of African products online 🌍
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
        <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
        />

        <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">
                1. Have you ever tried to buy African products online while living in the US or Europe? What was that like?
            </label>
            <textarea
                name="q1"
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                value={formData.q1}
                onChange={handleChange}
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">
                2. What kinds of African products would you be excited to buy online? How often do you think you’d buy them?
            </label>
            <textarea
                name="q2"
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                value={formData.q2}
                onChange={handleChange}
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">
                3. Where do you usually go to find African products now? Is there anything missing or frustrating about those options?
            </label>
            <textarea
                name="q3"
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                value={formData.q3}
                onChange={handleChange}
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">
                4. Why are African products important or interesting to you?
            </label>
            <textarea
                name="q4"
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                value={formData.q4}
                onChange={handleChange}
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">
                5. What would make you trust a new online store selling African products?
            </label>
            <textarea
                name="q5"
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                value={formData.q5}
                onChange={handleChange}
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">
                6. Is there anything that would stop you from buying African products online?
            </label>
            <textarea
                name="q6"
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                value={formData.q6}
                onChange={handleChange}
            />
            </div>
        </div>

        <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
            Submit Answers
        </button>
        </form>
    </div>
    </div>,
    document.body
);
}
