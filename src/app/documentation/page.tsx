import Link from "next/link";
import { 
  BookOpen, 
  Shield, 
  FileText, 
  Bug, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Award,
  Clock,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Database,
  HelpCircle,
  Zap,
  Target,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-lg mb-8">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">Documentation & Réglementation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 flex items-center justify-center gap-6">
              <span className="text-6xl lg:text-8xl">🧭</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Guide HACCP</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              Tout ce que vous devez savoir sur la méthode HACCP, le cadre réglementaire 
              et nos services d'accompagnement pour votre conformité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact" className="flex items-center gap-2">
                  Demander un accompagnement
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300">
                <Link href="/services">Voir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { icon: Lightbulb, title: "Origines HACCP", href: "#origines", color: "from-yellow-400 to-orange-500" },
              { icon: Shield, title: "Cadre Réglementaire", href: "#reglementation", color: "from-blue-500 to-indigo-600" },
              { icon: FileText, title: "Plan de Maîtrise", href: "#pms", color: "from-green-500 to-emerald-600" },
              { icon: Bug, title: "Gestion Nuisibles", href: "#nuisibles", color: "from-red-500 to-pink-600" },
              { icon: Calendar, title: "Fréquences & Contrôles", href: "#frequences", color: "from-purple-500 to-violet-600" },
              { icon: Database, title: "Détails PMS", href: "#details-pms", color: "from-cyan-500 to-blue-600" },
              { icon: HelpCircle, title: "Pourquoi un Expert", href: "#expert", color: "from-indigo-500 to-purple-600" },
              { icon: Globe, title: "Importance Actuelle", href: "#importance", color: "from-teal-500 to-cyan-600" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}></div>
                <div className="relative p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container px-4 mx-auto space-y-32">
          
          {/* 1. Origines & principe de la méthode HACCP */}
          <div id="origines" className="scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-4 py-2">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Origines & Principes
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Origines & Principe de la Méthode HACCP
                  </h2>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Issue dans les années 1960 d'une collaboration entre la NASA, Pillsbury et les laboratoires de l'armée américaine, 
                  la méthode HACCP visait à garantir la sécurité des rations spatiales. Elle repose sur 7 principes fondamentaux :
                </p>
                
                <div className="space-y-4">
                  {[
                    "Analyse des dangers",
                    "Identification des Points Critiques de Contrôle (CCP)",
                    "Définition de limites critiques",
                    "Mise en place d'une surveillance continue",
                    "Actions correctives",
                    "Validation des dispositifs de contrôle",
                    "Documentation stricte des procédures"
                  ].map((principe, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{principe}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-3xl p-8 border border-yellow-200 shadow-xl">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Contexte Historique</h3>
                  <div className="space-y-6">
                    {[
                      { label: "NASA & Pillsbury", color: "from-blue-500 to-indigo-600" },
                      { label: "Années 1960", color: "from-green-500 to-emerald-600" },
                      { label: "Rations spatiales", color: "from-purple-500 to-violet-600" },
                      { label: "7 principes", color: "from-orange-500 to-red-600" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                        <span className="font-semibold text-gray-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Cadre réglementaire */}
          <div id="reglementation" className="scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 rounded-3xl p-8 border border-red-200 shadow-xl">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800 mb-6">Obligations Légales</h3>
                  <div className="space-y-4">
                    {[
                      "Assurer la chaîne du froid/chaud",
                      "Réaliser des échantillonnages microbiologiques",
                      "Former au moins une personne à l'HACCP",
                      "Mettre en pratique des mesures adaptées"
                    ].map((obligation, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{obligation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 px-4 py-2">
                    <Shield className="h-4 w-4 mr-2" />
                    Cadre Réglementaire
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Paquet Hygiène CE 852/2004
                  </h2>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Le règlement CE n°852/2004 impose l'obligation de mettre en place des procédures basées sur les principes HACCP 
                  pour toute entreprise manipulant des denrées alimentaires (production, transformation, distribution).
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-blue-800">Obligation légale pour toutes les entreprises alimentaires</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <Clock className="h-6 w-6 text-green-600" />
                    <span className="font-medium text-green-800">Formation obligatoire d'au moins une personne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Plan de Maîtrise Sanitaire */}
          <div id="pms" className="scroll-mt-20">
            <div className="text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-4 py-2">
                  <FileText className="h-4 w-4 mr-2" />
                  Plan de Maîtrise Sanitaire
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Le PMS : Pilier de Votre Conformité
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Le Plan de Maîtrise Sanitaire regroupe l'ensemble des mesures nécessaires pour assurer l'hygiène et la sécurité alimentaire.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Bonnes Pratiques d'Hygiène",
                  description: "BPH/GBPH pour assurer l'hygiène générale",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: FileText,
                  title: "Procédures HACCP",
                  description: "Analyse, CCP, surveillance et documentation",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: Clock,
                  title: "Traçabilité & Archivage",
                  description: "Gestion des lots et archivage 3 ans minimum",
                  color: "from-purple-500 to-violet-600"
                }
              ].map((item) => (
                <Card key={item.title} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 4. Gestion des nuisibles */}
          <div id="nuisibles" className="scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 px-4 py-2">
                    <Bug className="h-4 w-4 mr-2" />
                    Gestion des Nuisibles
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Dératisation & Désinsectisation
                  </h2>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Le règlement impose d'inclure dans le PMS un plan de lutte anti-nuisibles couvrant rongeurs, 
                  insectes volants et rampants.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6">
                    <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Mesures Préventives
                    </h3>
                    <ul className="space-y-2 text-sm text-orange-700">
                      <li>• Scellement des ouvertures</li>
                      <li>• Barrières physiques</li>
                      <li>• Contrôle des accès</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Lutte Active
                    </h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Appâts et pièges</li>
                      <li>• Traitements chimiques</li>
                      <li>• Surveillance constante</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 rounded-3xl p-8 border border-orange-200 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Fréquence Planifiée</h3>
                <div className="space-y-4">
                  {[
                    { label: "Minimum annuel", status: "Obligatoire", color: "from-red-500 to-pink-600" },
                    { label: "Ajustement selon infestation", status: "Recommandé", color: "from-orange-500 to-amber-600" },
                    { label: "Contrôle des produits biocides", status: "Obligatoire", color: "from-red-500 to-pink-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/60 rounded-xl">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <Badge className={`bg-gradient-to-r ${item.color} text-white border-0`}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. Fréquences & obligations de contrôle */}
          <div id="frequences" className="scroll-mt-20">
            <div className="text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0 px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fréquences & Contrôles
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  📊 Fréquences & Obligations de Contrôle
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Tableau récapitulatif des contrôles obligatoires et recommandés pour votre établissement.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-violet-700 text-white">
                    <tr>
                      <th className="px-8 py-6 text-left font-bold text-lg">Type de contrôle</th>
                      <th className="px-8 py-6 text-left font-bold text-lg">Fréquence minimale recommandée</th>
                      <th className="px-8 py-6 text-center font-bold text-lg">Obligation légale ?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        type: "Formation HACCP",
                        frequence: "Avant embauche ou changement de poste",
                        obligation: "Oui (Règlement CE 852/2004)"
                      },
                      {
                        type: "Audit hygiène externe",
                        frequence: "1 à 2 fois par an",
                        obligation: "Recommandé"
                      },
                      {
                        type: "Dératisation / désinsectisation",
                        frequence: "Trimestrielle (lieux sensibles)",
                        obligation: "Oui (via PMS)"
                      },
                      {
                        type: "Nettoyage des extracteurs & hottes",
                        frequence: "Semestrielle ou annuelle",
                        obligation: "Oui (code du travail / sécurité incendie)"
                      },
                      {
                        type: "Contrôle des températures (frigos)",
                        frequence: "Quotidien",
                        obligation: "Oui"
                      },
                      {
                        type: "Enregistrement des livraisons",
                        frequence: "À chaque réception",
                        obligation: "Oui"
                      }
                    ].map((item, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors duration-200`}>
                        <td className="px-8 py-6 font-semibold text-gray-800">{item.type}</td>
                        <td className="px-8 py-6 text-gray-600">{item.frequence}</td>
                        <td className="px-8 py-6 text-center">
                          <Badge variant={item.obligation.includes("Oui") ? "default" : "secondary"} className="px-4 py-2">
                            {item.obligation}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 8. Détails du Plan de Maîtrise Sanitaire */}
          <div id="details-pms" className="scroll-mt-20">
            <div className="text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-4 py-2">
                  <Database className="h-4 w-4 mr-2" />
                  Détails PMS
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  📦 Détails du Plan de Maîtrise Sanitaire (PMS)
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Le PMS est le cœur du système de gestion de la sécurité alimentaire. Il inclut 4 volets principaux.
                </p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      Bonnes Pratiques d'Hygiène (BPH)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Hygiène du personnel",
                        "Nettoyage-désinfection",
                        "Maîtrise de la chaîne du froid",
                        "Gestion des flux (marche en avant)",
                        "Contrôle de l'eau et des déchets"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-green-800 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      Procédures fondées sur le HACCP
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Analyse des dangers",
                        "Détermination des CCP",
                        "Limites critiques",
                        "Plan de surveillance",
                        "Actions correctives et vérifications"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-purple-800 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                      Traçabilité
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Enregistrement des fournisseurs, des produits, des lots",
                        "Conservation des étiquetages",
                        "Registres de température, nettoyage, maintenance"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-red-50 to-rose-50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-800 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-white" />
                      </div>
                      Gestion des non-conformités
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Identification",
                        "Isolement",
                        "Traitement (retrait, destruction…)",
                        "Rapport écrit et mesures correctives"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-yellow-800 text-xl mb-3">📎 Documents à archiver</h3>
                  <p className="text-yellow-700 text-lg">
                    <strong>Minimum 3 ans</strong> (code de la consommation + règlement CE 178/2002).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Pourquoi passer par un expert */}
          <div id="expert" className="scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 px-4 py-2">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Pourquoi un Expert
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    📍 Pourquoi passer par un expert ?
                  </h2>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Une expertise HACCP permet de sécuriser votre activité et d'éviter les sanctions.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                      <CheckCircle className="h-5 w-5" />
                      Avantages d'une expertise HACCP
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Mettre votre établissement en conformité totale",
                        "Éviter les sanctions des services de la DDPP",
                        "Gagner du temps avec des outils prêts à l'emploi",
                        "Obtenir un agrément sanitaire plus rapidement"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                      <AlertTriangle className="h-5 w-5" />
                      Risques d'une erreur ou d'un oubli
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Une fermeture administrative immédiate",
                        "Des sanctions financières",
                        "Une perte de confiance des clients ou partenaires"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 border border-blue-200 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">🧠 À savoir</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: AlertTriangle,
                      text: "L'absence de PMS est la première cause de non-conformité relevée lors des contrôles sanitaires.",
                      color: "text-orange-600"
                    },
                    {
                      icon: Shield,
                      text: "En cas d'intoxication alimentaire, votre responsabilité pénale peut être engagée, même si vous êtes sous-traitant.",
                      color: "text-red-600"
                    },
                    {
                      icon: Users,
                      text: "Restaurants, traiteurs, boucheries, épiceries fines, foodtrucks, dark kitchens, etc., sont tous concernés.",
                      color: "text-blue-600"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                      <item.icon className={`h-6 w-6 ${item.color} mt-1 flex-shrink-0`} />
                      <p className="font-medium text-gray-800">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Importance de l'HACCP aujourd'hui */}
          <div id="importance" className="scroll-mt-20">
            <div className="text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  Importance Actuelle
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  L'HACCP : Une Norme Globale
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Depuis son adoption par des organisations comme l'OMS, la FAO et le Codex Alimentarius dans les années 1990, 
                  l'HACCP est devenu une norme globale.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: "OMS", description: "Organisation Mondiale de la Santé" },
                { name: "FAO", description: "Organisation des Nations Unies pour l'alimentation" },
                { name: "ISO 22000", description: "Système de management de la sécurité alimentaire" },
                { name: "FSMA", description: "Food Safety Modernization Act (États-Unis)" }
              ].map((org) => (
                <Card key={org.name} className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{org.name}</h3>
                    <p className="text-gray-600">{org.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-3xl p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">L'HACCP se Digitalise</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Aujourd'hui, l'HACCP se digitalise via des outils IoT et des logiciels exploitant l'IA, 
                offrant une surveillance en temps réel.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/solution-digitale" className="flex items-center gap-2">
                  Découvrir notre solution digitale
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* 6. Nos services d'accompagnement */}
          <div id="services" className="scroll-mt-20">
            <div className="text-center mb-16">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 px-4 py-2">
                  <Users className="h-4 w-4 mr-2" />
                  Nos Services
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Services d'Accompagnement Complet
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Nous vous accompagnons dans tous les aspects de votre conformité HACCP et réglementaire.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Formation HACCP",
                  description: "Formation adaptée aux obligations réglementaires",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: Shield,
                  title: "Audit & Diagnostic",
                  description: "Audit et diagnostic hygiène/PMS sur site",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: FileText,
                  title: "Conception PMS",
                  description: "Conception et mise à jour de PMS",
                  color: "from-purple-500 to-violet-600"
                },
                {
                  icon: Bug,
                  title: "Lutte Anti-nuisibles",
                  description: "Élaboration et suivi du plan de lutte",
                  color: "from-red-500 to-pink-600"
                },
                {
                  icon: Award,
                  title: "Agréments Sanitaires",
                  description: "Assistance à l'obtention des agréments",
                  color: "from-yellow-500 to-orange-600"
                },
                {
                  icon: Users,
                  title: "Conseil Architectural",
                  description: "Conformité des locaux et support administratif",
                  color: "from-teal-500 to-cyan-600"
                }
              ].map((service) => (
                <Card key={service.title} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/5 to-white/5"></div>
        
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            🎯 Besoin d'un Accompagnement HACCP ?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Nos experts vous accompagnent dans votre mise en conformité réglementaire 
            et la mise en place de votre système HACCP.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="/contact">Demander un accompagnement</Link>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Link href="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 