import Link from "next/link";
import { CheckCircle, Shield, Users, Award, ArrowRight, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                15 ans d'expérience
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                🧑‍🍳 Expert en{" "}
                <span className="text-primary">Hygiène & Sécurité</span>{" "}
                Alimentaire 🛡️
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Formations HACCP, audits de conformité et solution numérique complète.
                Accompagnement professionnel pour la mise en conformité de votre établissement.
              </p>
              
              {/* Certification Qualiopi */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="flex items-center gap-4 px-6 py-4 bg-green-50 border-2 border-green-200 rounded-xl shadow-lg">
                  <Image 
                    src="/logo_qualiopi.png" 
                    alt="Logo Qualiopi" 
                    width={96} 
                    height={96} 
                    className="object-contain"
                  />
                  <div className="text-left">
                    <div className="font-bold text-green-800 text-lg">Organisme certifié Qualiopi</div>
    
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Obtenir un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
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
                color: "text-blue-500"
              },
              {
                icon: CheckCircle,
                title: "✅ Audits de Conformité",
                description: "Évaluation complète de vos pratiques et procédures",
                color: "text-green-500"
              },
              {
                icon: Microscope,
                title: "🔬 Contrôle Microbiologique",
                description: "Prélèvements de surface et analyses microbiologiques",
                color: "text-red-500"
              },
              {
                icon: Users,
                title: "🤝 Accompagnement",
                description: "Support personnalisé pour vos projets d'aménagement",
                color: "text-purple-500"
              },
              {
                icon: Award,
                title: "💻 Solution Digitale",
                description: "Tablette + imprimante + application HACCP complète",
                color: "text-orange-500"
              }
            ].map((service) => (
              <Link key={service.title} href="/services" className="block">
                <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">{service.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-5 w-5 text-primary mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Digitale Preview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Innovation
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                💻 Solution Digitale <span className="text-primary">Complète</span> ⚡
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Notre solution clé en main comprend une tablette Dslide 114 préconfigurée,
                une imprimante Zebra ZD421 et une application HACCP avec 6 modules intégrés
                pour digitaliser vos contrôles essentiels. Fonctionne sans connexion internet.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "🌡️ Relevés de température avec seuils automatiques",
                  "🧽 Suivi des nettoyages et validations",
                  "🍟 Gestion des friteuses et changements d'huile",
                  "📦 Contrôle des réceptions avec traçabilité",
                  "📸 Traçabilité photo des étiquettes",
                  "❄️ Suivi des refroidissements rapides"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link href="/solution-digitale">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-8 border border-blue-200 dark:border-transparent">
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">🌡️ Température Frigo #1</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">4.2°C</div>
                  <div className="text-sm text-green-600">✅ Conforme - Mise à jour il y a 5 min</div>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">🧽 Nettoyage Cuisine</span>
                  </div>
                  <div className="text-sm text-blue-600">⏰ Planifié à 14h30 - En attente</div>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">📦 Réception Marchandises</span>
                  </div>
                  <div className="text-sm text-orange-600">📋 3 produits en attente de contrôle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients qui nous ont fait confiance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold">🏆</span>
              <span className="text-primary font-semibold text-sm">Références clients</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ils nous ont fait confiance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plus de <span className="font-bold text-primary">500 entreprises</span> nous ont choisis pour leur formation HACCP
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">15 ans d'expérience</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">98% de satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {/* Point B */}
            <div className="group relative">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <Image 
                      src="/pointb_logo-988x1024.png" 
                      alt="Logo Point B" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center text-gray-800">Point B</span>
              </div>
            </div>

            {/* Gladalle */}
            <div className="group relative">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <Image 
                      src="/G_La_Dalle.svg.png" 
                      alt="Logo Gladalle" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center text-gray-800">Gladalle</span>
              </div>
            </div>

            {/* Crousti Poulet */}
            <div className="group relative">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <Image 
                      src="/croustipoulet.png" 
                      alt="Logo Crousti Poulet" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center text-gray-800">Crousti Poulet</span>
              </div>
            </div>

            {/* Bangkok Factory */}
            <div className="group relative">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <Image 
                      src="/bangkokfactory.png.webp" 
                      alt="Logo Bangkok Factory" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center text-gray-800">Bangkok Factory</span>
              </div>
            </div>

            {/* Boulangeries */}
            <div className="group relative">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <Image 
                      src="/boulanger-logo.jpg" 
                      alt="Logo Boulangeries" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center text-gray-800">Boulangeries</span>
              </div>
            </div>

            {/* Boucheries */}
            <div className="group relative">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow p-2">
                    <Image 
                      src="/boucherie.png.webp" 
                      alt="Logo Boucheries" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center text-gray-800">Boucheries</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <span className="text-sm font-medium text-gray-700">Et bien d'autres établissements</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏪</span>
                <span className="text-sm font-medium text-gray-700">Restauration, traiteurs, industries</span>
              </div>
            </div>
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
            Contactez-nous pour une démonstration personnalisée de notre solution
            et découvrez comment nous pouvons simplifier votre conformité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Demander une démonstration
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/solution-digitale">
                Découvrir la solution complète
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 