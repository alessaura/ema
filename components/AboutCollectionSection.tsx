import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 pt-24 pb-16 md:px-12 lg:px-20 md:pt-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tight md:text-6xl lg:text-7xl text-gray-900 transition-all duration-700 hover:tracking-wide">
              SOBRE A{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent italic font-extrabold">
                COLEÇÃO
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-700 transition-all duration-300 hover:text-gray-800">
              <span className="font-bold text-gray-900 italic bg-gradient-to-r from-emerald-100 to-green-50 px-2 py-1 rounded-md transition-all duration-300 hover:from-emerald-200 hover:to-green-100">
                Embalagens Mundo Afora (EMA)
              </span>{" "}
              é uma coleção editorial criada por{" "}
              <span className="font-bold text-gray-900 bg-gradient-to-r from-purple-100 to-pink-50 px-2 py-1 rounded-md transition-all duration-300 hover:from-purple-200 hover:to-pink-100">
                Assunta Napolitano Camilo
              </span>{" "}
              que explora como diferentes{" "}
              <em className="italic text-emerald-700 font-semibold">culturas</em>{" "}
              expressam sua identidade através do{" "}
              <em className="italic text-emerald-700 font-medium">design</em>{" "}
              de embalagens.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 transition-all duration-300 hover:text-gray-800">
              Resultado de viagens por mais de{" "}
              <span className="font-bold text-gray-900 bg-gradient-to-r from-amber-100 via-orange-50 to-red-50 px-2 py-1 rounded-md transition-all duration-300 hover:shadow-md">
                80 países
              </span>, o projeto revela que embalagens são verdadeiros{" "}
              <span className="font-bold text-gray-900 italic underline decoration-emerald-400 decoration-2 underline-offset-2">
                espelhos culturais
              </span>, contando histórias únicas sobre{" "}
              <em className="italic text-emerald-700 font-medium">tradições</em>, hábitos e a{" "}
              <span className="font-bold text-gray-900 italic bg-gradient-to-r from-emerald-100 to-green-50 px-2 py-1 rounded-md transition-all duration-300 hover:from-emerald-200 hover:to-green-100">
                evolução dos povos
              </span>.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 transition-all duration-300 hover:text-gray-800">
              Uma{" "}
              <span className="font-bold text-gray-900 italic bg-gradient-to-r from-green-100 to-emerald-50 px-2 py-1 rounded-md transition-all duration-300 hover:from-green-200 hover:to-emerald-100">
                jornada antropológica visual
              </span>{" "}
              que mostra como a{" "}
              <em className="italic text-emerald-700 font-semibold">riqueza cultural</em>{" "}
              está embalada nas gôndolas ao alcance de todos.
            </p>
          </div>

          {/* Call to action button */}
          <div className="pt-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-green-600">
              <span className="relative z-10">Descobrir a Coleção</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-green-200/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            <Image
              src="/colecao.png"
              width={450}
              height={450}
              alt="Dois livros da coleção Embalagens Mundo Afora, mostrando a diversidade cultural em design de embalagens"
              className="object-contain shadow-2xl rounded-2xl transition-all duration-500 hover:shadow-3xl"
              priority
            />
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-40 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;