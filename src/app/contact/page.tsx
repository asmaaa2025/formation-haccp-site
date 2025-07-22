"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(data.error || 'Erreur lors de l\'envoi du message.');
      }
    } catch (err) {
      setError('Erreur lors de l\'envoi du message.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  📝 Demande de Contact
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et nous vous recontactons sous 24h
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Merci ! 🎉</h3>
                    <p className="text-muted-foreground">
                      Votre message a été envoyé. Nous vous recontacterons rapidement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="text-red-600 text-center text-sm font-semibold">{error}</div>
                    )}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <User className="h-4 w-4 text-blue-500" />
                          Nom et Prénom *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Mail className="h-4 w-4 text-green-500" />
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Phone className="h-4 w-4 text-purple-500" />
                          Téléphone
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="01 23 45 67 89"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Building className="h-4 w-4 text-orange-500" />
                          Entreprise
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-cyan-500" />
                        Sujet de votre demande *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full p-3 border rounded-md"
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="formation-haccp">🎓 Formation HACCP</option>
                        <option value="audit-conformite">🔍 Audit de conformité</option>
                        <option value="controles-microbiologiques">🔬 Contrôles microbiologiques</option>
                        <option value="pms">📋 Plan de maîtrise sanitaire</option>
                        <option value="agrement-sanitaire">🏅 Aide à l'obtention d'agrément sanitaire</option>
                                        <option value="lutte-anti-nuisibles">🐛 Lutte anti-nuisibles</option>
                <option value="conseil-architectural">🏗️ Conseil architectural</option>
                <option value="accompagnement-controle">🚨 Accompagnement contrôle services d'hygiène</option>
                <option value="solution-digitale">📱 Solution digitale HACCP</option>
                <option value="autre">💬 Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet ou votre besoin..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer ma demande
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    📍 Nos Coordonnées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500 text-white rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">📞 Téléphone</h3>
                      <p className="text-muted-foreground">0695178110</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500 text-white rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">📧 Email</h3>
                      <p className="text-muted-foreground">gestion.beka@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    ✅ Nos Engagements
                  </h3>
                  <ul className="space-y-2 text-sm">
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
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
