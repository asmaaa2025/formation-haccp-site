import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/nouveau_logo.jpeg" alt="Logo BEKA Formation" width={70} height={70} />
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
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Formation extincteur</Link></li>
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
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800">🏆 Certifications & Agréments</h3>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-3 text-sm flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-blue-600">📋</span>
                  <span>N° d'enregistrement DRAAF : ROFHYA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-purple-600">📅</span>
                  <span>Formations conformes à l'Arrêté du 8 février 2024</span>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-gray-200">
                  <span className="font-medium text-green-600">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Certification Qualiopi</p>
                    <p className="text-xs text-gray-600">
                      Organisme de formation <span className="font-semibold text-green-700">certifié Qualiopi</span> pour les actions de formation.
                    </p>
                    <p className="text-xs text-green-700 font-medium mt-1">Certification officielle République Française</p>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 justify-center md:justify-end">
                <div className="bg-white rounded-lg p-3 shadow-md border border-green-200">
                  <Image
                    src="/logo_qualiopi.png"
                    alt="Certification Qualiopi - République Française"
                    width={140}
                    height={80}
                    className="h-auto w-auto max-w-[140px] rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200 w-full min-w-0">
              <p className="text-xs text-muted-foreground mb-3 text-center md:text-left">
                Enregistrement DRAAF (visuel officiel)
              </p>
              {/* Fichier source : 774×117 px (bandeau paysage) — pleine largeur du bloc */}
              <div className="rounded-lg bg-slate-50 px-2 py-3 sm:px-4 sm:py-4 border border-blue-100">
                <Image
                  src="/DRIAAF.png"
                  alt="Bandeau officiel — enregistrement DRAAF"
                  width={774}
                  height={117}
                  sizes="(max-width: 768px) 100vw, min(1200px, 100vw - 2rem)"
                  className="block w-full h-auto max-w-none object-contain object-left"
                />
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
