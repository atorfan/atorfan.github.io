import { motion } from 'framer-motion';
import {LucideIcon} from "lucide-react";
import {createElement} from "react";

interface HeaderIconProps {
    id: string,
    iconComponent: LucideIcon,
    label: string,
    scrollToSection: (id: string) => void /* eslint-disable-line no-unused-vars */
}

const HeaderIcon = (props: HeaderIconProps) => {
    return (
        <motion.li key={props.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button onClick={() => props.scrollToSection(`${props.id}`)} className="flex items-center text-gray-700 hover:text-blue-500">
                {createElement(
                    props.iconComponent,
                    { className: 'mr-1', size: 18 }
                )}
                {props.label}
            </button>
        </motion.li>
    );
};

export default HeaderIcon;