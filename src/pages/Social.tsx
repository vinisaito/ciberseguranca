
import React from 'react';
import { User, AlertTriangle} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const SettingsPage = () => {
    return (
        <Layout>
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Redes Sociais e Exposição de Dados</h1>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-700/50 rounded-lg p-6 mb-8">
                        <div className="flex items-center mb-4">
                            <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                            <h2 className="text-xl font-bold text-red-400">Formas de se proteger</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 rounded-lg p-4">
                                <h3 className="text-white font-semibold mb-2">Evite divulgar dados pessoais</h3>
                                <p className="text-gray-300 text-sm">Não publique CPF, endereço, telefone, placas de veículos ou localização exata.</p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-4">
                                <h3 className="text-white font-semibold mb-2">Cuidado com o que você compartilha</h3>
                                <p className="text-gray-300 text-sm">Fotos de passagens, cartões, crachás de trabalho ou filhos podem ser usados em engenharia social.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default SettingsPage;
