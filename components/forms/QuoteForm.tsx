import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'

type FormData = {
    trade: string;
    currentWebsite: 'yes' | 'no' | '';
    websiteUrl?: string;
    interest: 'new-site' | 'seo' | 'ai-receptionist' | 'all' | '';
    name: string;
    phone: string;
    email: string;
    postcode: string;
}

const TRADES = [
    "Electrician", "Plumber", "Roofer", "Builder", "Landscaper", "Other"
]

export function QuoteForm() {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const { register, handleSubmit, watch, formState: { errors, isValid }, trigger } = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            trade: '',
            currentWebsite: '',
            interest: '',
            name: '',
            phone: '',
            email: '',
            postcode: ''
        }
    })

    const formValues = watch()

    const nextStep = async () => {
        let fieldsToValidate: (keyof FormData)[] = []
        if (step === 1) fieldsToValidate = ['trade']
        if (step === 2) fieldsToValidate = ['currentWebsite']
        if (step === 3) fieldsToValidate = ['interest']

        const isStepValid = await trigger(fieldsToValidate)
        if (isStepValid) setStep(s => s + 1)
    }

    const prevStep = () => setStep(s => s - 1)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        setErrorMsg('')

        try {
            const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL
            if (!webhookUrl) throw new Error('Webhook URL not configured.')

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    source: 'Multi-Step Quote Form',
                    ...data,
                    timestamp: new Date().toISOString()
                })
            })

            if (!response.ok) throw new Error('Failed to submit form')

            setIsSuccess(true)
        } catch {
            setErrorMsg('Something went wrong. Please try calling us instead.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-brand-slate/10 text-center max-w-2xl mx-auto">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-dark mb-4">Got it, {formValues.name}!</h3>
                <p className="text-xl text-brand-slate mb-8">
                    We'll give you a bell on {formValues.phone} shortly to discuss your {formValues.trade.toLowerCase()} business.
                </p>
                <Button asChild className="bg-brand-dark text-white">
                    <a href="/">Return Home</a>
                </Button>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-brand-slate/10 overflow-hidden max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="bg-brand-cream h-2 w-full">
                <div
                    className="h-full bg-brand-amber transition-all duration-300 ease-out"
                    style={{ width: `${(step / 4) * 100}%` }}
                />
            </div>

            <div className="p-8 md:p-12">
                <div className="mb-8">
                    <span className="text-sm font-bold text-brand-slate/60 uppercase tracking-wider">Step {step} of 4</span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Step 1: Trade */}
                    {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-6">What's your trade?</h2>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {TRADES.map(trade => (
                                    <label
                                        key={trade}
                                        className={`
                      cursor-pointer border-2 rounded-xl p-4 text-center transition-all
                      ${formValues.trade === trade
                                                ? 'border-brand-amber bg-brand-amber/5 text-brand-dark font-bold'
                                                : 'border-brand-slate/20 hover:border-brand-amber/50 text-brand-slate'
                                            }
                    `}
                                    >
                                        <input
                                            type="radio"
                                            value={trade}
                                            className="hidden"
                                            {...register('trade', { required: 'Please select your trade' })}
                                        />
                                        {trade}
                                    </label>
                                ))}
                            </div>
                            {errors.trade && <p role="alert" className="text-red-500 text-sm mb-4">{errors.trade.message}</p>}
                            <Button
                                type="button"
                                onClick={nextStep}
                                disabled={!formValues.trade}
                                className="w-full h-14 text-lg bg-brand-dark text-white hover:bg-slate-800"
                            >
                                Next Step <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    )}

                    {/* Step 2: Current Website */}
                    {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-6">Do you already have a website?</h2>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <label className={`cursor-pointer border-2 rounded-xl p-6 text-center transition-all ${formValues.currentWebsite === 'yes' ? 'border-brand-amber bg-brand-amber/5 text-brand-dark font-bold' : 'border-brand-slate/20 text-brand-slate hover:border-brand-amber/50'}`}>
                                    <input type="radio" value="yes" className="hidden" {...register('currentWebsite', { required: true })} />
                                    <span className="text-xl">Yes</span>
                                </label>
                                <label className={`cursor-pointer border-2 rounded-xl p-6 text-center transition-all ${formValues.currentWebsite === 'no' ? 'border-brand-amber bg-brand-amber/5 text-brand-dark font-bold' : 'border-brand-slate/20 text-brand-slate hover:border-brand-amber/50'}`}>
                                    <input type="radio" value="no" className="hidden" {...register('currentWebsite', { required: true })} />
                                    <span className="text-xl">No</span>
                                </label>
                            </div>

                            {formValues.currentWebsite === 'yes' && (
                                <div className="mb-8 animate-in fade-in slide-in-from-top-4">
                                    <label className="block text-sm font-bold text-brand-dark mb-2">What's the current web address?</label>
                                    <input
                                        type="url"
                                        placeholder="e.g. www.mybiz.co.uk"
                                        className="w-full p-4 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber focus:ring-0 outline-none"
                                        {...register('websiteUrl')}
                                    />
                                </div>
                            )}

                            <div className="flex gap-4">
                                <Button type="button" onClick={prevStep} variant="outline" className="h-14 px-6 border-2">
                                    <ChevronLeft className="mr-2 h-5 w-5" /> Back
                                </Button>
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!formValues.currentWebsite}
                                    className="flex-1 h-14 text-lg bg-brand-dark text-white hover:bg-slate-800"
                                >
                                    Next Step <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Interest */}
                    {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-6">What are you looking for most?</h2>
                            <div className="grid gap-3 mb-8">
                                {[
                                    { id: 'new-site', label: 'A new website (or redesign)' },
                                    { id: 'seo', label: 'Better Google rankings (SEO)' },
                                    { id: 'ai-receptionist', label: 'AI Receptionist / Chatbot' },
                                    { id: 'all', label: 'The Full Works (Site, SEO, AI)' }
                                ].map(option => (
                                    <label
                                        key={option.id}
                                        className={`
                      cursor-pointer border-2 rounded-xl p-4 transition-all flex items-center gap-4
                      ${formValues.interest === option.id
                                                ? 'border-brand-amber bg-brand-amber/5 text-brand-dark font-bold'
                                                : 'border-brand-slate/20 hover:border-brand-amber/50 text-brand-slate'
                                            }
                    `}
                                    >
                                        <input
                                            type="radio"
                                            value={option.id}
                                            className="hidden"
                                            {...register('interest', { required: true })}
                                        />
                                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${formValues.interest === option.id ? 'border-brand-amber' : 'border-brand-slate/30'}`}>
                                            {formValues.interest === option.id && <div className="h-2.5 w-2.5 rounded-full bg-brand-amber" />}
                                        </div>
                                        {option.label}
                                    </label>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Button type="button" onClick={prevStep} variant="outline" className="h-14 px-6 border-2">
                                    <ChevronLeft className="mr-2 h-5 w-5" /> Back
                                </Button>
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!formValues.interest}
                                    className="flex-1 h-14 text-lg bg-brand-dark text-white hover:bg-slate-800"
                                >
                                    Last Step <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Contact Details */}
                    {step === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-6">Where should we send the quote?</h2>
                            <div className="space-y-4 mb-8">

                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-1">Your Name *</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <p role="alert" className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-1">Mobile Number *</label>
                                    <input
                                        type="tel"
                                        className="w-full p-4 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                                        {...register('phone', { required: 'Phone number is required' })}
                                    />
                                    {errors.phone && <p role="alert" className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-1">Email Address (optional)</label>
                                    <input
                                        type="email"
                                        className="w-full p-4 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                                        {...register('email')}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-brand-dark mb-1">Postcode (to check area)</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                                        {...register('postcode')}
                                    />
                                </div>

                            </div>

                            {errorMsg && (
                                <div role="alert" className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm border border-red-200">
                                    {errorMsg}
                                </div>
                            )}

                            <div className="flex gap-4">
                                <Button type="button" onClick={prevStep} variant="outline" className="h-14 px-6 border-2 hidden sm:flex" disabled={isSubmitting}>
                                    <ChevronLeft className="mr-2 h-5 w-5" /> Back
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={!isValid || isSubmitting}
                                    className="flex-1 h-14 text-lg bg-brand-amber text-brand-dark hover:bg-brand-amber-hover font-bold shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                                    ) : (
                                        'Get My Free Quote'
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    )}

                </form>
            </div>
        </div>
    )
}
