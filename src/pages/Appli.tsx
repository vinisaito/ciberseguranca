
import React from 'react';
import { Diamond, Check ,  Smartphone, Download} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const SettingsPage = () => {
    return (
        <Layout>
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                            <Smartphone className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Aplicativos Falsos ou Clonados</h1>
                        </div>
                    </div>

                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Download className="w-5 h-5 mr-2 text-orange-400" />
                                Baixe apenas de lojas oficiais
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <br></br>
                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Check className="w-5 h-5 mr-2 text-orange-400" />
                                Leia as avaliações e comentários
                            </CardTitle>
                        </CardHeader>
                    </Card>
                    <br></br>
                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Diamond className="w-5 h-5 mr-2 text-orange-400" />
                                Observe o número de downloads
                            </CardTitle>
                        </CardHeader>
                    </Card>

                </div>
            </div>
        </Layout>
    );
};

export default SettingsPage;
