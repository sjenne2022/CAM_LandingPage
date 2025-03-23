'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { gsap } from 'gsap';


interface SubscribeModalProps {
modalState: 'closed' | 'opening' | 'visible' | 'closing';
setModalState: (state: 'closed' | 'opening' | 'visible' | 'closing') => void;
}

type MultiChoiceKey = 'q2' | 'q4' | 'q6';

type FormData = {
email: string;
q1: string;
q2: string[];
q3: string;
q4: string[];
q5: string;
q6: string[];
q2Other?: string;
q4Other?: string;
q6Other?: string;
};

type LanguageCode = 'en' | 'es' | 'twi' | 'pidgin';

const sanitizeInput = (input: string): string => {
return input.trim().replace(/<[^>]*>?/gm, '').slice(0, 500);
};

const validateEmail = (email: string): boolean => {
// Simple regex to check for valid email format.
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
};

const multipleChoiceOptions: Record<MultiChoiceKey, string[]> = {
q2: ['Fashion', 'Art & Decor', 'Beauty Products', 'Food & Spices', 'Books', 'Music'],
q4: ['Cultural Connection', 'Curiosity', 'Uniqueness', 'Quality', 'Support Local Economies'],
q6: ['Shipping Cost', 'Product Authenticity', 'Website Trust', 'Lack of Variety', 'Price'],
};

const formFieldKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

const translations: Record<LanguageCode, Record<string, string>> = {
en: {
    heading: 'Stay informed by filling out the form!',
    thankYouTitle: '🎉 Thank you!',
    thankYouMsg: 'We appreciate your input. We’ll be in touch soon!',
    exit: 'Exit without submitting',
    submit: 'Submit Answers',
    submitting: 'Submitting...',
    emailPlaceholder: 'Your email address',
    textPlaceholder: 'Type your answer here...',
    otherPlaceholder: 'Please specify...',
    q1: 'Have you ever tried to buy African products online while living in the US or Europe? What was that like?',
    q2: 'What kinds of African products would you be excited to buy online? (Select all that apply)',
    q3: 'Where do you usually go to find African products now? Is there anything missing or frustrating about those options?',
    q4: 'Why are African products important or interesting to you? (Select all that apply)',
    q5: 'What would make you trust a new online store selling African products?',
    q6: 'What might stop you from buying African products online? (Select all that apply)',
    other: 'Other',
},
es: { /* ... */ },
twi: { /* ... */ },
pidgin: { /* ... */ },
};

export default function SubscribeModal({ modalState, setModalState }: SubscribeModalProps) {
const modalRef = useRef<HTMLDivElement | null>(null);
const modalWrapperRef = useRef<HTMLDivElement | null>(null);
const [language, setLanguage] = useState<LanguageCode>('en');
const t = translations[language];

const [formData, setFormData] = useState<FormData>({
    email: '',
    q1: '',
    q2: [],
    q3: '',
    q4: [],
    q5: '',
    q6: [],
    q2Other: '',
    q4Other: '',
    q6Other: '',
});

// Dynamic error messages state.
const [errors, setErrors] = useState<{ email?: string }>({});

const [isSubmitting, setIsSubmitting] = useState(false);
const isMounted = modalState !== 'closed';
const isVisible = modalState === 'visible';
const [showThankYou, setShowThankYou] = useState(false);

// Record the time when the form is rendered.
const [formStartTime, setFormStartTime] = useState<number>(Date.now());

// Update formStartTime when the modal is opened.
useEffect(() => {
    if (isMounted) {
    setFormStartTime(Date.now());
    }
}, [isMounted]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
    const { checked } = e.target as HTMLInputElement;
    setFormData((prev) => {
        const current = new Set(prev[name as keyof FormData] as string[]);
        if (checked) {
        current.add(value);
        } else {
        current.delete(value);
        }
        return { ...prev, [name]: Array.from(current) };
    });
    } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
    }
};

const validateEmailField = () => {
    if (!formData.email) {
    setErrors((prev) => ({ ...prev, email: 'Email is required.' }));
    } else if (!validateEmail(formData.email)) {
    setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
    } else {
    // Remove email error if valid.
    setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
    });
    }
};

const getOtherValue = (key: keyof Pick<FormData, 'q2' | 'q4' | 'q6'>): string => {
    const otherKey = `${key}Other` as keyof FormData;
    return (formData[otherKey] as string) || '';
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    // Time-based check: block if submitted too quickly (less than 3 seconds).
    if (Date.now() - formStartTime < 3000) {
    console.warn('Bot submission blocked due to fast form submission.');
    setIsSubmitting(false);
    return;
    }

    // Check multiple honeypot fields.
    const orgReference = (formElement.elements.namedItem('org_reference') as HTMLInputElement)?.value;
    const hpExtra = (formElement.elements.namedItem('hp_extra') as HTMLInputElement)?.value;

    if (orgReference?.trim() || hpExtra?.trim()) {
    console.warn('Bot submission blocked by honeypot.');
    setIsSubmitting(false);
    return;
    }

    // Validate email before proceeding.
    if (!formData.email || !validateEmail(formData.email)) {
    validateEmailField();
    setIsSubmitting(false);
    return;
    }

    setIsSubmitting(true);

    const getFinalAnswer = (key: 'q2' | 'q4' | 'q6') => {
    const base = formData[key] || [];
    const other = formData[`${key}Other`] ?? '';
    return base.includes(t.other) && other ? [...base.filter((v) => v !== t.other), other] : base;
    };

    const submissionData = {
    email: sanitizeInput(formData.email),
    q1: sanitizeInput(formData.q1),
    q2: getFinalAnswer('q2').map(sanitizeInput),
    q3: sanitizeInput(formData.q3),
    q4: getFinalAnswer('q4').map(sanitizeInput),
    q5: sanitizeInput(formData.q5),
    q6: getFinalAnswer('q6').map(sanitizeInput),
    };

    await new Promise((res) => setTimeout(res, 1000));
    console.log('Submitted data:', submissionData);
    setIsSubmitting(false);
    setShowThankYou(true);
};

useEffect(() => {
    if (!modalWrapperRef.current) return;
    if (modalState === 'opening') {
    gsap.fromTo(
        modalWrapperRef.current,
        { x: 0, y: 20, scale: 0.98, opacity: 0.8 },
        {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'power3.out',
            force3D: true
        }
    );                 
    } else if (modalState === 'closing') {
    gsap.to(modalWrapperRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -30,
        duration: 0.2,
        ease: 'back.in(1.2)',
        force3D: true,
        onComplete: () => setModalState('closed'),
    });
    }
}, [modalState, setModalState]);

useEffect(() => {
    if (!modalWrapperRef.current || !isVisible) return;
    gsap.fromTo(
    modalWrapperRef.current,
    { y: 10, opacity: 0.9 },
    { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' }
    );
}, [isVisible]);

useEffect(() => {
    document.body.style.overflow = isMounted ? 'hidden' : '';
    return () => {
    document.body.style.overflow = '';
    };
}, [isMounted]);

useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalState('closing');
    }
    };
    if (isMounted) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isMounted, setModalState]);

if (!isMounted) return null;

return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 pb-8 overflow-y-auto">
    <div
        ref={modalWrapperRef}
        style={{ willChange: 'transform' }}
        className="relative w-full max-w-2xl bg-white p-6 sm:p-8 shadow-xl rounded-2xl my-12 sm:my-16 transform-gpu"
    >
        <div className="flex justify-between items-center mb-4">
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as LanguageCode)}
            className="text-sm border text-black border-gray-300 rounded px-2 py-1"
        >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="twi">Twi</option>
            <option value="pidgin">Pidgin</option>
        </select>
        <button
            onClick={() => setModalState('closing')}
            className="text-gray-500 transition-transform duration-200 hover:rotate-90 hover:text-black"
        >
            <X className="h-5 w-5" />
        </button>
        </div>

        <h2 className="mb-6 text-left text-md sm:text-xl md:text-3xl font-semibold text-gray-800 leading-tight">
            {t.heading}
        </h2>

        {showThankYou ? (
        <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">{t.thankYouTitle}</h3>
            <p className="text-gray-700 text-lg">{t.thankYouMsg}</p>
        </div>
        ) : (
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Honeypot fields (hidden and inaccessible to real users) */}
            <input
            type="text"
            name="org_reference"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            />
            <input
            type="text"
            name="hp_extra"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            />
            <div>
            <input
                type="email"
                name="email"
                maxLength={100}
                placeholder={t.emailPlaceholder}
                onChange={handleChange}
                onBlur={validateEmailField}
                value={formData.email}
                className={`w-full rounded-lg border px-4 py-2 text-sm text-black ${
                errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:outline-none`}
            />
            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            </div>

            {formFieldKeys.map((key, index) => (
            <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                {index + 1}. {t[key]}
                </label>

                {Array.isArray(formData[key]) ? (
                <div className="mt-2 space-y-2">
                    {multipleChoiceOptions[key as keyof typeof multipleChoiceOptions]?.map((option) => (
                    <div key={option} className="flex items-center">
                        <input
                        type="checkbox"
                        id={`${key}-${option}`}
                        name={key}
                        value={option}
                        checked={(formData[key] as string[]).includes(option)}
                        onChange={handleChange}
                        className="mr-2"
                        />
                        <label htmlFor={`${key}-${option}`} className="text-sm text-gray-700">
                        {option}
                        </label>
                    </div>
                    ))}
                    <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        id={`${key}-other`}
                        name={key}
                        value={t.other}
                        checked={(formData[key] as string[]).includes(t.other)}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor={`${key}-other`} className="text-sm text-gray-700">
                        {t.other}
                    </label>
                    </div>
                    {(formData[key] as string[]).includes(t.other) && (
                    <input
                        type="text"
                        name={`${key}Other`}
                        maxLength={250}
                        placeholder={t.otherPlaceholder}
                        value={getOtherValue(key as keyof typeof multipleChoiceOptions)}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:border-blue-500 focus:outline-none"
                    />
                    )}
                </div>
                ) : (
                <textarea
                    id={key}
                    name={key}
                    placeholder={t.textPlaceholder}
                    maxLength={500}
                    rows={3}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black focus:border-blue-500 focus:outline-none"
                    value={formData[key]}
                    onChange={handleChange}
                />
                )}
            </div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <button
                type="button"
                onClick={() => setModalState('closing')}
                className="w-full sm:w-auto rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-transform duration-200 hover:scale-105"
            >
                {t.exit}
            </button>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto rounded-lg px-4 py-2 text-white transition ${
                isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                    </svg>
                    {t.submitting}
                </div>
                ) : (
                t.submit
                )}
            </button>
            </div>
        </form>
        )}
    </div>
    </div>,
    document.body
);
}
