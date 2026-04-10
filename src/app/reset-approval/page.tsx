import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset approval",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResetApprovalPage() {
  return (
    <div className="container px-4 mx-auto py-16">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">Reset approval</h1>
        <p className="text-muted-foreground">
          Point d’accès technique utilisé pour réinitialiser une approbation.
        </p>
        <p className="text-sm text-muted-foreground">
          Si tu vois ce message, la route fonctionne correctement.
        </p>
      </div>
    </div>
  );
}

