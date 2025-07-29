import Link from "next/link";
import { CheckCircle, Shield, Users, ArrowRight, Microscope, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEKA Formation HACCP - Expert en Hygiène et Sécurité Alimentaire | 15 ans d'expérience",
  description: "Formations HACCP certifiées Qualiopi, audits de conformité, contrôles microbiologiques. Expert en hygiène alimentaire depuis 15 ans. Devis gratuit et accompagnement personnalisé.",
  keywords: "formation HACCP, hygiène alimentaire, sécurité alimentaire, audit conformité, PMS, agrément sanitaire, DUERP, contrôle microbiologique, lutte anti-nuisibles, conseil architectural, formation continue, certification Qualiopi",
  openGraph: {
    title: "BEKA Formation HACCP - Expert en Hygiène et Sécurité Alimentaire",
    description: "Formations HACCP certifiées Qualiopi, audits de conformité, contrôles microbiologiques. Expert en hygiène alimentaire depuis 15 ans. Devis gratuit.",
    url: "https://bekaformation.fr",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="h-3 w-3 mr-1" />
                  15 ans d'expérience
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-300/30">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Certifié Qualiopi
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Expert en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Hygiène & Sécurité
                </span>{" "}
                Alimentaire
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                Formations HACCP certifiées, audits de conformité et accompagnement personnalisé.
                Votre partenaire de confiance pour la mise en conformité de votre établissement.
              </p>
              
              {/* Certification Qualiopi */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="flex items-center gap-4 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300">
                  <Image 
                    src="/logo_qualiopi.png" 
                    alt="Logo Qualiopi - Certification formation professionnelle" 
                    width={80} 
                    height={80} 
                    className="object-contain"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white text-lg">Organisme certifié Qualiopi</div>
                    <div className="text-blue-200 text-sm">Formation professionnelle reconnue</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                  <Link href="/contact">
                    Obtenir un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Formations réalisées</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200">Satisfaction client</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">15</div>
                <div className="text-blue-200">Années d'expérience</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-blue-200">Réponse garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Link href="/services" className="block group">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors cursor-pointer">
                🚀 Nos Services Professionnels
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto group-hover:text-primary/80 transition-colors">
                Une gamme complète de services pour assurer la conformité et l'excellence
                de votre établissement alimentaire
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-6 w-6 text-primary mx-auto" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "📚 Formations HACCP",
                description: "Présentiel et sur site, adaptées à votre secteur d'activité",
                color: "text-blue-500",
                bgColor: "bg-blue-50"
              },
              {
                icon: CheckCircle,
                title: "✅ Audits de Conformité",
                description: "Évaluation complète de vos pratiques et procédures",
                color: "text-green-500",
                bgColor: "bg-green-50"
              },
              {
                icon: Microscope,
                title: "🔬 Contrôle Microbiologique",
                description: "Prélèvements de surface et analyses microbiologiques",
                color: "text-red-500",
                bgColor: "bg-red-50"
              },
              {
                icon: Users,
                title: "🤝 Accompagnement",
                description: "Support personnalisé pour vos projets d'aménagement",
                color: "text-purple-500",
                bgColor: "bg-purple-50"
              }
            ].map((service) => (
              <Link key={service.title} href="/services" className="block">
                <Card className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-white/80 hover:bg-white hover:scale-105">
                  <CardHeader>
                    <div className={`mx-auto w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            🎯 Prêt à Moderniser Votre Approche HACCP ? 🚀
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour une démonstration personnalisée et découvrez 
            comment nous pouvons simplifier votre conformité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Demander une démonstration
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 