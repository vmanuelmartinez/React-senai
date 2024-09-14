import { useState } from 'react'
import './style.css'
import { ArrowDown, ArrowUp } from 'lucide-react';


export default function Accordion() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="accordion-container">
            <div className="accordion-title">
                <p>novidades</p>
                <button> {isOpen ? <ArrowUp/> : <ArrowDown/>} </button>
            </div>

            {isOpen && (
                <div className="accordion-content">
                <p>Sei fazer um Accordion em JSX com Hook</p>
            </div>
        )}
          
        </div>
    );
}