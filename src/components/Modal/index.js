import { FiX } from "react-icons/fi";
import "./modal.css";

export default function Modal({ conteudo, close }) {
  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClick={close}>
          <FiX size={25} color="#fff" />
          Fechar
        </button>

        <main>
          <h2>Detalhes do chamado</h2>
          <div className="row">
            <span>
              Cliente: <i>{conteudo.cliente}</i>
            </span>
          </div>
          <div className="row">
            <span>
              Assunto: <i>{conteudo.assunto}</i>
            </span>
            <span>
              Criado em: <i>{conteudo.createdFormat}</i>
            </span>
          </div>
          <div className="row">
            <span>
              Status:{" "}
              <i
                style={{
                  backgroundColor:
                    conteudo.status === "Aberto" ? "#35E551" : "#595959",
                  color: "#fff",
                  borderRadius: 4,
                  marginLeft: 5,
                }}
              >
                {conteudo.status}
              </i>
            </span>
          </div>
          {conteudo.complemento !== "" && (
            <>
              <h3>Complemento</h3>
              <p>{conteudo.complemento}</p>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
