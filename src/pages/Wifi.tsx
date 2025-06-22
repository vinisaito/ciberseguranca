
import React from 'react';
import {Wifi, Lock, AlertTriangle, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const SettingsPage = () => {
    return (
        <Layout>
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                            <Wifi className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Wi-Fi</h1>
                        </div>
                    </div>

                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Lock className="w-5 h-5 mr-2 text-blue-400" />
                                O que é?
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Ataques via Wi-Fi público são tentativas de hackers de espionar, roubar dados ou invadir dispositivos conectados a redes Wi-Fi abertas e inseguras, como as de cafés, shoppings, hotéis e aeroportos.
                                Essas redes costumam não ter criptografia adequada, o que facilita a vida dos criminosos digitais.
                            </CardDescription>
                            <br></br>
                            <CardContent>
                                <div className="space-y-4 mb-4">
                                    <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                                    <div className="bg-gray-700/30 rounded-lg p-4">
                                        <p className="text-gray-400 text-center">
                                            <p className="font-bold text-white">1. Intercepção de dados (Sniffing):</p> O hacker captura tudo o que os usuários estão enviando ou recebendo — como senhas, mensagens e dados bancários — usando ferramentas simples.
                                            <br></br><br></br>
                                            <p className="font-bold text-white">2. Wi-Fi falso (Evil Twin): </p>
                                            O atacante cria uma rede com nome parecido com o Wi-Fi oficial (ex: Cafe_Free_WiFi) e, quando você se conecta, tudo o que você faz passa por ele.
                                            <br></br><br></br>
                                            <p className="font-bold text-white">3. Ataques Man-in-the-Middle (MITM):</p>
                                            O hacker se coloca entre você e o site que está acessando, interceptando e até alterando informações sem que você perceba.
                                            <br></br><br></br>
                                            <p className="font-bold text-white">4. Invasão ao seu dispositivo:</p>
                                            Se o seu notebook ou celular estiver com compartilhamento de arquivos ativo, ele pode ser acessado por alguém na mesma rede.
                                            <br></br><br></br>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-white text-center">Como se Proteger de Ataques via Wi-Fi Público</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Lock className="w-5 h-5 text-blue-400 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-medium">Evite acessar contas sensíveis</h4>
                                        <p className="text-gray-400 text-sm">Não entre em apps de banco, e-mails importantes ou faça compras online enquanto estiver em redes públicas.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Wifi className="w-5 h-5 text-purple-400 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-medium">Desative conexões automáticas</h4>
                                        <p className="text-gray-400 text-sm">Configure seu celular e notebook para não se conectar automaticamente a redes Wi-Fi abertas.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Lock className="w-5 h-5 text-yellow-400 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-medium">Prefira sites com HTTPS</h4>
                                        <p className="text-gray-400 text-sm">O "cadeado" na barra do navegador indica uma conexão segura.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Move className="w-5 h-5 text-yellow-400 mt-0.5" />
                                    <div>
                                        <h4 className="text-white font-medium">Use dados móveis sempre que possível</h4>
                                        <p className="text-gray-400 text-sm">Se for acessar algo importante, use a rede 4G/5G do seu celular, que é mais segura que Wi-Fi público.</p>
                                    </div>
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
