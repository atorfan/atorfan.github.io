import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-16 flex items-center justify-center bg-gray-50" // Added pt-16 for header spacing
        >
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Me</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                        <Mail className="mr-2 text-blue-500" />
                        <a href="mailto:alex.torfan@gmail.com">alex.torfan@gmail.com</a>
                    </div>
                    <div className="flex items-center mb-4">
                        <Phone className="mr-2 text-blue-500" />
                        <a href="tel:+34617769007">+34 617 76 90 07</a>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="mr-2 text-blue-500" />
                        <a
                            href="https://www.google.com/maps/place/Barcelona/@41.3926386,2.0577889,12z/data=!3m1!4b1!4m6!3m5!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568!16zL20vMDFmNjI"
                            target="_blank"
                        >
                            Barcelona, Spain
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;