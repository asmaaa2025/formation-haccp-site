import {
  GraduationCap,
  Shield,
  Microscope,
  FileText,
  Award,
  Users,
  Building,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  BookOpen,
  Bug
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "formations-haccp",
    icon: GraduationCap,
    title: "Formations HACCP",
    description: "Formations adaptées à votre secteur d'activité",
    details: [
      "Formation HACCP en initiale présentiel (14h)",
      "Formation sur site dans vos locaux en intra-entreprise",
      "Recyclage en hygiène alimentaire (7h)",
      "Formation personnalisée par secteur",
    ],
    duration: "7h à 14h",
    format: "Présentiel & Sur site",
    badge: "Le plus demandé"
  },
  {
    id: "accompagnement-controle",
    icon: Shield,
    title: "Accompagnement Contrôle Services d'Hygiène",
    description: "Support complet en cas de contrôle des autorités",
    details: [
      "Prise en charge du procès-verbal",
      "Analyse des non-conformités relevées",
      "Rédaction des réponses et correctifs",
      "Correspondance et échange avec le service d'hygiène",
      "Apport des preuves des rectificatifs effectués"
    ],
    duration: "Variable selon la complexité",
    format: "Accompagnement juridique",
    badge: "Urgence"
  },
  {
    id: "audits-conformite",
    icon: Shield,
    title: "Audits de Conformité",
    description: "Évaluation complète de vos pratiques HACCP",
    details: [
      "Audit des procédures existantes",
      "Analyse des points critiques",
      "Rapport détaillé avec recommandations",
      "Plan d'actions correctives",
      "Suivi post-audit"
    ],
    duration: "Variable",
    format: "Sur site uniquement",
    frequency: "2 à 3 passages par an",
    badge: "Expertise"
  },
  {
    id: "controles-microbiologiques",
    icon: Microscope,
    title: "Contrôles Microbiologiques",
    description: "Analyses des produits finis et surfaces",
    details: [
      "Prélèvements produits finis",
      "Analyses de surfaces",
      "Tests de contamination",
      "Rapports d'analyses certifiés",
      "Interprétation des résultats"
    ],
    duration: "Variable",
    format: "Laboratoire agréé",
    frequency: "2 à 3 passages par an",
    badge: "Certification"
  },
  {
    id: "pms",
    icon: FileText,
    title: "Plans de Maîtrise Sanitaire",
    description: "Conception et mise en place de votre PMS",
    details: [
      "Analyse de votre activité",
      "Rédaction du PMS complet",
      "Procédures opérationnelles",
      "Documents de traçabilité",
      "Formation à l'utilisation"
    ],
    duration: "Variable",
    format: "Sur mesure",
    badge: "Personnalisé"
  },
  {
    id: "agrement-sanitaire",
    icon: Award,
    title: "Aide à l'Obtention d'Agrément Sanitaire",
    description: "Accompagnement pour votre dossier d'agrément",
    details: [
      "Constitution du dossier",
      "Vérification des prérequis",
      "Accompagnement administratif",
      "Préparation à l'inspection",
      "Suivi jusqu'à l'obtention"
    ],
    duration: "Variable",
    format: "Accompagnement",
    badge: "Garantie résultat"
  },
  {
    id: "duerp",
    icon: Users,
    title: "Évaluation des Risques Professionnels (DUERP)",
    description: "Document unique obligatoire",
    details: [
      "Identification des risques",
      "Évaluation et cotation",
      "Plan de prévention",
      "Document unique réglementaire",
      "Mise à jour annuelle"
    ],
    duration: "Variable",
    format: "Sur site",
    badge: "Obligatoire"
  },
  {
    id: "accompagnement-architectes",
    icon: Building,
    title: "Accompagnement d'Architectes",
    description: "Conception d'aménagements conformes",
    details: [
      "Respect de la marche en avant",
      "Zones de réception et stockage",
      "Circuits de nettoyage",
      "Validation des plans",
      "Suivi de chantier"
    ],
    duration: "Variable",
    format: "Conseil",
    badge: "Expertise technique"
  },
  {
    id: "deratisation",
    icon: Bug,
    title: "Dératisation et lutte anti-nuisibles",
    description: "Prévention et maîtrise des nuisibles",
    details: [
      "Évaluation du risque nuisibles sur site",
      "Mise en place d’un plan de lutte intégré (IPM)",
      "Choix des appâts et pièges adaptés",
      "Traçabilité et enregistrement des actions",
      "Suivi réglementaire et mise en conformité"
    ],
    duration: "1 à 2 jours selon le site",
    format: "Service + Conseil",
    frequency: "2 à 3 passages par an",
    badge: "Hygiène & sécurité"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primary/10 dark:to-secondary/10">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Services Professionnels
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="text-primary">Services</span> Experts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Une gamme complète de services pour assurer la conformité, la sécurité
            et l'excellence de votre établissement alimentaire. 15 ans d'expertise
            à votre service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solution-digitale">
                Voir la solution digitale
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{service.format}</span>
                    </div>
                    {service.frequency && (
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{service.frequency}</span>
                      </div>
                    )}
                  </div>

                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">
                      Demander des informations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Agréments */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              🏆 Certifications & Agréments Officiels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos formations sont reconnues et certifiées par les autorités compétentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image 
                      src="/logo_qualiopi.png" 
                      alt="Logo Qualiopi" 
                      width={48} 
                      height={48} 
                      className="object-contain"
                    />
                  </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Certification Qualiopi</h3>
              <p className="text-gray-600 mb-4">Organisme certifié pour la qualité de nos formations professionnelles</p>
              <div className="text-sm text-green-600 font-medium">✓ Certification en cours</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">N° ROFHYA</h3>
              <p className="text-gray-600 mb-4">Numéro d'enregistrement DRAAF attribué au niveau régional</p>
              <div className="text-sm text-blue-600 font-medium">✓ Enregistrement validé</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Conformité 2024</h3>
              <p className="text-gray-600 mb-4">Formations conformes à l'Arrêté du 8 février 2024</p>
              <div className="text-sm text-purple-600 font-medium">✓ Réglementation à jour</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
              <span className="text-2xl">🎯</span>
              
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pourquoi Nous Choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "15 ans d'Expérience",
                description: "Une expertise reconnue dans le domaine de l'hygiène alimentaire et de la formation HACCP."
              },
              {
                icon: Users,
                title: "Approche Personnalisée",
                description: "Chaque intervention est adaptée à votre secteur d'activité et vos besoins spécifiques."
              },
              {
                icon: Award,
                title: "Certification Qualité",
                description: "Organisme certifié Qualiopi pour la qualité de nos formations professionnelles."
              }
            ].map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Besoin d'un Service Spécifique ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour discuter de vos besoins spécifiques.
            Nous proposons également des solutions sur mesure.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Contactez nos experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
