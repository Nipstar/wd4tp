import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle2 } from 'lucide-react'

type ContactFormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
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
                    source: 'General Contact Form',
                    ...data,
                    timestamp: new Date().toISOString()
                })
            })

            if (!response.ok) throw new Error('Failed to submit form')

            setIsSuccess(true)
        } catch {
            setErrorMsg('Something went wrong. Please try calling or emailing us directly instead.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-brand-cream border border-brand-slate/10 p-8 rounded-2xl text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">Message Sent</h3>
                <p className="text-brand-slate">Thanks for getting in touch. We'll get back to you shortly.</p>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-brand-slate/10 p-6 md:p-8">
            <h3 className="text-2xl font-display font-bold text-brand-dark mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <label className="block text-sm font-bold text-brand-dark mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p role="alert" className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold text-brand-dark mb-1">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full p-3 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                        {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && <p role="alert" className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold text-brand-dark mb-1">Email <span className="font-normal text-brand-slate/60">(optional)</span></label>
                    <input
                        type="email"
                        className="w-full p-3 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none"
                        {...register('email')}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-brand-dark mb-1">How can we help?</label>
                    <textarea
                        rows={4}
                        className="w-full p-3 border-2 border-brand-slate/20 rounded-xl focus:border-brand-amber outline-none resize-none"
                        {...register('message', { required: 'Please leave a brief message' })}
                    />
                    {errors.message && <p role="alert" className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                {errorMsg && (
                    <div role="alert" className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">
                        {errorMsg}
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-lg bg-brand-dark text-white hover:bg-slate-800 font-bold"
                >
                    {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                        'Send Message'
                    )}
                </Button>
            </form>
        </div>
    )
}
