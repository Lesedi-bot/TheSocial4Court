import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Users, Utensils, Trophy, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Package {
  title: string;
  people: string;
  price: string;
  duration: string;
  icon: any;
}

export function ProductCard() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -15;
    const rotateYValue = (mouseX / (rect.width / 2)) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const packages: Package[] = [
    { title: 'Small Team', people: '4-8 people', price: 'R2,500', duration: '2 hours', icon: Users },
    { title: 'Medium Team', people: '12-32 people', price: 'R6,000', duration: '2 hours', icon: Users },
    { title: 'Large Team', people: '30+ people', price: 'R7,000', duration: '2 hours', icon: Users },
  ];

  return (
    <div 
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="relative w-full max-w-4xl"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect */}
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-50"
          style={{ transform: 'translateZ(-50px)' }}
        />
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
          {/* Hero Section */}
          <div className="relative p-12 pb-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-b border-slate-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl" />
            
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 border-0">
              Corporate Events & Team Building
            </Badge>
            
            <h1 className="mb-3 text-white">
              THE SOCIAL COURT
            </h1>
            
            <p className="text-purple-200 max-w-2xl mb-6">
              EAT • PLAY • CONNECT • CELEBRATE
            </p>
            
            <p className="text-slate-300 max-w-2xl">
              Your premier destination for year-end functions, team building events, and corporate celebrations. 
              Combining Padel sports with exceptional dining experiences.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 p-12 pb-8">
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-slate-800/50 border border-purple-700/50"
              whileHover={{ scale: 1.05 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Padel Play</h3>
              <p className="text-slate-400">Professional Padel courts with coaching and tournament formats</p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-slate-800/50 border border-pink-700/50"
              whileHover={{ scale: 1.05 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Gourmet Dining</h3>
              <p className="text-slate-400">Wood-fired pizzas, burgers, and spit braai catering options</p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-800/50 border border-blue-700/50"
              whileHover={{ scale: 1.05 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Event Management</h3>
              <p className="text-slate-400">Free coaching, game management, and complete event support</p>
            </motion.div>
          </div>

          {/* Packages Section */}
          <div className="px-12 pb-8">
            <h2 className="text-white mb-6">Team-Building Packages</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-colors"
                  whileHover={{ y: -5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <pkg.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-white mb-2">{pkg.title}</h3>
                  <p className="text-slate-400 mb-3">{pkg.people}</p>
                  <div className="mb-3">
                    <span className="text-purple-400">{pkg.price}</span>
                    <span className="text-slate-500"> / {pkg.duration}</span>
                  </div>
                  <ul className="space-y-1 text-slate-400">
                    <li>• 30 min coaching (optional)</li>
                    <li>• 90 min tournament</li>
                    <li>• Free balls & management</li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Food Highlights */}
          <div className="px-12 pb-8">
            <h3 className="text-white mb-4">Catering Options</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-slate-800/50 border border-orange-700/30">
                <h4 className="text-orange-400 mb-2">Spit Braai Package</h4>
                <p className="text-slate-300 mb-2">R200 per person</p>
                <p className="text-slate-400">Spit-roasted beef/pork, grilled chicken, salads, pap & gravy</p>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-slate-800/50 border border-orange-700/30">
                <h4 className="text-orange-400 mb-2">Scrumptious Baskets</h4>
                <p className="text-slate-300 mb-2">From R135 (serves 2)</p>
                <p className="text-slate-400">Wood-fired pizzas, burgers, wings, and more available</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-12 pt-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-t border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white mb-2">Ready to Host Your Event?</h3>
                <p className="text-slate-300">Contact us to customize your perfect corporate experience</p>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
