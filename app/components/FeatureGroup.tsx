"use client"
import { motion } from 'framer-motion';
import Features from "./Features";
import FeaturesTwo from "./FeaturesTwo";
import FeaturesThree from "./FeatureThree"
import { DarkProps } from './Nav';

const slideInVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
};

const FeatureGroup: React.FC<DarkProps> = ({ isDark }) => {
    return (
        <motion.section
            className="space-y-6 lg-w-full"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.8 }}
        >
            <motion.div variants={slideInVariants}>
                <Features dark={isDark} />
            </motion.div>
            <motion.div variants={slideInVariants}>
                <FeaturesTwo />
            </motion.div>
            <motion.div variants={slideInVariants}>
                <FeaturesThree dark={isDark} />
            </motion.div>
        </motion.section>
    );
}

export default FeatureGroup;

