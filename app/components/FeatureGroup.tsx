"use client"
import { motion } from 'framer-motion';
import Features from "./Features";
import FeaturesTwo from "./FeaturesTwo";
import FeaturesThree from "./FeatureThree"

const slideInVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
};

const FeatureGroup: React.FC = () => {
    return (
        <motion.section
            className="space-y-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.8 }}
        >
            <motion.div variants={slideInVariants}>
                <Features />
            </motion.div>
            <motion.div variants={slideInVariants}>
                <FeaturesTwo />
            </motion.div>
            <motion.div variants={slideInVariants}>
                <FeaturesThree />
            </motion.div>
        </motion.section>
    );
}

export default FeatureGroup;

