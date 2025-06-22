
import React from 'react';
import { Shield, Lock, Fish, Mail, Network, Link, LogIn} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const SettingsPage = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mr-4">
              <Fish className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Phishing</h1>
            </div>
          </div>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Lock className="w-5 h-5 mr-2 text-red-400" />
                O que é?
              </CardTitle>
              <CardDescription className="text-gray-400">
                Phishing é um tipo de golpe digital em que hackers tentam enganar você para roubar informações pessoais, como senhas, dados bancários ou números de cartão de crédito.
                <br></br><br></br>Eles fazem isso se passando por empresas confiáveis, bancos, redes sociais ou até colegas de trabalho. Normalmente, o golpe vem por:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">E-mail falso</span>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">SMS ou WhatsApp</span>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Sites falsos (parecidos com os verdadeiros)</span>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Mensagens com links maliciosos</span>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-center">Como se Proteger de Phishing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Network className="w-5 h-5 mr-2 text-blue-400" />
                      1. Verifique o endereço dos sites
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Antes de digitar qualquer informação, veja se a URL começa com https:// e se o domínio está correto (exemplo: www.nomedosite.com, e não www.nomedosite.seguro-login.com).
                        </li>
                      </div>
                          <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Use https://www.virustotal.com/gui/home/ para verificar a integridade dos sites
                        </li>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-400" />
                     2. Desconfie de mensagens suspeitas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Cuidado com e-mails, SMS ou mensagens em redes sociais que pedem senhas, dados bancários ou cliques em links.
                        </li>
                      </div>
                          <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Golpistas costumam imitar bancos, empresas famosas ou até amigos.
                        </li>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Link className="w-5 h-5 mr-2 text-blue-400" />
                      3. Nunca clique Links desconhecidos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Se receber algo inesperado, vá direto ao site oficial (sem clicar no link) e verifique a informação.
                        </li>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <LogIn className="w-5 h-5 mr-2 text-blue-400" />
                      4. Sempre use autenticação de dois fatores (2FA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Ative o 2FA sempre que possível. Isso impede acessos mesmo se sua senha for roubada.
                        </li>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-400" />
                      5. Tenha um bom antivírus ou extensão anti-phishins
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Alguns navegadores e antivírus detectam sites falsos e te protegem automaticamente.
                        </li>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-400" />
                      6. Não envie dados pessoais por e-mai
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <li className="text-gray-300 list-disc pl-5 marker:text-blue-500">
                          Empresas sérias nunca pedem informações sensíveis por e-mail ou mensagem.
                        </li>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
