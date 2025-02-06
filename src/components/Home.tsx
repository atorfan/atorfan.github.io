import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-16 flex items-center justify-center" // Added pt-16 for header spacing
        >
            {/* Rest of the component remains the same */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>
                <p className="text-lg text-gray-700 mb-4">
                    I'm a passionate Software Engineer with more expertise in modern
                    backend technologies. A product and goal oriented software engineer,
                    my goal is to create scalable and maintainable applications to
                    accomplish business objectives and applying best practices but also
                    I'm a very pragmatic engineer.
                </p>
                <h3 className="text-2xl font-semibold mt-10 mb-2 text-blue-500">
                    Values and principles
                </h3>
                <p>
                    I believe in eXtreme Programming values and principles promoting
                    continuous feedback cycles, improving the communication, making the
                    things simpler while we have fun taking products to the next level
                    together.
                </p>
                <p className="mt-5">
                    That's why I like pair programming (or mob programming if needed),
                    delivering in small increments moving forward in small steps,
                    practicing TDD to break down big problems into smaller ones and allow
                    to put focus on each one.
                </p>
                <h3 className="text-2xl font-semibold mt-10 mb-2 text-blue-500">
                    Architecture and Design Principles
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Clean Architectures</li>
                    <li>Testing strategies (unit, integration, acceptance)</li>
                    <li>Scale with Event Driven Architectures</li>
                    <li>Domain Driven Design</li>
                </ul>
                <h3 className="text-2xl font-semibold mt-10 mb-2 text-blue-500">
                    Main Technologies&nbsp;
                    <span className="text-xs">(with which I have more experience)</span>
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Java / Kotlin for Backend</li>
                    <li>Widely use of Spring Boot</li>
                    <li>Design and implement REST APIs</li>
                    <li>Relational databases (MySQL, PostgresSQL)</li>
                    <li>Testing with JUnit and Kotest</li>
                    <li>Mocking frameworks with Mockito and Mockk</li>
                    <li>Containerization with Docker</li>
                    <li>Testcontainers for Integration Testing</li>
                    <li>DB Migrations with Flyway and Liquibase</li>
                    <li>
                        <span>Asynchronous communication</span>
                        <ul className="list-disc ml-10 text-gray-700">
                            <li>AWS SNS and SQS</li>
                            <li>Kafka and Kafka Streams</li>
                        </ul>
                    </li>
                </ul>
                <h3 className="text-2xl font-semibold mt-10 mb-2 text-blue-500">
                    Other Languages and Technologies used
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>PHP 7+</li>
                    <li>JavaScript / TypeScript</li>
                    <li>Python</li>
                    <li>Symfony</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                </ul>
            </div>
        </motion.section>
    );
};

export default Home;