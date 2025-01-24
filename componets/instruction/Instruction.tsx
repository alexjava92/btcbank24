import React from 'react';
import styles from './Instruction.module.css';
import {PhoneFrame} from "@/componets/phone-frame/PhoneFrame";


interface Step {
    id?: string,
    title: string;
    description: string;
    image: string;
    alt: string;
    className: string;
}

interface InstructionProps {
    title: string;
    steps: Step[];
}

const Instruction: React.FC<InstructionProps> = ({ title, steps }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <div key={index} id={step.id} className={`${styles.step} scroll`}>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                        <div className={styles.phoneFrame}>
                            <PhoneFrame imageSrc={step.image} imageAlt={step.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instruction;
