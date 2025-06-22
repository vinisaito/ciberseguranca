
import React from 'react';
import { Shield, Bug, User, Fish, Wifi, Lock, Smartphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-gray-900/50 backdrop-blur-sm border-r border-gray-700 flex flex-col items-center py-6 space-y-6 z-10">
        <Link to="/">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
        </Link>
        
        <nav className="flex flex-col space-y-4">
          <Link to="/phishing">
            <button className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center group ${
              isActive('/phishing') 
                ? 'bg-red-600/50 border border-red-400' 
                : 'bg-gray-700/50 hover:bg-gray-600/50'
            }`}>
              <Fish className={`w-5 h-5 ${
                isActive('/phishing') ? 'text-red-400' : 'text-gray-400 group-hover:text-red-400'
              }`} />
            </button>
          </Link>
          <Link to="/malwares">
            <button className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center group ${
              isActive('/malwares') 
                ? 'bg-purple-600/50 border border-purple-400' 
                : 'bg-gray-700/50 hover:bg-gray-600/50'
            }`}>
              <Bug className={`w-5 h-5 ${
                isActive('/malwares') ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'
              }`} />
            </button>
          </Link>
          <Link to="/wifi">
            <button className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center group ${
              isActive('/wifi') 
                ? 'bg-blue-600/50 border border-blue-400' 
                : 'bg-gray-700/50 hover:bg-gray-600/50'
            }`}>
              <Wifi className={`w-5 h-5 ${
                isActive('/wifi') ? 'text-blue400' : 'text-gray-400 group-hover:text-blue-400'
              }`} />
            </button>
          </Link>
            <Link to="/passwords">
            <button className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center group ${
              isActive('/passwords') 
                ? 'bg-yellow-600/50 border border-yellow-400' 
                : 'bg-gray-700/50 hover:bg-gray-600/50'
            }`}>
              <Lock className={`w-5 h-5 ${
                isActive('/passwords') ? 'text-yellow' : 'text-gray-400 group-hover:text-yellow-400'
              }`} />
            </button>
          </Link>
           <Link to="/appli">
            <button className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center group ${
              isActive('/appli') 
                ? 'bg-orange-600/50 border border-orange-400' 
                : 'bg-gray-700/50 hover:bg-gray-600/50'
            }`}>
              <Smartphone className={`w-5 h-5 ${
                isActive('/appli') ? 'text-orange-400' : 'text-gray-400 group-hover:text-orange-400'
              }`} />
            </button>
          </Link>
          <Link to="/social">
            <button className={`w-12 h-12 rounded-xl transition-colors flex items-center justify-center group ${
              isActive('/social') 
                ? 'bg-pink-600/50 border border-pink-400' 
                : 'bg-gray-700/50 hover:bg-gray-600/50'
            }`}>
              <User className={`w-5 h-5 ${
                isActive('/social') ? 'text-pink-400' : 'text-gray-400 group-hover:text-pink-400'
              }`} />
            </button>
          </Link>
        </nav>
      </div>

      <div className="ml-20 flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
