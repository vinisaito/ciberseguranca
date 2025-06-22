
import React from 'react';
import { Settings, Shield, Bell, Database, Wifi, Lock, AlertTriangle, CheckCircle, Fish, Mail, Network, Link, LogIn, Bug, Upload, Download, Box, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const SettingsPage = () => {
    return (
        <Layout>
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Senhas Fracas ou Reutilizadas</h1>
                        </div>
                    </div>

                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
                        <CardHeader>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                                    <h3 className="text-white font-semibold">Crie senhas fortes</h3>
                                    <p className="text-gray-400 text-sm">Use uma combinação de letras maiúsculas e minúsculas, números e símbolos. Evite palavras óbvias, nomes ou datas de nascimento.</p>
                                </div>
                                <div className="text-center">
                                    <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                                    <h3 className="text-white font-semibold">Nunca use a mesma senha em vários sites</h3>
                                    <p className="text-gray-400 text-sm">Se um site for invadido, os hackers podem tentar usar sua senha em outros serviços.</p>
                                </div>
                                <div className="text-center">
                                    <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                                    <h3 className="text-white font-semibold">Ative a autenticação em dois fatores (2FA)</h3>
                                    <p className="text-gray-400 text-sm">Mesmo que a senha seja descoberta, o 2FA adiciona uma camada extra de proteção (por exemplo, um código enviado por SMS ou app).</p>
                                </div>
                                <div className="text-center">
                                    <CheckCircle className="w-12 h-12 text-red-400 mx-auto mb-2" />
                                    <h3 className="text-white font-semibold">Troque senhas antigas ou comprometidas</h3>
                                    <p className="text-gray-400 text-sm">Você pode verificar se seu e-mail foi envolvido em vazamentos em sites como haveibeenpwned.com.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </Layout>
    );
};

export default SettingsPage;
