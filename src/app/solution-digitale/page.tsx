import {
  Tablet,
  Printer,
  Smartphone,
  Wifi,
  CheckCircle,
  Star,
  ArrowRight,
  Thermometer,
  ClipboardCheck,
  Camera,
  FileText,
  Users,
  Shield,
  Zap,
  Truck,
  Droplets,
  Snowflake,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const solutionComponents = [
  {
    icon: Tablet,
    title: "Tablette Dslide 114 Préconfigurée",
    description: "Tablette professionnelle robuste avec application HACCP préinstallée",
    features: [
      "Modèle Dslide 114 spécialement sélectionné",
      "Résistante aux projections et à l'humidité",
      "Autonomie longue durée pour usage intensif",
      "Application HACCP préinstallée et configurée",
      "Fonctionne sans connexion internet",
      "Support mural et support bureau inclus"
    ],
    specs: "Dslide 114 • Robuste • Autonome • Sans internet requis"
  },
  {
    icon: Printer,
    title: "Imprimante Zebra ZD421",
    description: "Imprimante d'étiquettes professionnelle pour la traçabilité complète",
    features: [
      "Impression thermique haute qualité",
      "Vitesse d'impression jusqu'à 152mm/s",
      "Connectivité WiFi et Bluetooth",
      "Compatible étiquettes alimentaires",
      "Interface simple et intuitive"
    ],
    specs: "Résolution 203 dpi • Largeur max 108mm • Connectée en WiFi"
  },
  {
    icon: Smartphone,
    title: "Application HACCP Embarquée",
    description: "Solution logicielle complète pour tous vos contrôles HACCP",
    features: [
      "Interface intuitive et ergonomique",
      "6 modules de contrôle intégrés",
      "Fonctionnement autonome sans internet",
      "Rapports et données stockés localement",
      "Support technique inclus"
    ],
    specs: "6 modules • Autonome • Données locales • Support professionnel"
  }
];

const modules = [
  {
    icon: Thermometer,
    title: "Relevés de Température",
    description: "Contrôle automatique avec seuils et alertes",
    color: "bg-blue-500"
  },
  {
    icon: ClipboardCheck,
    title: "Suivi des Nettoyages",
    description: "Planification et validation des tâches",
    color: "bg-green-500"
  },
  {
    icon: Camera,
    title: "Traçabilité Photo",
    description: "Capture et stockage des étiquettes",
    color: "bg-purple-500"
  },
  {
    icon: FileText,
    title: "Gestion Documentaire",
    description: "PMS et procédures intégrées",
    color: "bg-orange-500"
  },
  {
    icon: Users,
    title: "Registre RH",
    description: "Gestion du personnel et formations",
    color: "bg-cyan-500"
  },
  {
    icon: Shield,
    title: "Contrôles Qualité",
    description: "Réception et validation produits",
    color: "bg-red-500"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Efficacité Maximale",
    description: "Réduction de 80% du temps consacré aux contrôles HACCP",
    stat: "80%"
  },
  {
    icon: Wifi,
    title: "Fonctionne Sans Internet",
    description: "Autonomie complète, pas besoin de connexion pour travailler",
    stat: "100%"
  },
  {
    icon: Shield,
    title: "Conformité Garantie",
    description: "Respect automatique des normes HACCP et réglementations",
    stat: "100%"
  }
];

const haccpModules = [
  {
    id: "temperature-frigo",
    icon: Thermometer,
    title: "🌡️ Relevés de Température des Frigos",
    description: "Contrôle automatique avec seuils et alertes",
    details: [
      "Module intégré pour les contrôles tactiles",
      "Deux secondes suffisent pour relever la température",
      "Frigo, congélateur ou chambre froide",
      "Seuils configurables selon vos besoins",
      "Module essentiel de la méthode HACCP"
    ],
    features: [
      "⚡ Rapide (2 secondes)",
      "🎯 Seuils configurables",
      "📱 Interface tactile",
      "💾 Stockage local"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "controle-reception",
    icon: Truck,
    title: "📦 Contrôlez vos Réceptions",
    description: "Validation complète des livraisons",
    details: [
      "Module pour contrôler vos livraisons",
      "Notez le nom du fournisseur et le produit",
      "Marchandise conforme ou non conforme",
      "Température et numéro de bon de livraison",
      "Validation rapide et efficace"
    ],
    features: [
      "📋 Nom du fournisseur",
      "🌡️ Contrôle température",
      "📄 N° bon de livraison",
      "✅ Emballage conforme"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "tracabilite-photo",
    icon: Camera,
    title: "📸 Traçabilité avec Photos",
    description: "Capture et stockage des étiquettes",
    details: [
      "Module pour la traçabilité visuelle",
      "Fini les étiquettes sales à stocker !",
      "Une photo de votre étiquette = enregistrée",
      "Stockage local sur la tablette",
      "La traçabilité alimentaire simplifiée"
    ],
    features: [
      "📱 Photo instantanée",
      "🗂️ Stockage local",
      "🔍 Recherche rapide",
      "💾 Données sécurisées"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "huiles-cuisson",
    icon: Droplets,
    title: "🍟 Contrôlez vos Huiles de Cuisson",
    description: "Gestion des friteuses et changements",
    details: [
      "Module dédié pour vos friteuses",
      "Friteuse 1, 2, 3 ou plus...",
      "Conforme ou Non conforme",
      "Changé ou filtré",
      "Enregistrement en deux secondes"
    ],
    features: [
      "🔢 Multi-friteuses",
      "⚡ Saisie rapide",
      "📊 Historique local",
      "✅ Suivi efficace"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "nettoyage",
    icon: ClipboardCheck,
    title: "🧽 Suivi du Nettoyage",
    description: "Planification et validation des tâches",
    details: [
      "Votre nettoyage est fini ?",
      "Dirigez-vous vers votre tablette",
      "En quelques clics validez les surfaces",
      "Fini vos papiers interminables",
      "Propre, non ?"
    ],
    features: [
      "📋 Planning intégré",
      "✅ Validation surfaces",
      "⏰ Rappels automatiques",
      "📄 Plus de papier"
    ],
    gradient: "from-teal-500 to-green-500"
  }
];

export default function SolutionDigitalePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primary/10 dark:to-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Solution Clé en Main
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Solution <span className="text-primary">Digitale</span> Complète
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Tablette Android préconfigurée + Imprimante Zebra ZD421 + Application HACCP embarquée.
                Tout ce dont vous avez besoin pour digitaliser vos contrôles HACCP.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Demander une démonstration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-background rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <Tablet className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium">Tablette</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">+</div>
                  <div className="flex flex-col items-center gap-2">
                    <Printer className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium">Imprimante</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">+</div>
                  <div className="flex flex-col items-center gap-2">
                    <Smartphone className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium">Application</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Components */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Composants de la Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une solution complète pensée pour les professionnels de l'alimentaire,
              prête à l'emploi dès réception.
            </p>
          </div>

          <div className="space-y-8">
            {solutionComponents.map((component, index) => (
              <Card key={component.title} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <CardHeader className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <component.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{component.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{component.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {component.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center bg-secondary/20">
                    <div className="text-center p-8">
                      <component.icon className="h-24 w-24 text-primary mx-auto mb-4" />
                      <Badge variant="outline" className="text-xs">
                        {component.specs}
                      </Badge>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Modules de l'Application
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              16 modules spécialisés pour couvrir tous vos besoins HACCP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card key={module.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`inline-flex p-4 rounded-full ${module.color} bg-opacity-10 mx-auto mb-4`}>
                    <module.icon className={`h-8 w-8 ${module.color.replace('bg-', 'text-')}`} />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules HACCP Détaillés */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/10">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              🔧 Les 6 Modules HACCP Intégrés
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les 6 modules embarqués dans votre tablette Dslide 114.
              Solution complète fonctionnant sans connexion internet.
            </p>
          </div>

          <div className="space-y-12">
            {haccpModules.map((module, index) => (
              <Card key={module.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <CardHeader className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-lg bg-gradient-to-r ${module.gradient} text-white`}>
                          <module.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{module.title}</CardTitle>
                          <p className="text-muted-foreground mt-2">{module.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {module.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {module.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="justify-start text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">✨ Solution autonome et complète !</h3>
              <p className="text-muted-foreground">
                Ces 6 modules couvrent l'essentiel de vos besoins HACCP quotidiens.
                La tablette fonctionne sans connexion internet pour une utilisation en toute autonomie.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">
                🎯 Obtenir cette solution clé en main
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Avantages Concrets
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="relative inline-flex p-6 bg-primary/10 rounded-full mb-6">
                  <benefit.icon className="h-12 w-12 text-primary" />
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {benefit.stat}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Prêt à Digitaliser Vos Contrôles ?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Recevez votre solution complète prête à l'emploi. Installation et formation incluses.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Livraison et installation sur site",
                  "Formation de vos équipes",
                  "Support technique inclus",
                  "Fonctionne sans connexion internet",
                  "Garantie constructeur"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 opacity-90" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Obtenir un devis
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/contact">
                    Demander une démonstration
                  </Link>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-4 p-8 bg-primary-foreground/10 rounded-3xl backdrop-blur-sm">
                <Star className="h-16 w-16 text-yellow-400" />
                <div className="text-left">
                  <div className="text-3xl font-bold">Solution</div>
                  <div className="text-xl opacity-90">Clé en Main</div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Service certifié Qualiopi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
