import { motion } from 'framer-motion';

const Education = () => {

    const education = [
        { id: 2, title: 'CFGS DAI - Desarrollo de Aplicaciones Informáticas (Development of Computer Applications)', description: 'September 2006 - June 2008' },
        { id: 1, title: 'Bachillerato Científico Tecnológico (Scientific and Technological Baccalaureate)', description: 'September 2004 - June 2006' },
    ];

    const courses = [
        { id: 2, title: 'CFGS DAI - Desarrollo de Aplicaciones Informáticas (Development of Computer Applications)', description: 'September 2006 - June 2008' },
        { id: 1, title: 'Bachillerato Científico Tecnológico (Scientific and Technological Baccalaureate)', description: 'September 2004 - June 2006' },
    ];

    return (
        <motion.section
            id="education"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
        >
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-6 py-8">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {education.map((educationItem) => (
                            <motion.div
                                key={educationItem.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-blue-500">{educationItem.title}</h3>
                                <p className="text-gray-600">{educationItem.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-6 py-8">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600">Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <motion.div
                                key={course.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-blue-500">{course.title}</h3>
                                <p className="text-gray-600">{course.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Education;