import Link from "next/link";

export const metadata = {
  title: "Termos de Serviço | VivaldiSocial",
  description:
    "Termos de serviço do aplicativo VivaldiSocial. Condições de uso, responsabilidades e diretrizes para gerenciamento de postagens em redes sociais.",
};

export default function TermosDeServico() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/" className="btn btn-ghost mb-8 gap-2">
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
        <h1>Termos de Serviço do VivaldiSocial</h1>
        <p className="text-sm text-gray-500">
          Última atualização: 13 de junho de 2026
        </p>

        <p>
          Bem-vindo ao VivaldiSocial! Ao acessar ou utilizar nosso aplicativo,
          você concorda em cumprir e estar vinculado aos presentes Termos de
          Serviço. Leia atentamente este documento antes de utilizar a
          plataforma. Se você não concordar com qualquer parte destes termos,
          não deverá utilizar o serviço.
        </p>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao criar uma conta, acessar ou usar o VivaldiSocial, você confirma que
          leu, entendeu e concorda com estes Termos de Serviço, bem como com
          nossa Política de Privacidade. Estes termos aplicam-se a todos os
          usuários, visitantes e qualquer pessoa que acesse ou utilize o
          aplicativo.
        </p>

        <h2>2. Descrição do Serviço</h2>
        <p>
          O VivaldiSocial é uma plataforma que permite aos usuários gerenciar,
          agendar e publicar conteúdo simultaneamente em múltiplas redes
          sociais, incluindo, mas não se limitando a, Instagram, Facebook,
          Twitter/X, LinkedIn, TikTok e YouTube. O serviço oferece
          funcionalidades como:
        </p>
        <ul>
          <li>
            Criação e agendamento de postagens para múltiplas plataformas.
          </li>
          <li>
            Gerenciamento de conteúdo multimídia (imagens, vídeos, textos).
          </li>
          <li>Analytics e relatórios de desempenho de publicações.</li>
          <li>Integração com APIs oficiais das redes sociais parceiras.</li>
        </ul>

        <h2>3. Elegibilidade</h2>
        <p>Para utilizar o VivaldiSocial, você declara que:</p>
        <ul>
          <li>
            Tem idade mínima de 18 anos ou a maioridade legal em seu país.
          </li>
          <li>Possui capacidade legal para celebrar contratos vinculativos.</li>
          <li>
            Não está proibido de utilizar o serviço por qualquer lei aplicável.
          </li>
          <li>
            Fornecerá informações verdadeiras, precisas e atualizadas durante o
            processo de cadastro.
          </li>
        </ul>

        <h2>4. Registro e Segurança da Conta</h2>
        <p>
          Você é responsável por manter a confidencialidade de suas credenciais
          de acesso e por todas as atividades realizadas em sua conta. Você
          concorda em:
        </p>
        <ul>
          <li>Não compartilhar sua senha ou credenciais com terceiros.</li>
          <li>
            Notificar imediatamente o VivaldiSocial sobre qualquer uso não
            autorizado de sua conta.
          </li>
          <li>
            Não criar mais de uma conta sem autorização expressa da plataforma.
          </li>
          <li>Não utilizar a conta de outro usuário sem permissão.</li>
        </ul>

        <h2>5. Conexão com Redes Sociais</h2>
        <p>
          O VivaldiSocial requer autorização para acessar as APIs das redes
          sociais que você deseja gerenciar. Ao conectar suas contas:
        </p>
        <ul>
          <li>
            Você declara ser o titular legítimo ou estar devidamente autorizado
            a gerenciar cada conta de rede social conectada.
          </li>
          <li>
            Você concede ao VivaldiSocial permissão para acessar, publicar e
            gerenciar conteúdo em seu nome, conforme os escopos de permissão
            definidos por cada plataforma.
          </li>
          <li>
            O funcionamento do serviço está sujeito às políticas, limites de uso
            e disponibilidade das APIs das redes sociais, que podem ser
            alterados unilateralmente por seus respectivos proprietários.
          </li>
          <li>
            O VivaldiSocial não se responsabiliza por suspensões, bloqueios ou
            restrições aplicadas pelas redes sociais devido ao não cumprimento
            de suas diretrizes individuais.
          </li>
        </ul>

        <h2>6. Plano de Assinatura e Pagamento</h2>
        <p>
          O VivaldiSocial é um serviço pago por assinatura, oferecendo
          diferentes planos conforme o número de redes sociais gerenciadas,
          volume de postagens e funcionalidades adicionais. Ao contratar um
          plano:
        </p>
        <ul>
          <li>
            O valor da assinatura será cobrado conforme o plano escolhido, de
            forma mensal ou anual, conforme sua seleção.
          </li>
          <li>
            As cobranças são processadas por meio de plataformas de pagamento
            terceirizadas e seguras.
          </li>
          <li>
            Você pode cancelar sua assinatura a qualquer momento, mas o
            cancelamento só terá efeito ao final do período já faturado, sem
            reembolso proporcional.
          </li>
          <li>
            O VivaldiSocial reserva-se o direito de alterar os valores dos
            planos, mediante notificação prévia de 30 dias.
          </li>
          <li>
            Em caso de inadimplemento, o acesso ao serviço poderá ser suspenso
            até a regularização do pagamento.
          </li>
        </ul>

        <h2>7. Responsabilidades do Usuário</h2>
        <p>Ao utilizar o VivaldiSocial, você concorda em:</p>
        <ul>
          <li>
            Não publicar conteúdo ilegal, difamatório, obsceno, violento,
            discriminatório ou que viole direitos de terceiros.
          </li>
          <li>
            Respeitar as leis de direitos autorais e propriedade intelectual.
          </li>
          <li>
            Não utilizar o serviço para enviar spam, mensagens não solicitadas
            ou qualquer forma de comunicação comercial não autorizada.
          </li>
          <li>
            Não tentar burlar, modificar, descompilar ou realizar engenharia
            reversa do aplicativo.
          </li>
          <li>
            Não usar o VivaldiSocial para disseminar malware, vírus ou qualquer
            código malicioso.
          </li>
          <li>
            Cumprir os termos de serviço de cada rede social conectada à
            plataforma.
          </li>
        </ul>

        <h2>8. Propriedade Intelectual</h2>
        <p>
          O VivaldiSocial, incluindo seu logotipo, nome, interface, código-fonte
          e design, é de propriedade exclusiva do VivaldiSocial ou de seus
          licenciantes. Nenhuma parte do aplicativo pode ser copiada,
          reproduzida, distribuída ou modificada sem autorização prévia por
          escrito.
        </p>
        <p>
          O conteúdo que você publica por meio do VivaldiSocial continua sendo
          de sua propriedade. Ao utilizar o serviço, você nos concede uma
          licença não exclusiva, mundial, livre de royalties para usar,
          reproduzir e exibir esse conteúdo exclusivamente para a finalidade de
          operar, promover e melhorar o serviço.
        </p>

        <h2>9. Privacidade e Dados</h2>
        <p>
          O tratamento de seus dados pessoais é regido pela nossa{" "}
          <Link href="/politicas-de-privacidade" className="link link-primary">
            Política de Privacidade
          </Link>
          , que faz parte integrante destes Termos de Serviço. Ao utilizar o
          VivaldiSocial, você também concorda com as práticas descritas na
          referida política.
        </p>

        <h2>10. Limitação de Responsabilidade</h2>
        <p>
          Em nenhuma hipótese o VivaldiSocial será responsável por danos
          indiretos, incidentais, especiais, consequenciais ou punitivos
          decorrentes do uso ou da impossibilidade de uso do serviço, incluindo,
          sem limitação:
        </p>
        <ul>
          <li>Perda de dados ou conteúdo agendado.</li>
          <li>
            Suspensão ou cancelamento de contas em redes sociais conectadas.
          </li>
          <li>Indisponibilidade temporária ou permanente do serviço.</li>
          <li>Lucros cessantes ou perda de oportunidades de negócio.</li>
        </ul>
        <p>
          A responsabilidade total do VivaldiSocial, em qualquer hipótese, está
          limitada ao valor total pago por você nos 12 meses anteriores ao
          evento que deu origem à reclamação.
        </p>

        <h2>11. Cancelamento e Suspensão</h2>
        <p>
          O VivaldiSocial reserva-se o direito de suspender ou cancelar contas
          que violem estes Termos de Serviço, sem aviso prévio e sem reembolso.
          Você pode cancelar sua conta a qualquer momento através das
          configurações do aplicativo.
        </p>
        <p>Em caso de cancelamento:</p>
        <ul>
          <li>
            O acesso ao serviço será encerrado ao final do período de
            faturamento vigente.
          </li>
          <li>Os dados de agendamentos futuros serão perdidos.</li>
          <li>
            O VivaldiSocial poderá reter cópias de backup pelo período
            necessário para cumprir obrigações legais.
          </li>
        </ul>

        <h2>12. Alterações nos Termos</h2>
        <p>
          Podemos modificar estes Termos de Serviço periodicamente. As
          alterações entrarão em vigor 30 dias após a publicação no aplicativo
          ou notificação por e-mail. O uso continuado do serviço após as
          alterações constitui aceitação dos novos termos.
        </p>

        <h2>13. Legislação Aplicável</h2>
        <p>
          Estes Termos de Serviço são regidos pelas leis da República Federativa
          do Brasil. Qualquer disputa decorrente destes termos será resolvida no
          foro da Comarca de São Paulo, SP, com exclusão de qualquer outro.
        </p>

        <h2>14. Disposições Gerais</h2>
        <ul>
          <li>
            Caso qualquer disposição destes termos seja considerada inválida ou
            inexequível, as demais disposições permanecerão em pleno vigor.
          </li>
          <li>
            A falha do VivaldiSocial em exercer qualquer direito sob estes
            termos não constituirá renúncia a tal direito.
          </li>
          <li>
            Estes termos constituem o acordo integral entre você e o
            VivaldiSocial em relação ao uso do serviço.
          </li>
          <li>
            Você não pode ceder ou transferir estes termos ou seus direitos aqui
            estabelecidos sem o consentimento prévio por escrito do
            VivaldiSocial.
          </li>
        </ul>

        <h2>15. Contato</h2>
        <p>
          Para dúvidas, reclamações ou solicitações relacionadas a estes Termos
          de Serviço, entre em contato:
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
        <p>
          &copy; {new Date().getFullYear()} VivaldiSocial. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
