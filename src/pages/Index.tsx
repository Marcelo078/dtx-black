import { useEffect } from "react";
import Hero from "@/components/Hero";
import WhyDtx from "@/components/WhyDtx";
import Results from "@/components/Results";
import Ingredients from "@/components/Ingredients";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import ProductSummary from "@/components/ProductSummary";

const Index = () => {
  useEffect(() => {
    // Schema.org Product markup for SEO and LLMs
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "DTX Black",
      "image": "https://dtxblack.com.br/dtx-produto.jpg",
      "description": "Suplemento detox 100% natural que elimina toxinas, acelera o metabolismo e promove emagrecimento saudável. Aprovado pela ANVISA.",
      "brand": {
        "@type": "Brand",
        "name": "DTX Black"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2847"
      },
      "offers": {
        "@type": "AggregateOffer",
        "url": "https://app.monetizze.com.br/r/AZW15606936",
        "priceCurrency": "BRL",
        "lowPrice": "19.88",
        "highPrice": "39.96",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31"
      }
    });
    document.head.appendChild(script);

    // FAQ Schema for rich snippets
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como funciona o DTX Black?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O DTX Black funciona através de uma fórmula natural que combina ingredientes detoxificantes e termogênicos. Ele acelera o metabolismo, ajuda a eliminar toxinas acumuladas no organismo, melhora o funcionamento intestinal e promove a queima de gordura de forma natural e segura."
          }
        },
        {
          "@type": "Question",
          "name": "Em quanto tempo verei resultados?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os resultados variam de pessoa para pessoa, mas a maioria dos usuários relata mudanças perceptíveis nas primeiras 2 semanas de uso, como redução do inchaço e melhora na disposição. Resultados mais significativos de perda de peso são observados após 30 dias de uso contínuo."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <WhyDtx />
      <Results />
      <Ingredients />
      <Pricing />
      <Guarantee />
      <ProductSummary />
      <FAQ />
    </main>
  );
};

export default Index;
