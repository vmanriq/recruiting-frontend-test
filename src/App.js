import "./App.css";
import { useEffect, useState } from "react";
import getInvoicesPending from "./utils/apiClient";
import { allPending } from "./dummyData";
import { Container } from "@mui/material";
import FacturasComponent from "./components/FacturasComponent";
import NotasCreditoComponent from "./components/NotasCreditoComponent";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [facturas, setFacturas] = useState(null);
  const [allNotasCredito, setAllNotasCredito] = useState([]);
  const [selectedFactura, setSelectedFactura] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filterPending = (pendings) => {
    const filteredFacturas = pendings.filter(
      (pending) => pending.type === "received"
    );
    setFacturas(filteredFacturas);
    setAllNotasCredito(
      pendings.filter((pending) => pending.type === "credit_note")
    );
    setSelectedFactura(filteredFacturas[0]);
  };

  useEffect(() => {
    filterPending(allPending);
  }, []);

  return (
    <Container>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        setSelectedFactura={setSelectedFactura}
      ></ModalComponent>
      <Container>
        {facturas ? (
          <FacturasComponent
            facturas={facturas}
            setSelectedFactura={setSelectedFactura}
            selectedFactura={selectedFactura}
          ></FacturasComponent>
        ) : (
          "loading"
        )}
      </Container>
      <Container>
        {selectedFactura ? (
          <NotasCreditoComponent
            allNotasCredito={allNotasCredito}
            setAllNotasCredito={setAllNotasCredito}
            selectedFactura={selectedFactura}
            setShowModal={setShowModal}
          ></NotasCreditoComponent>
        ) : null}
      </Container>
    </Container>
  );
}

export default App;
