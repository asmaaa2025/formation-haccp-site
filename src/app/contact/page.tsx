import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Building,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            📞 Contactez-nous
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Parlons de Votre <span className="text-blue-300">Projet</span> 💬
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner
            dans vos projets HACCP et de mise en conformité. Contactez-nous pour
            un devis gratuit ou une démonstration personnalisée.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    📍 Nos Coordonnées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500 text-white rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">📞 Téléphone</h3>
                      <p className="text-muted-foreground text-lg">0695178110</p>
                      <p className="text-sm text-muted-foreground">Appelez-nous directement pour un échange rapide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500 text-white rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">📧 Email</h3>
                      <p className="text-muted-foreground text-lg">gestion.beka@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Envoyez-nous un email pour plus de détails</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500 text-white rounded-lg">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">🕒 Horaires de contact</h3>
                      <p className="text-muted-foreground">Lundi - Vendredi : 9h00 - 18h00</p>
                      <p className="text-sm text-muted-foreground">Nous répondons également en dehors de ces horaires</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                    ✅ Nos Engagements
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Réponse garantie sous 24h</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Devis gratuit et personnalisé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>15 ans d'expérience certifiée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Satisfaction client garantie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Accompagnement personnalisé</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Certifications Officielles */}
              <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    🏆 Certifications Officielles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg border border-green-100">
                    <Image
                      src="/logo_qualiopi.png"
                      alt="Certification Qualiopi - République Française"
                      width={140}
                      height={80}
                      className="h-auto w-auto max-w-[140px] rounded-md bg-white p-2 shadow-sm"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-green-800 mb-2">Certification Qualiopi</p>
                      <p className="text-xs text-gray-600">
                        Organisme de formation <span className="font-semibold">certifié Qualiopi</span> pour les actions de formation
                      </p>
                      <p className="text-xs text-green-700 font-medium mt-2">✓ Certification officielle République Française</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-blue-600">📋</span>
                      <span>N° d'enregistrement DRAAF : ROFHYA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-purple-600">📅</span>
                      <span>Formations conformes à l'Arrêté du 8 février 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Services Overview */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    🎯 Nos Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🎓 Formation HACCP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🔍 Audit de conformité</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🔬 Contrôles microbiologiques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>📋 Plan de maîtrise sanitaire</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🏅 Aide à l'obtention d'agrément sanitaire</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🐛 Lutte anti-nuisibles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🏗️ Conseil architectural</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>🚨 Accompagnement contrôle services d'hygiène</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>📱 Solution digitale HACCP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-4 text-xl">
                    🚀 Prêt à commencer ?
                  </h3>
                  <p className="mb-4">
                    Contactez-nous dès maintenant pour un accompagnement personnalisé
                    et un devis gratuit adapté à vos besoins.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">📞 0695178110</p>
                    <p className="font-semibold">📧 gestion.beka@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
