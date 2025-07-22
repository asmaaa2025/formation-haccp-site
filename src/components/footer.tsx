import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo BEKKA Formation" width={48} height={48} />
              <span className="text-lg font-bold whitespace-nowrap">Conseil & Formation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert en hygiène et sécurité alimentaire depuis 15 ans.
              Solutions complètes pour la conformité de votre établissement.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Formations HACCP</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Audits de conformité</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Contrôles microbiologiques</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Plans de maîtrise sanitaire</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Agrément sanitaire</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Accompagnement contrôle</Link></li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Solution Digitale</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solution-digitale" className="text-muted-foreground hover:text-primary transition-colors">Tablette préconfigurée</Link></li>
              <li><Link href="/solution-digitale" className="text-muted-foreground hover:text-primary transition-colors">Imprimante Zebra</Link></li>
              <li><Link href="/solution-digitale" className="text-muted-foreground hover:text-primary transition-colors">Application HACCP</Link></li>
              <li><Link href="/solution-digitale" className="text-muted-foreground hover:text-primary transition-colors">Modules de contrôle</Link></li>
              <li><Link href="/solution-digitale" className="text-muted-foreground hover:text-primary transition-colors">Traçabilité complète</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">0695178110</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:gestion.beka@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  gestion.beka@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Certifications et Agréments */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">🏆 Certifications & Agréments</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-green-600">✓</span>
                  <span>Organisme certifié Qualiopi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-600">📋</span>
                  <span>N° d'enregistrement DRAAF : ROFHYA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-purple-600">📅</span>
                  <span>Formations conformes à l'Arrêté du 8 février 2024</span>
                </div>
              </div>
            </div>
                            <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                    <Image 
                      src="/logo_qualiopi.png" 
                      alt="Logo Qualiopi" 
                      width={40} 
                      height={40} 
                      className="object-contain"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-green-800 text-sm">Qualiopi</div>
                      <div className="text-xs text-green-600">Certification qualité</div>
                    </div>
                  </div>
                </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2025 Beka Formation. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgv" className="hover:text-primary transition-colors">
              CGV
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
