import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans">
      <div className="flex items-center justify-center my-10">
        <main className="rounded-xl flex w-full max-w-[70%] flex-col items-center justify-between bg-[#F9E9FF] sm:items-start shadow-2xl">
          {/* Bloomy */}
          <div id="bloomy" className="w-full mt-20 scroll-mt-20">
            <h1 className="text-6xl font-bold text-center text-[#974DCA] mb-10 font-[family-name:var(--font-luckiest-guy)]">
              Bem-vindo
            </h1>
            <Image
              className="mx-auto my-20"
              src="/ImagemBannerBloomy.png"
              alt="Bloomy Logo"
              width={800}
              height={200}
            />
            <h1 className="text-6xl font-bold text-center text-[#974DCA] mb-10 mt-10 font-[family-name:var(--font-bebas-neue)]">
              O sistema de amparo educacional que cabe na palma da sua mão!
            </h1>
          </div>

          <div className="my-10 h-1 w-[90%] mx-auto bg-[#BA68C8] rounded-xl" />

          {/* Baixe o app! */}
          <div id="baixe" className="w-full scroll-mt-20">
            <h1 className="mx-auto text-6xl font-bold text-center text-[#974DCA] mb-10 mt-10 font-[family-name:var(--font-luckiest-guy)]">
              Baixe o app!
            </h1>
            <p className="w-[80%] mx-auto text-center text-4xl text-[#4A148C] font-[family-name:var(--font-bebas-neue)]">
              Nosso aplicativo já esta disponível para download! Clique no botão abaixo para baixar e começar a usar o Bloomy hoje mesmo.
            </p>
            <Image
              className="mx-auto my-10"
              src="/MãoBloomy(1).png"
              alt="Bloomy Logo"
              width={800}
              height={150}
            />
            <button className="flex justify-center w-full mb-10 mt-20">
              <a
                href="https://drive.google.com/file/d/1kBXdHd9I4HfbFomAJVIMymEP7-pdu8ea/view?usp=drive_link"
                download
                className="bg-[#FFBB56] text-white text-4xl font-bold px-8 py-4 rounded-full hover:bg-[#d47f00] transition-colors duration-300 font-[family-name:var(--font-bebas-neue)]"
              >
                Download do App
              </a>
            </button>
          </div>

          <div className="my-10 h-1 w-[90%] mx-auto bg-[#BA68C8] rounded-xl" />

          {/* Nossa equipe */}
          <div id="equipe" className="scroll-mt-20">
            <h1 className="mx-auto text-6xl font-bold text-center text-[#974DCA] mb-10 mt-10 font-[family-name:var(--font-luckiest-guy)]">
              Nossa equipe
            </h1>
            <p className="w-[80%] mx-auto text-center text-4xl text-[#4A148C] font-[family-name:var(--font-bebas-neue)]">
              Somos uma equipe dedicada de desenvolvedores e educadores apaixonados por criar soluções inovadoras para melhorar a educação. Juntos, trabalhamos para fazer do Bloomy uma ferramenta eficaz para apoiar estudantes.
            </p>
            <div className="flex flex-row gap-10 mb-20 p-10 w-full justify-center">
              <div className="border-2 w-[25%] h-100"></div>
              <div className="border-2 w-[25%] h-100"></div>
              <div className="border-2 w-[25%] h-100"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
