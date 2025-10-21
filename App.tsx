import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons ---
const BrainCircuitIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.16.59.67.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" />
  </svg>
);
const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const ContentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);
const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

// --- SVG Diagrams for Key Concepts ---
const TransformerDiagram: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" className="text-slate-400">
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
        </defs>
        <g className="transformer-node">
            <rect x="50" y="50" width="100" height="100" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="100" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Encoder</text>
            <text x="100" y="115" textAnchor="middle" fill="#64748b" fontSize="12">(N x)</text>
        </g>
        <g className="transformer-node">
            <rect x="250" y="50" width="100" height="100" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="300" y="95" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">Decoder</text>
            <text x="300" y="115" textAnchor="middle" fill="#64748b" fontSize="12">(N x)</text>
        </g>
        
        <path className="data-flow-path" d="M 20 100 L 45 100" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path className="data-flow-path" d="M 155 75 L 245 75" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path className="data-flow-path" d="M 155 125 L 245 125" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path className="data-flow-path" d="M 300 155 L 300 180 L 255 180" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
        <path className="data-flow-path" d="M 355 100 L 380 100" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />

        <text x="10" y="105" textAnchor="start" fill="#e2e8f0" fontSize="12">Inputs</text>
        <text x="300" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="12">Outputs</text>
        <text x="390" y="105" textAnchor="end" fill="#e2e8f0" fontSize="12">Output</text>
        <text x="390" y="118" textAnchor="end" fill="#e2e8f0" fontSize="12">Probs</text>
    </svg>
);

const AttentionDiagram: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" className="text-slate-300">
        <text x="200" y="25" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">Self-Attention Mechanism</text>
        <text x="50" y="60" textAnchor="middle" fontSize="12">Thinking</text>

        <g className="attention-group">
            <text x="120" y="60" textAnchor="middle" fontSize="12" className="attention-word fill-cyan-400 font-bold">Machines</text>
            <path className="attention-line" d="M 120 70 q 60 40 100 5" stroke="#334155" strokeWidth="1.5" fill="none" strokeDasharray="4 2"/>
            <path className="attention-line" d="M 120 70 q 80 20 150 5" stroke="#334155" strokeWidth="1.5" fill="none" strokeDasharray="4 2"/>
            <path className="attention-line" d="M 120 70 q 100 0 200 5" stroke="#334155" strokeWidth="1.5" fill="none" strokeDasharray="4 2"/>
        </g>
        
        <g className="qkv-node">
            <circle cx="230" cy="80" r="15" fill="#0e7490" /><text x="230" y="84" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Q</text>
        </g>
        <g className="qkv-node">
            <circle cx="280" cy="80" r="15" fill="#155e75" /><text x="280" y="84" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">K</text>
        </g>
        <g className="qkv-node">
            <circle cx="330" cy="80" r="15" fill="#164e63" /><text x="330" y="84" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">V</text>
        </g>
        
        <text x="280" y="55" textAnchor="middle" fontSize="10" className="text-slate-400">Query, Key, Value</text>
        
        <text x="80" y="150" textAnchor="middle" fontSize="12">Score</text>
        <path d="M 110 148 L 140 148" stroke="#64748b" strokeWidth="1.5" />
        <text x="175" y="150" textAnchor="middle" fontSize="12">Softmax</text>
        <path d="M 210 148 L 240 148" stroke="#64748b" strokeWidth="1.5" />
        <text x="260" y="150" textAnchor="middle" fontSize="12">Sum</text>
        <path d="M 280 148 L 310 148" stroke="#64748b" strokeWidth="1.5" />
        <text x="340" y="150" textAnchor="middle" fontSize="12" fill="#6ee7b7">Output</text>
    </svg>
);

const EmbeddingDiagram: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" className="text-slate-300">
        <text x="200" y="25" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">Word to Vector</text>
        <g className="embedding-group">
            <text x="50" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="14">"Cat"</text>
            <path d="M 80 70 L 140 70" stroke="#475569" strokeWidth="1.5" className="embedding-arrow" markerEnd="url(#arrow)" />
            <g className="embedding-vector">
                <rect x="150" y="55" width="200" height="30" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <text x="250" y="75" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">[0.2, 0.8, -0.4, ...]</text>
            </g>
        </g>
        <g className="embedding-group">
            <text x="50" y="130" textAnchor="middle" fill="#e2e8f0" fontSize="14">"Kitten"</text>
            <path d="M 80 130 L 140 130" stroke="#475569" strokeWidth="1.5" className="embedding-arrow" markerEnd="url(#arrow)" />
            <g className="embedding-vector">
                <rect x="150" y="115" width="200" height="30" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <text x="250" y="135" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">[0.25, 0.78, -0.35, ...]</text>
            </g>
        </g>
        <text x="250" y="175" textAnchor="middle" fontSize="10" className="text-slate-400">Similar words have similar vectors</text>
    </svg>
);

const PositionalEncodingDiagram: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" className="text-slate-300">
        <text x="200" y="25" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold">Preserving Word Order</text>
        
        <g className="pe-group" transform="translate(40, 60)">
            <rect x="0" y="0" width="80" height="40" rx="4" fill="#2563eb" className="pe-box" />
            <text x="40" y="25" textAnchor="middle" fill="white" fontSize="12">Input 1</text>
            <text x="40" y="60" textAnchor="middle" fill="#94a3b8" fontSize="12">+ PE(pos=0)</text>
            <path className="positional-wave" d="M 0 80 C 20 60, 60 100, 80 80" stroke="#34d399" strokeWidth="1.5" fill="none" />
        </g>
        
        <g className="pe-group" transform="translate(160, 60)">
            <rect x="0" y="0" width="80" height="40" rx="4" fill="#2563eb" className="pe-box" />
            <text x="40" y="25" textAnchor="middle" fill="white" fontSize="12">Input 2</text>
            <text x="40" y="60" textAnchor="middle" fill="#94a3b8" fontSize="12">+ PE(pos=1)</text>
            <path className="positional-wave" d="M 0 80 C 20 100, 60 60, 80 80" stroke="#34d399" strokeWidth="1.5" fill="none" />
        </g>
        
        <g className="pe-group" transform="translate(280, 60)">
            <rect x="0" y="0" width="80" height="40" rx="4" fill="#2563eb" className="pe-box" />
            <text x="40" y="25" textAnchor="middle" fill="white" fontSize="12">Input 3</text>
            <text x="40" y="60" textAnchor="middle" fill="#94a3b8" fontSize="12">+ PE(pos=2)</text>
            <path className="positional-wave" d="M 0 80 C 20 70, 60 90, 80 80" stroke="#34d399" strokeWidth="1.5" fill="none" />
        </g>
        
        <text x="200" y="175" textAnchor="middle" fontSize="10" className="text-slate-400">Unique signal added to each input based on its position</text>
    </svg>
);


// --- Reusable UI Components ---

const Header: React.FC<{ isScrolled: boolean; }> = ({ isScrolled }) => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                 <BrainCircuitIcon className="w-8 h-8 text-cyan-400"/>
                <h1 className="text-xl font-bold text-white">LLM Explorer</h1>
            </div>
        </div>
    </header>
);

const Hero: React.FC = () => (
    <section className="h-screen flex items-center justify-center text-center bg-grid-slate-800/[0.2] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        <div className="z-10 px-4">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                Explore <span className="text-cyan-400">Large Language Models</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Dive into the world of AI that understands, generates, and converses like a human.
            </p>
        </div>
    </section>
);

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <section className={`py-20 ${className}`}>
        <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-white mb-12">
                {title}
            </h3>
            {children}
        </div>
    </section>
);

const InfoCard: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
        <div className="text-cyan-400 mb-4">{children}</div>
        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400">{description}</p>
    </div>
);

const TimelineItem: React.FC<{ year: string; title: string; description: string; isLast?: boolean }> = ({ year, title, description, isLast = false }) => (
    <div className="relative pl-8">
        <div className="absolute left-0 top-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
        {!isLast && <div className="absolute left-[7px] top-4 w-0.5 h-full bg-slate-700"></div>}
        <p className="text-cyan-400 font-semibold mb-1">{year}</p>
        <h5 className="text-xl font-bold text-white mb-2">{title}</h5>
        <p className="text-slate-400">{description}</p>
    </div>
);

const ApplicationCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-6 rounded-lg text-center">
        <div className="flex justify-center items-center mb-4 text-cyan-400">
            {icon}
        </div>
        <h5 className="text-xl font-bold text-white mb-2">{title}</h5>
        <p className="text-slate-400 text-sm">{description}</p>
    </div>
);

const KeyConceptCard: React.FC<{ title: string; description: string; visual: React.ReactNode; reverse?: boolean }> = ({ title, description, visual, reverse = false }) => (
    <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2">
            <h4 className="text-3xl font-bold text-white mb-4">{title}</h4>
            <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
        <div className="md:w-1/2 w-full bg-slate-800 p-4 sm:p-6 rounded-xl border border-slate-700 aspect-video flex items-center justify-center">
            {visual}
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} LLM Explorer. Powered by React and Tailwind CSS.</p>
        </div>
    </footer>
);

// --- Main App Component ---

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-slate-900 text-white font-sans">
            <Header isScrolled={isScrolled} />
            <main>
                <Hero />

                <Section title="What is an LLM?">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <InfoCard title="Definition" description="A Large Language Model (LLM) is a type of deep learning model trained on vast amounts of text data to understand, generate, and transform human language.">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </InfoCard>
                        <InfoCard title="Core Technology" description="LLMs are typically based on the Transformer architecture, which uses a 'self-attention mechanism' to weigh the importance of different words in the input text.">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <path d="M9 3v18M15 3v18M3 9h18M3 15h18"></path>
                           </svg>
                        </InfoCard>
                        <InfoCard title="Significance" description="LLMs are revolutionizing how we interact with technology, providing powerful new tools for tasks ranging from creative writing to complex problem-solving.">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </InfoCard>
                    </div>
                </Section>

                <Section title="Timeline" className="bg-slate-900/50">
                    <div className="max-w-3xl mx-auto space-y-8 relative">
                        <div className="absolute left-[7px] top-4 w-0.5 h-[calc(100%-2rem)] bg-slate-700 hidden sm:block"></div>
                        <TimelineItem year="2017" title="'Attention Is All You Need' Paper" description="Researchers at Google published the seminal paper introducing the Transformer architecture, laying the foundation for modern LLMs." />
                        <TimelineItem year="2018" title="GPT-1 & BERT" description="OpenAI released the first GPT model, and Google released BERT, both of which significantly advanced the field of Natural Language Processing (NLP)." />
                        <TimelineItem year="2020" title="GPT-3 Release" description="GPT-3, with its massive 175 billion parameters, garnered widespread attention for its impressive text generation capabilities." />
                        <TimelineItem year="2022" title="ChatGPT & InstructGPT" description="Techniques like instruction tuning and Reinforcement Learning from Human Feedback (RLHF) enabled models to better follow user intent, leading to the explosive popularity of ChatGPT." />
                        <TimelineItem year="2023+" title="Model Race & Open Source" description="Major tech companies released competing large models, while the open-source community produced powerful alternatives, accelerating rapid iteration and accessibility." isLast={true} />
                    </div>
                </Section>

                <Section title="Core Concepts Explained">
                    <div className="space-y-16 max-w-6xl mx-auto">
                        <KeyConceptCard 
                            title="Transformer Architecture"
                            description="The foundation of most modern LLMs. It consists of Encoder and Decoder stacks and processes entire input sequences in parallel, unlike older sequential models. This dramatically improves training efficiency and performance."
                            visual={<TransformerDiagram />}
                        />
                        <KeyConceptCard 
                            title="Attention Mechanism"
                            description="The core innovation of the Transformer. It allows the model to weigh the importance of all other words in the input sequence when processing a single word, assigning higher weights to more relevant words. This enables capturing long-range dependencies and complex context."
                            visual={<AttentionDiagram />}
                            reverse={true}
                        />
                         <KeyConceptCard 
                            title="Word Embeddings"
                            description="LLMs can't understand raw text. First, words are converted into high-dimensional numerical vectors called 'embeddings.' These vectors capture semantic relationships, meaning similar words (like 'cat' and 'kitten') are located close to each other in the vector space."
                            visual={<EmbeddingDiagram />}
                        />
                        <KeyConceptCard 
                            title="Positional Encoding"
                            description="Since the Transformer processes all words simultaneously, it has no inherent sense of sequence order. To fix this, a unique 'positional encoding' signal, often generated using sine and cosine functions, is added to each word's embedding. This informs the model of each word's position in the sentence."
                            visual={<PositionalEncodingDiagram />}
                            reverse={true}
                        />
                    </div>
                </section>
                
                <Section title="Applications" className="bg-slate-900/50">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        <ApplicationCard icon={<ContentIcon className="w-10 h-10" />} title="Content Creation" description="Automatically generate articles, blogs, emails, ad copy, poetry, and scripts." />
                        <ApplicationCard icon={<ChatIcon className="w-10 h-10" />} title="Conversational AI" description="Provide 24/7 customer support, and act as a personal assistant for intelligent Q&A." />
                        <ApplicationCard icon={<CodeIcon className="w-10 h-10" />} title="Coding & Development" description="Write, debug, explain, and translate code, significantly boosting development productivity." />
                        <ApplicationCard icon={<BrainCircuitIcon className="w-10 h-10" />} title="Knowledge Extraction" description="Summarize key points, extract critical information, and perform sentiment analysis from vast amounts of unstructured text." />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}