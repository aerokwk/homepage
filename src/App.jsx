import React from 'react';
import { Plane, Shield, Mail, ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <Plane className="h-8 w-8 text-sky-400" />
                        <span className="text-2xl font-bold tracking-tighter text-white">AEROSYS</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">홈</a>
                            <a href="#services" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">서비스 소개</a>
                            <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">문의하기</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="text-slate-400 hover:text-white">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
                        미래를 비행하는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">항공 시스템의 기준</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10">
                        Aerosys는 혁신적인 항공 기술과 최첨단 시스템 통합 솔루션을 통해 더 안전하고 효율적인 비행 경험을 제공합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 group">
                            시작하기 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all">
                            자세히 보기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const services = [
        { title: "항공 시스템 통합", desc: "복잡한 비행 데이터를 통합하여 정밀한 제어 시스템을 구축합니다.", icon: <Plane className="h-8 w-8 text-sky-400" /> },
        { title: "보안 및 안전 솔루션", desc: "최고 수준의 보안 프로토콜과 안전 최적화 알고리즘을 제공합니다.", icon: <Shield className="h-8 w-8 text-sky-400" /> },
        { title: "맞춤형 컨설팅", desc: "고객사의 요구에 맞춘 최적화된 항공 인프라 전략을 수립합니다.", icon: <Mail className="h-8 w-8 text-sky-400" /> },
    ];

    return (
        <div id="services" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">제공 서비스</h2>
                    <p className="text-slate-400">Aerosys가 제공하는 핵심 기술력을 확인해보세요.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all group">
                            <div className="mb-6">{s.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{s.title}</h3>
                            <p className="text-slate-400">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <div id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 border border-slate-700 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">함께 성장을 시작하세요</h2>
                        <p className="text-slate-400 mb-8">문의 사항이 있으시면 언제든 연락 주세요. 전문 팀이 신속하게 답변해 드립니다.</p>
                        <div className="flex flex-col gap-4 text-slate-300">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Mail className="h-5 w-5 text-sky-400" />
                                <span>contact@aerosys.kr</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-md">
                        <form className="space-y-4">
                            <input type="text" placeholder="성함" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500" />
                            <input type="email" placeholder="이메일" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500" />
                            <textarea placeholder="문의 내용" rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500"></textarea>
                            <button className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-colors">전송하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-800 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-6 text-slate-500">
                    <Plane className="h-5 w-5" />
                    <span className="font-bold tracking-tighter">AEROSYS</span>
                </div>
                <p className="text-slate-500 text-sm">© 2026 Aerosys.kr. All rights reserved.</p>
            </div>
        </footer>
    );
};

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Navbar />
            <Hero />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
