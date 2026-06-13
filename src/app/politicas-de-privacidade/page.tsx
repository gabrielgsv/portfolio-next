import Link from "next/link";

export const metadata = {
  title: "Políticas de Privacidade | VivaldiSocial",
  description:
    "Políticas de privacidade do aplicativo VivaldiSocial. Saiba como coletamos, usamos e protegemos seus dados.",
};

export default function PoliticasDePrivacidade() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link
        href="/"
        className="btn btn-ghost mb-8 gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Voltar
      </Link>

      <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
        <h1>Políticas de Privacidade do VivaldiSocial</h1>
        <p className="text-sm text-gray-500">
          Última atualização: 13 de junho de 2026
        </p>

        <p>
          Esta Política de Privacidade descreve como o VivaldiSocial coleta, usa,
          armazena e protege as informações pessoais dos usuários. Ao utilizar o
          aplicativo, você concorda com as práticas descritas neste documento.
        </p>

        <h2>1. Informações que Coletamos</h2>
        <p>Podemos coletar os seguintes tipos de informações:</p>
        <ul>
          <li>
            <strong>Informações de cadastro:</strong> nome, endereço de e-mail,
            nome de usuário e foto de perfil fornecidos no momento do registro.
          </li>
          <li>
            <strong>Informações de perfil:</strong> biografia, interesses,
            localização e outros dados que você optar por adicionar ao seu perfil.
          </li>
          <li>
            <strong>Conteúdo gerado pelo usuário:</strong> publicações,
            comentários, mensagens e qualquer outro conteúdo compartilhado na
            plataforma.
          </li>
          <li>
            <strong>Informações de uso:</strong> dados sobre como você interage
            com o aplicativo, incluindo funcionalidades acessadas, tempo de uso e
            preferências.
          </li>
          <li>
            <strong>Informações do dispositivo:</strong> modelo do dispositivo,
            sistema operacional, identificadores únicos do dispositivo e dados de
            rede.
          </li>
        </ul>

        <h2>2. Como Utilizamos Suas Informações</h2>
        <p>Utilizamos suas informações para:</p>
        <ul>
          <li>Fornecer, manter e melhorar os serviços do VivaldiSocial.</li>
          <li>Personalizar sua experiência e recomendar conteúdo relevante.</li>
          <li>
            Comunicar atualizações, novidades e informações sobre o serviço.
          </li>
          <li>Garantir a segurança da plataforma e prevenir fraudes.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h2>3. Compartilhamento de Informações</h2>
        <p>
          O VivaldiSocial não vende suas informações pessoais para terceiros.
          Podemos compartilhar seus dados apenas nas seguintes situações:
        </p>
        <ul>
          <li>
            <strong>Com seu consentimento:</strong> quando você autorizar
            explicitamente o compartilhamento.
          </li>
          <li>
            <strong>Prestadores de serviço:</strong> com empresas que nos ajudam a
            operar a plataforma (hospedagem, análise de dados, etc.), sob
            contrato de confidencialidade.
          </li>
          <li>
            <strong>Exigência legal:</strong> quando necessário para cumprir uma
            obrigação legal, processo judicial ou solicitação governamental.
          </li>
          <li>
            <strong>Proteção de direitos:</strong> para proteger os direitos,
            propriedade ou segurança do VivaldiSocial, seus usuários ou o
            público.
          </li>
        </ul>

        <h2>4. Armazenamento e Segurança dos Dados</h2>
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger
          suas informações contra acesso não autorizado, alteração, divulgação ou
          destruição. Seus dados são armazenados em servidores seguros com
          criptografia em trânsito (SSL/TLS) e em repouso.
        </p>

        <h2>5. Seus Direitos (LGPD)</h2>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº
          13.709/2018), você tem os seguintes direitos:
        </p>
        <ul>
          <li>
            <strong>Confirmação e acesso:</strong> saber se tratamos seus dados
            pessoais e acessá-los.
          </li>
          <li>
            <strong>Correção:</strong> solicitar a correção de dados incompletos,
            inexatos ou desatualizados.
          </li>
          <li>
            <strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a
            anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei.
          </li>
          <li>
            <strong>Portabilidade:</strong> solicitar a portabilidade dos dados a
            outro fornecedor de serviço.
          </li>
          <li>
            <strong>Eliminação:</strong> solicitar a eliminação dos dados
            pessoais tratados com seu consentimento.
          </li>
          <li>
            <strong>Revogação do consentimento:</strong> revogar seu
            consentimento a qualquer momento.
          </li>
        </ul>

        <h2>6. Cookies e Tecnologias Semelhantes</h2>
        <p>
          O VivaldiSocial pode utilizar cookies e tecnologias semelhantes para
          melhorar a experiência do usuário, lembrar preferências e coletar dados
          analíticos. Você pode configurar seu dispositivo para recusar cookies,
          mas isso pode afetar a funcionalidade do aplicativo.
        </p>

        <h2>7. Retenção de Dados</h2>
        <p>
          Mantemos seus dados pessoais pelo período necessário para cumprir as
          finalidades descritas nesta política, a menos que um período de retenção
          mais longo seja exigido por lei. Quando não houver mais necessidade,
          seus dados serão excluídos ou anonimizados.
        </p>

        <h2>8. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Notificaremos os usuários sobre alterações significativas através do
          aplicativo ou por e-mail. Recomendamos revisar esta política
          regularmente.
        </p>

        <h2>9. Contato</h2>
        <p>
          Se você tiver dúvidas, solicitações ou preocupações sobre esta
          Política de Privacidade ou sobre o tratamento de seus dados pessoais,
          entre em contato conosco:
        </p>
        <ul>
          <li>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:contato@vivaldisocial.com">
              contato@vivaldisocial.com
            </a>
          </li>
        </ul>
      </article>

      <div className="divider my-12" />

      <footer className="text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} VivaldiSocial. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
