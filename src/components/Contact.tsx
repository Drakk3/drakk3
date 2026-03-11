import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type FormState = 'idle' | 'success';

export default function Contact() {
  const [status, setStatus] = useState<FormState>('idle');
  const [isPending, startTransition] = useTransition();

  function handleSubmit(_formData: FormData) {
    startTransition(async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 900));
      setStatus('success');
    });
  }

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container max-w-275 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* Left — info */}
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase text-primary mb-4">
              Let's talk
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-tight text-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-100 mb-8">
              Have a project in mind, a question, or just want to say hi?
              My inbox is always open.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-base">📍</span>
                <span>Las Vegas, US</span>
              </div>
            </div>
          </div>

          {/* Right — shadcn form card */}
          <div className="rounded-lg border border-border bg-card p-9">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center gap-4 py-4">
                <span className="text-5xl">✅</span>
                <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for your message! I'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form action={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <Button type="submit" disabled={isPending} className="mt-1">
                  {isPending ? (
                    <>
                      <span
                        className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
