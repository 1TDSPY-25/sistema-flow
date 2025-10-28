import neoQuimicaImg from '../../assets/img/rodape/Patrocinadores/neo_quimica.png';
import pampersImg from '../../assets/img/rodape/Patrocinadores/pampers.png';
import unileverImg from '../../assets/img/rodape/Patrocinadores/unilever.png';
import niveaImg from '../../assets/img/rodape/Patrocinadores/nivea.png';
import zetaImg from '../../assets/img/rodape/Patrocinadores/zeta.png';
import kenvueImg from '../../assets/img/rodape/Patrocinadores/kenvue.png';
import nestleImg from '../../assets/img/rodape/Patrocinadores/nestle.png';
import borgImg from '../../assets/img/rodape/Patrocinadores/borg.png';
import cimedImg from '../../assets/img/rodape/Patrocinadores/cimed.png';

export function Rodape() {
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800" style={{ marginBottom: '40px' }}>
            Marcas <strong>Queridinhas</strong>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://www.neoquimica.com.br" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={neoQuimicaImg} alt="Neo Química" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://www.pampers.com.br" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={pampersImg} alt="Pampers" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://www.unilever.com.br" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={unileverImg} alt="Unilever" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://www.nivea.com.br" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={niveaImg} alt="Nivea" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://www.instagram.com/zetaskin/" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={zetaImg} alt="Zeta" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://www.kenvue.com/pt-br/" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={kenvueImg} alt="Kenvue" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://www.nestle.com.br" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={nestleImg} alt="Nestlé" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://borgsaude.com.br/" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={borgImg} alt="Borg" className="w-16 h-16 object-contain" />
              </div>
            </a>

            <a href="https://cimedremedios.com.br/" target="_blank" rel="noopener noreferrer">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center hover:bg-purple-300 transition-colors cursor-pointer">
                <img src={cimedImg} alt="Cimed" className="w-16 h-16 object-contain" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-900 h-32 flex items-center justify-between">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="#" className="hover:underline">Preguiça S/A</a>. All Rights Reserved.
          </span>

          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-20">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}