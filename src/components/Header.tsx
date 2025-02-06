import { motion } from 'framer-motion';
import HeaderIcon from "./HeaderIcon.tsx";
import { Briefcase, Mail, GraduationCap, Home } from 'lucide-react';

const Header = () => {

    const headerItems = [
        {id: "home", label: "Home", icon: Home},
        {id: "experience", label: "Experience", icon: Briefcase},
        {id: "education", label: "Education", icon: GraduationCap},
        {id: "contact", label: "Contact", icon: Mail},
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <nav className="container mx-auto px-6 py-3">
                <ul className="flex justify-center space-x-6">
                    {headerItems.map((headerItem) => (
                        <motion.li key={headerItem.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <button onClick={() => scrollToSection(`${headerItem.id}`)} className="flex items-center text-gray-700 hover:text-blue-500">
                                <HeaderIcon
                                    id={headerItem.id}
                                    iconComponent={headerItem.icon}
                                    scrollToSection={scrollToSection}
                                    label={headerItem.label}
                                />
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;