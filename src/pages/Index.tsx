
import React from 'react';
import { Fingerprint, Shield, Lock, Smartphone, Fish, Wifi, User, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Phishing from "./Phishing";
import Malwares from "./Malwares";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const FingerprintPage = () => {
  return (
    <Layout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Centro de Segurança Cibernética</h1>
              <p className="text-gray-400">Aprenda a se proteger contra ameaças digitais e manter seus dados seguros
              </p>
            </div>
          </div>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-green-400 text-xl">Quais são os tipos de ataques?</CardTitle>
              <CardDescription className="text-gray-300">
                Com o avanço da tecnologia, os ataques de hackers se tornaram mais sofisticados e frequentes. Usuários comuns, muitas vezes desavisados, são os alvos preferidos. Entender os métodos usados por hackers é o primeiro passo para se proteger. A seguir, veja os principais meios de ataque:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                    <Fish className="w-6 h-6 text-white " />
                  </div>
                  <span className="text-gray-300 font-bold">Phishing (Golpes de Engenharia Social)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Bug className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-bold">Malwares (Programas Maliciosos)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-bold">Ataques via Wi-Fi Público</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-bold">Senhas Fracas ou Reutilizadas</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-bold">Aplicativos Falsos ou Clonados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 font-bold">Redes Sociais e Exposição de Dados</span>
                </div>
              </div>
            </CardContent>

          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Fish className="w-5 h-5 mr-2 text-red-400" />
                  Phishing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 text-center">Como funciona?</h4>
                    <p className="text-gray-400 text-center">
                      O phishing é um dos métodos mais comuns. O hacker envia e-mails, mensagens ou páginas falsas que imitam empresas conhecidas para enganar o usuário e roubar senhas, dados bancários ou informações pessoais.
                      <br></br><br></br>
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    <strong>Taxa de Vítimas:</strong> 3.5 Milhões de brasileiros<br />
                  </div>
                </div>
                <Link to="/phishing" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-gray-700">
                    Como se prevenir do Phishing
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bug className="w-5 h-5 mr-2 text-purple-400" />
                  Malwares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 text-center">Como funciona?</h4>
                    <p className="text-gray-400 text-center">
                      Malwares são softwares criados para prejudicar o sistema, roubar dados ou controlar o dispositivo da vítima. Eles podem vir embutidos em downloads, anexos de e-mail ou até em sites maliciosos.
                      <br></br><br></br>
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    <strong>Taxa de Vítimas:</strong> 10 Milhões de brasileiros<br />
                  </div>
                </div>
                <Link to="/malwares" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-gray-700">
                    Como se prevenir de Malwares
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Wifi className="w-5 h-5 mr-2 text-blue-400" />
                  Ataques via Wi-Fi Público
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 text-center">Como funciona?</h4>
                    <p className="text-gray-400 text-center">
                      Redes públicas, como as de shoppings e aeroportos, são inseguras. Nelas, hackers podem interceptar dados enviados pelo seu dispositivo, como senhas ou informações bancárias.
                      <br></br><br></br>
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    <strong>Taxa de Vítimas:</strong> 2 Milhões de brasileiros<br />
                  </div>
                </div>
                <Link to="/wifi" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-gray-700">
                    Como se prevenir de ataques Wifi
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-yellow-400" />
                  Senhas Fracas ou Reutilizadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 text-center">Como funciona?</h4>
                    <p className="text-gray-400 text-center">
                      Muitos usuários usam a mesma senha em vários sites. Se uma senha for descoberta, o hacker pode acessar diversas contas da vítima.
                      <br></br><br></br><br></br>
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    <strong>Taxa de Vítimas:</strong> 58% dos brasileiros<br />
                  </div>
                </div>
                                <Link to="/passwords" className="w-full">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-green-700">
                  Como ter senhas fortes
                </Button>
                 </Link>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-orange-400" />
                  Aplicativos Falsos ou Clonados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 text-center">Como funciona?</h4>
                    <p className="text-gray-400 text-center">
                      Hackers criam versões falsas de aplicativos populares para infectar dispositivos com spyware ou trojans.
                      <br></br><br></br>
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    <strong>Taxa de Vítimas:</strong> 40 milhões de brasileiros<br />
                  </div>
                </div>
                <Link to="/appli" className="w-full">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-green-700">
                  Como se prevenir de aplicativos clonados
                </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-pink-400" />
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 text-center">Como funciona?</h4>
                    <p className="text-gray-400 text-center">
                      Informações pessoais postadas em redes sociais podem ser usadas para ataques direcionados, como roubo de identidade ou adivinhação de senhas.
                      <br></br><br></br>
                    </p>
                  </div>

                  <div className="text-sm text-gray-400">
                    <strong>Taxa de Vítimas:</strong> 94% dos brasileiros<br />
                  </div>
                </div>
                <Link to="/social" className="w-full">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-green-700">
                  Como se prevenir de ataques de redes sociais
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FingerprintPage;
