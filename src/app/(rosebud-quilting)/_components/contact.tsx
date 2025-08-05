import ContactForm from '@/app/_components/contact_form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactSection() {
    return (  
        <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-3xl sm:text-4xl font-bold text-center">
                            Contact Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}