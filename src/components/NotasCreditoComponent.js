import { Fragment, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, TableCell, TableRow } from "@mui/material";
import { Container } from "@mui/material";
import formatCurrency from "../utils/currency"

function NotasCreditoComponent({
  allNotasCredito,
  setAllNotasCredito,
  selectedFactura,
  setShowModal,
}) {
  const [notasCredito, setNotasCredito] = useState([]);
  const [selectedNotaCredito, setSelectedNotaCredito] = useState(null);

  const filterNotasCredito = () => {
    if (selectedFactura) {
      setNotasCredito(
        allNotasCredito.filter(
          (notaCredito) => notaCredito.reference === selectedFactura.id
        )
      );
    }
  };

  const updateNotasCredito = () => {
    const updatedNotas = allNotasCredito.filter(
      (notaCredito) => notaCredito.id !== selectedNotaCredito.id
    );
    setAllNotasCredito(updatedNotas);
  };

  const handleAsignacion = () => {
    updateNotasCredito();
    setShowModal(true);
  };

  useEffect(() => {
    filterNotasCredito();
    setSelectedNotaCredito(null);
  }, [selectedFactura]);

  return (
    <Fragment>
      <Container>
        {notasCredito.length === 0 ? (
          "No hay notas de Crédito"
        ) : (
          <Fragment>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
               Selecciona una nota de crédito
              </FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {notasCredito.map((notaCredito) => (
                  <TableRow>
                    <TableCell>
                      <FormControlLabel
                        value={notaCredito.id}
                        control={<Radio />}
                        label={`${notaCredito.id} (${notaCredito.organization_id})`}
                        name="boton"
                        onChange={() => setSelectedNotaCredito(notaCredito)}
                      />
                    </TableCell>
                    <TableCell align="right">{formatCurrency(notaCredito.amount, notaCredito.currency)}</TableCell>
                  </TableRow>
                ))}
              </RadioGroup>
            </FormControl>
            <Container sx={{ mt: 3 }}>
              <Button
                variant="contained"
                disabled={!selectedNotaCredito}
                onClick={handleAsignacion}
              >
                Asignar
              </Button>
            </Container>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
}

export default NotasCreditoComponent;
