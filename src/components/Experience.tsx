import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {

    const experiences = [
        {
            id: 5,
            title: 'Senior Software Engineer',
            company: 'IFCO Systems',
            period: {
                from: 'Jan 2025',
                to: 'Present',
            },
            description: '',
        },
        {
            id: 4,
            title: 'Senior Software Engineer',
            company: 'Holaluz',
            period: {
                from: 'Mar 2022',
                to: 'Dec 2024',
            },
            description: '',
        },
        {
            id: 3,
            title: 'Senior Software Engineer',
            company: 'RedPoints Solutions',
            period: {
                from: 'Jan 2018',
                to: 'Mar 2022',
            },
            description: '',
        },
        {
            id: 2,
            title: 'Software Engineer',
            company: 'Mango online',
            period: {
                from: 'Mar 2014',
                to: 'Dec 2017',
            },
            description: '',
        },
        {
            id: 1,
            title: 'Junior Software Engineer',
            company: 'Dreivip.com',
            period: {
                from: 'May 2008',
                to: 'Oct 2014',
            },
            description: '',
        },
    ];

    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-16 flex items-center justify-center bg-gray-50 py-16" // Added pt-16 for header spacing
        >
            {/* Rest of the component remains the same */}
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">
                    My Experience
                </h2>
                <div className="container mt-10 mb-10">
                    For detailed information about my experience, check&nbsp;
                    <a
                        className="underline text-blue-600 decoration-blue-600 underline-offset-2"
                        href="https://www.linkedin.com/in/alejandrotorresfandino/"
                    >
                        my LinkedIn
                    </a>
                </div>
                <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-200"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-12 relative"
                        >
                            <div
                                className="absolute -left-11 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                                style={{ left: '-1.35rem' }}
                            >
                                <Briefcase className="text-white" size={14} />
                            </div>

                            <div
                                className="absolute -left-40 top-0 w-28 text-right"
                                style={{ left: '-1.35rem', top: '35%' }}
                            >
                                <p className="text-sm font-medium text-blue-500">
                                    {exp.period.from} -
                                </p>
                                <p className="text-sm font-medium text-blue-500">
                                    {exp.period.to}
                                </p>
                            </div>

                            <div
                                className="bg-white p-6 rounded-lg shadow-md ml-6"
                                style={{ marginLeft: '7.5rem' }}
                            >
                                <h3 className="text-xl font-semibold text-blue-500 mb-1">
                                    {exp.title}
                                </h3>
                                <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
