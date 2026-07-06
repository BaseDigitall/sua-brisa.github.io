import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  MessageCircle,
  ArrowRight,
  Star,
  ChevronDown,
  Check,
  Package,
  Leaf,
  Flame,
  Sparkles,
  Award,
} from "lucide-react";

export default function SuaBrisaLandingPage() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppRedirect = (productName = "") => {
    const message = productName
      ? `Salve! Quero garantir meu ${productName} na Sua Brisa.`
      : `Salve! Quero conhecer o catálogo exclusivo da Sua Brisa.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isAgeVerified) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl p-4">
        <div className="bg-zinc-900 border border-zinc-800/80 p-8 md:p-10 rounded-3xl max-w-md w-full shadow-2xl shadow-orange-950/40 text-center transform transition-all animate-fade-in-up">
          <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-400 mx-auto mb-6 border border-orange-500/20">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
            Conteúdo Restrito
          </h2>
          <p className="text-zinc-400 mb-8 text-sm md:text-base leading-relaxed">
            O site da Sua Brisa contém produtos destinados exclusivamente a
            maiores de idade. Você tem 18 anos ou mais?
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsAgeVerified(true)}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.25)] active:scale-[0.98]"
            >
              Sim, possuo +18 anos
            </button>
            <button
              onClick={() => (window.location.href = "https://google.com")}
              className="w-full py-4 px-6 bg-zinc-800 hover:bg-zinc-700/80 text-zinc-400 hover:text-white font-medium rounded-xl transition-all duration-300"
            >
              Não, sou menor de idade
            </button>
          </div>
          <p className="text-zinc-600 text-xs mt-6">
            Aprecie com moderação e responsabilidade.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* Glows Ambientais Premium */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-orange-600/10 to-amber-600/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Sticky Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-zinc-950/75 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white">
            Sua
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Brisa
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a
              href="#diferenciais"
              className="hover:text-orange-400 transition-colors"
            >
              Diferenciais
            </a>
            <a
              href="#produtos"
              className="hover:text-orange-400 transition-colors"
            >
              Coleção Premium
            </a>
            <a
              href="#beneficios"
              className="hover:text-orange-400 transition-colors"
            >
              Benefícios
            </a>
            <a href="#faq" className="hover:text-orange-400 transition-colors">
              FAQ
            </a>
          </div>
          <button
            onClick={() => handleWhatsAppRedirect()}
            className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all backdrop-blur-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-orange-400" />
            Catálogo Completo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" /> Curadoria Exclusiva para sua
          Experiência
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 max-w-4xl animate-fade-in-up">
          Não é deles, nem nossa.
          <br />
          Mas sim{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
            Sua, Sua Brisa.
          </span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          A tabacaria que entende o seu momento. Produtos premium selecionados
          sob os mais altos padrões de qualidade, entrega ultra-rápida e sigilo
          absoluto.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <button
            onClick={() => handleWhatsAppRedirect()}
            className="group w-full sm:w-auto relative flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-zinc-950 px-8 py-4 rounded-full font-black text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] active:scale-[0.98]"
          >
            Garantir Meu Kit{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-8 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-400 text-sm font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Zap className="text-orange-400 w-5 h-5" /> Envio Expresso via Pix
          </div>
          <div className="flex items-center gap-2">
            <Shield className="text-orange-400 w-5 h-5" /> Embalagem 100%
            Discreta
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-orange-400 w-5 h-5" /> Qualidade Selecionada
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="diferenciais"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            O Padrão Sua Brisa
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base">
            Criamos um ecossistema focado no que realmente importa: seu ritual,
            sua privacidade e excelência.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Acessórios de Elite",
              desc: "Trabalhamos exclusivamente com vidros borossilicato de alta resistência, sedas de celulose orgânica pura e trituradores usinados em alumínio aeronáutico.",
              icon: Flame,
            },
            {
              title: "Checkout Humano e Direto",
              desc: "Sem processos exaustivos ou cadastros lentos. Escolha o item desejado, finalize no WhatsApp em segundos via Pix e receba instantaneamente.",
              icon: Zap,
            },
            {
              title: "Privacidade Garantida",
              desc: "Sabemos que o ritual é íntimo. Nossos pacotes de envio são totalmente descaracterizados, sem qualquer logo ou menção externa ao conteúdo.",
              icon: Shield,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900/80 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase */}
      <section
        id="produtos"
        className="py-24 bg-zinc-900/20 border-y border-white/5 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Vitrinas em Destaque
              </h2>
              <p className="text-zinc-400 max-w-xl text-sm md:text-base">
                Peças e combinações cuidadosamente separadas para elevar a sua
                sessão.
              </p>
            </div>
            <button
              onClick={() => handleWhatsAppRedirect()}
              className="text-orange-400 hover:text-orange-300 text-sm font-bold flex items-center gap-2 group transition-colors"
            >
              Explorar Catálogo Completo{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sua Brisa Box Premium",
                price: "R$ 189,90",
                tag: "Campeão de Vendas",
                desc: "Kit completo contendo cuia de silicone premium, dichavador de alumínio, seda orgânica e piteiras de vidro.",
              },
              {
                name: "Bong Glass Pro Borossilicato",
                price: "R$ 349,90",
                tag: "Edição Limitada",
                desc: "Bong de vidro importado com espessura de 5mm, percolador interno e resfriamento avançado de fumaça.",
              },
              {
                name: "Triturador Aircraft CNC",
                price: "R$ 129,90",
                tag: "Alta Durabilidade",
                desc: "Dichavador com dentes estilo diamante usinados cirurgicamente para trituração perfeita e sem esforço.",
              },
            ].map((prod, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-zinc-900/80 border border-white/10 overflow-hidden hover:border-orange-500/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 z-10 px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-full text-orange-400">
                  {prod.tag}
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 mb-6 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-all duration-300">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {prod.name}
                  </h3>
                  <p className="text-zinc-400 text-xs mb-4 leading-relaxed h-12 overflow-hidden">
                    {prod.desc}
                  </p>
                  <p className="text-orange-400 font-mono font-black text-2xl">
                    {prod.price}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleWhatsAppRedirect(prod.name)}
                    className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-orange-500 text-white hover:text-zinc-950 font-bold text-sm transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center gap-2 shadow-lg"
                  >
                    Pedir no WhatsApp <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="beneficios"
        className="py-24 px-6 max-w-7xl mx-auto relative z-10"
      >
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-[2.5rem] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Por que escolher a Sua Brisa?
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed">
              Diferente de tabacarias tradicionais e poluídas visualmente, nós
              focamos na sofisticação do seu momento. Entregamos uma experiência
              fluida do início ao fim.
            </p>
            <div className="space-y-4">
              {[
                "Processamento imediato com chave Pix copia e cola",
                "Suporte humanizado em tempo real para tirar dúvidas de peças",
                "Logística otimizada com envio rápido no mesmo dia",
                "Embalagens seladas contra qualquer tipo de odor",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mt-1 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-zinc-300 text-sm md:text-base">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-tr from-orange-500/10 to-amber-500/5 border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center">
            <Leaf className="w-24 h-24 text-orange-500/20 animate-pulse" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-white/10 text-center">
              <p className="text-white font-bold text-sm">
                "Não é deles, nem nossa, mas sim Sua."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">
          Quem Já Garantiu a Brisa
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              text: "Atendimento sensacional no WhatsApp. Me ajudaram a montar o kit perfeito de acordo com o que eu queria gastar. O Pix foi super prático e a embalagem veio totalmente discreta.",
              author: "Guilherme M.",
            },
            {
              text: "O bong de borossilicato é bruto demais, qualidade muito acima do mercado de bairro comum. Valeu cada centavo, entrega rápida demais aqui em SP.",
              author: "Rodrigo S.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-300 text-base md:text-lg italic leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>
              <p className="font-bold text-white flex items-center gap-2 text-sm">
                {testimonial.author}{" "}
                <span className="text-zinc-600 font-normal text-xs">
                  • Cliente Verificado
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 bg-zinc-900/10 border-t border-white/5 relative z-10"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center tracking-tight">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Como compro se o site não tem carrinho?",
                a: "Nosso modelo é de atendimento direto e exclusivo. Você clica no produto desejado, ele gera um atalho direto para o nosso WhatsApp com o nome do item. Nosso time fecha os detalhes de entrega e te envia a chave Pix imediatamente.",
              },
              {
                q: "Quais são as diretrizes de envio e prazos?",
                a: "Após a confirmação do pagamento via Pix, os pedidos são separados e despachados em até 24 horas úteis. O código de rastreamento ou dados do motoboy são enviados diretamente no seu WhatsApp.",
              },
              {
                q: "Como tenho certeza de que a embalagem é discreta?",
                a: "A caixa protetora externa é totalmente lisa de papelão pardo, sem fitas personalizadas, sem logos da tabacaria e sem qualquer alusão ao fumo. Apenas com a etiqueta padrão de envio exigida pelas transportadoras.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-white/5 rounded-2xl bg-zinc-900/40 overflow-hidden transition-colors duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors"
                >
                  <span className="font-bold text-white text-sm md:text-base tracking-tight">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${activeFaq === i ? "rotate-180 text-orange-400" : ""}`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Viva a Sua Brisa.
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Não espere mais para mudar o nível do seu momento. Peça agora, faça
            seu Pix e garanta a melhor curadoria de tabacaria do Brasil.
          </p>
          <button
            onClick={() => handleWhatsAppRedirect()}
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-black text-base md:text-lg transition-all duration-300 hover:bg-orange-400 hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-5 h-5 fill-zinc-950 text-zinc-950" />{" "}
            Conversar com Especialista
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-zinc-950 py-12 px-6 relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-black tracking-tighter text-white mb-1">
              Sua
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Brisa
              </span>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm">
              Não é deles, nem nossa, mas sim Sua, Sua Brisa.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 text-zinc-500 text-xs md:text-sm font-semibold bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 text-red-400" /> Proibido para
              menores de 18 anos
            </div>
            <p className="text-zinc-600 text-[11px] mt-2">
              © {new Date().getFullYear()} Sua Brisa. Todos os direitos
              reservados. Desenvolvido sob alta curadoria técnica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
